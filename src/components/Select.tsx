import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React, {
  ReactNode,
  FocusEventHandler,
  useState,
  MutableRefObject,
  useRef,
  useEffect,
} from 'react';
import tw from 'tailwind-styled-components';
import { useTranslation } from 'next-i18next';
import {
  InputBase,
  InputContainer,
  InputStyled,
  InputStyledProps,
  LabelRow,
  LabelStyled,
  LeftChar,
  LeftCharContainer,
  LeftIconContainer,
  RightIconContainer,
} from './Inputs';
import { RowBetween } from './Helpers';

export interface Option {
  label: string;
  value: string;
}

export interface OptionDescriptor extends Option {
  selected?: boolean;
  disabled?: boolean;
}

export interface SelectProps {
  options: OptionDescriptor[];
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  label?: string;
  search?: boolean;
  leftIcon?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  hasError?: boolean;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  tooltip?: ReactNode | string;
  required?: boolean;
  requiredHasBaseColor?: boolean;
  leftChar?: string;
}

interface HtmlSelectProps extends HTMLSelectElement {
  firstClickDone?: boolean;
}

export function Select(props: SelectProps): JSX.Element {
  const { t } = useTranslation();
  const {
    options,
    leftIcon,
    value,
    search = false,
    placeholder = t('generics.selectAnOption'),
    disabled = false,
    hasError = false,
    className,
    requiredHasBaseColor,
    leftChar,
  } = props;
  const [inputFilter, setInputFilter] = useState('');

  const ref: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const selectEltRef: MutableRefObject<HtmlSelectProps | null> =
    useRef<HtmlSelectProps | null>(null);

  const [isOptionDropdownOpen, setIsOptionDropdownOpen] = useState(false);

  // * Close dropdown when clicking outside
  useEffect(() => {
    function onClickOutside() {
      setIsOptionDropdownOpen(false);
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (!event?.target) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  function findLabelOfOption(value: string): string {
    const option = options.find((o) => o.value === value);
    return option?.label || '';
  }

  function filterOptions(filter: string, options: Option[]) {
    if (filter) {
      return options.filter((option) => {
        if (option.label && typeof option.label === 'string') {
          const label = option.label.toLowerCase();
          return label.includes(filter.toLowerCase());
        }
      });
    }

    return options;
  }

  function toggleDropdown(): void {
    if (!disabled) {
      setIsOptionDropdownOpen(!isOptionDropdownOpen);
    }
  }

  function onSelectValue(value: string) {
    props.onChange?.(value);
    toggleDropdown();
  }

  function onClick() {
    toggleDropdown();

    if (selectEltRef.current) {
      selectEltRef.current.firstClickDone = true;
    }
  }

  useEffect(() => {
    if (
      selectEltRef.current &&
      selectEltRef.current.firstClickDone &&
      !isOptionDropdownOpen
    ) {
      selectEltRef.current.focus();
      selectEltRef.current.blur();
    }
  }, [isOptionDropdownOpen]);

  return (
    <Main ref={ref} className={className}>
      {props.label && (
        <LabelRow>
          <LabelStyled>
            {props.label}
            {props.required && (
              <span
                className={classNames(!requiredHasBaseColor && 'text-error')}
              >
                {'*'}
              </span>
            )}
          </LabelStyled>
        </LabelRow>
      )}
      <SelectContainerStyled
        onClick={onClick}
        $disabled={disabled}
        $hasError={hasError}
        $leftIcon={!!leftIcon}
        $rightIcon={true}
        $hasFocus={isOptionDropdownOpen}
        $readOnly={false}
        className={classNames(Boolean(leftChar) && 'pl-[70px]')}
      >
        {Boolean(leftChar) && (
          <LeftCharContainer
            $disabled={disabled}
            $hasFocus={isOptionDropdownOpen}
            $hasError={hasError}
            $readOnly={false}
          >
            <LeftChar>{leftChar}</LeftChar>
          </LeftCharContainer>
        )}
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}

        {/* HTML select tag (hidden) only used to handle blur on forms validation */}
        <SelectStyled
          onBlur={(e) => props.onBlur && props.onBlur(e)}
          ref={selectEltRef}
        />

        <SelectedOption
          className={classNames(value ? 'text-charcoal' : 'text-grey-40')}
        >
          <p className='truncate'>
            {value ? findLabelOfOption(value.toString()) : placeholder}
          </p>
        </SelectedOption>
        <RightIconContainer>
          <ChevronDownIconStyled $isOpen={isOptionDropdownOpen} />
        </RightIconContainer>
      </SelectContainerStyled>
      {isOptionDropdownOpen && (
        <Dropdown>
          {search && (
            <>
              <SearchInput
                placeholder={`${t('verbs.search')}...`}
                value={inputFilter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputFilter(e.target.value)
                }
                $disabled={disabled}
                $hasError={hasError}
                $leftIcon={!!leftIcon}
                $rightIcon={false}
                $readOnly={false}
              />
              <div className='h-px bg-grey-contour' />
            </>
          )}

          <DropdownOptions>
            {filterOptions(inputFilter, options).map((option: Option) => (
              <DropdownOption
                onClick={() => onSelectValue(option.value)}
                $isSelected={
                  value?.toString() === option.value?.toString() ?? false
                }
                key={option.value}
              >
                {option.label}
                {value?.toString() === option.value?.toString() && (
                  <CheckIconStyled />
                )}
              </DropdownOption>
            ))}
          </DropdownOptions>
        </Dropdown>
      )}
    </Main>
  );
}

const Main = tw.div`
  flex
  flex-col
  relative
  w-full
`;

interface SelectStyledProps extends InputStyledProps {
  $hasFocus: boolean;
}

const SelectContainerStyled = tw(InputContainer)<SelectStyledProps>`
  relative
  cursor-pointer

  ${() => InputBase}

  ${({ $leftIcon, $rightIcon }: SelectStyledProps) => {
    if ($leftIcon && $rightIcon) return 'px-[48px]';
    if ($leftIcon) return 'pl-[48px]';
    if ($rightIcon) return 'pr-[48px]';
  }}

  ${({ $disabled, $hasError, $hasFocus }: SelectStyledProps) => {
    if ($hasError) return '!border-error';
    if ($disabled) return 'opacity-50 cursor-not-allowed !border-grey-contour';
    if ($hasFocus) return '!border-yellow-01';
    return '';
  }}
`;

const Dropdown = tw.div`
  rounded
  bg-white
  shadow
  w-full
  top-full
  mt-1
  absolute
  z-[2]
  max-h-60
  overflow-y-auto
  hide-scrollbar
`;

const SearchInput = tw(InputStyled)`
  h-9
  border-none
`;

interface DropdownOptionProps {
  $isSelected: boolean;
}

const DropdownOptions = tw.div`
  px-1
  pt-1
`;

const DropdownOption = tw(RowBetween)<DropdownOptionProps>`
  cursor-pointer
  hover:bg-grey-bg
  relative
  text-charcoal
  flex
  items-center
  text-xs
  rounded
  h-9
  w-full
  mb-1
  pr-[38px]
  pl-2
  ${(p: DropdownOptionProps) => p.$isSelected && 'bg-gray-50'}
`;

const SelectedOption = tw.div`
  w-full
  text-sm
`;

const CheckIconStyled = tw(CheckIcon)`
  ml-2
  w-4
  h-4
  min-w-4
  min-h-4
  absolute
  right-2
`;

interface ChevronStyledProps {
  $isOpen: boolean;
}

const ChevronDownIconStyled = tw(ChevronDownIcon)<ChevronStyledProps>`
  transition
  duration-300
  ${(p: ChevronStyledProps) => p.$isOpen && 'rotate-180'}
`;

const SelectStyled = tw.select`
  z-[-1]
  opacity-0
  absolute
`;
