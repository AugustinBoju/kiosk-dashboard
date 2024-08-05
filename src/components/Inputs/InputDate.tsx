/* eslint-disable indent */
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerRC, {
  registerLocale,
  ReactDatePickerProps,
} from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/20/solid';
import tw from 'tailwind-styled-components';
import { styled } from 'styled-components';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { getMonth, getYear } from 'date-fns';
import { Row, RowBetween } from '../Helpers';
import { CalendarIcon } from '../Icons';
import { InputBase, LabelRow, LabelStyled } from '.';
import { P16 } from '../../Texts';
import { capitalizeFirstLetter, range } from '../../utils/utils';

const years = range(1950, 2024);
const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Aout',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

registerLocale('fr', fr);

export interface InputDateProps extends ReactDatePickerProps {
  toggleCalendarOnIconClick?: boolean;
  hasError?: boolean;
  label?: string;
  tooltip?: ReactNode | string;
  containerClassName?: string;
  placeholder?: string;
  dateFormat?: string;
  requiredHasBaseColor?: boolean;
  showMonthYearSelectors?: boolean;
}

export function InputDate(props: InputDateProps) {
  const {
    onChange,
    selected,
    disabled = false,
    hasError = false,
    label,
    containerClassName,
    placeholder = 'JJ / MM / AAAA',
    tooltip,
    dateFormat = 'dd/MM/yyyy',
    requiredHasBaseColor,
    showMonthYearSelectors = false,
    inline = false,
    ...datePickerProps
  } = props;

  return (
    <MainStyled $inline={inline} className={containerClassName}>
      {label && (
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
      <DatePickerStyledTw
        selected={selected}
        onChange={onChange}
        icon={<CalendarIcon className='mr-2' />}
        locale={fr}
        dateFormat={dateFormat}
        disabled={disabled}
        placeholderText={placeholder}
        showIcon
        toggleCalendarOnIconClick
        showPopperArrow={false}
        className='h-[50px] without-ring'
        wrapperClassName='h-[50px]'
        formatWeekDay={(nameOfDay) =>
          capitalizeFirstLetter(nameOfDay.slice(0, 3))
        }
        calendarIconClassname='h-5 w-5 right-1 mt-[7px]'
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <HeaderMain>
            <Row className='gap-2'>
              {showMonthYearSelectors ? (
                <>
                  <SelectStyled
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectStyled>

                  <SelectStyled
                    value={getYear(date)}
                    onChange={({ target: { value: v } }) =>
                      changeYear(Number(v))
                    }
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectStyled>
                </>
              ) : (
                <>
                  <Label>{date.getFullYear()}</Label>
                  <Label>{months[date.getMonth()]}</Label>
                </>
              )}
            </Row>

            <Row className='gap-3'>
              <HeaderMonthButton
                type='button'
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <ArrowSmallLeftIcon className='w-7 h-7' />
              </HeaderMonthButton>
              <HeaderMonthButton
                type='button'
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <ArrowSmallRightIcon className='w-7 h-7' />
              </HeaderMonthButton>
            </Row>
          </HeaderMain>
        )}
        {...datePickerProps}
        inline={inline}
        $disabled={disabled}
        $hasError={hasError}
      />
    </MainStyled>
  );
}

interface InputStyledProps {
  $disabled: boolean;
  $hasError: boolean;
}

const DatePickerStyledTw = tw(DatePickerRC)<InputStyledProps>`
  ${() => InputBase}

  ${({ $disabled, $hasError }: InputStyledProps) => {
    if ($hasError) return '!border-error';
    if ($disabled) return 'opacity-50 cursor-not-allowed !border-grey-contour';
    return 'focus:border-yellow-01';
  }}
`;

interface MainStyledProps {
  $inline: boolean;
}

const MainStyled = styled.div<MainStyledProps>`
  --yellow-light: #f9ecc9;
  --yellow: #017341;
  --grey-contour: #e7e7e7;
  --grey-blueWash: #d2d9db;

  width: 100%;

  .react-datepicker__view-calendar-icon input {
    padding: 10px 10px 10px 20px;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    border-color: var(--grey-contour);
    border-width: ${({ $inline }) => ($inline ? '0' : '1px')};
    box-shadow: ${({ $inline }) =>
      $inline ? 'none' : '0px 14px 24px 0px rgba(0, 0, 0, 0.05)'};
    min-width: 330.6px;
    min-height: 338.6px;

    .react-datepicker__month-container {
      width: 100%;
    }

    .react-datepicker__header {
      background-color: white;
      border-bottom: none;

      .react-datepicker__day-names {
        .react-datepicker__day-name {
          width: 38px;
          background-color: #f9f9fb;
          color: #757575;
          font-weight: 600;
          border-radius: 0.375rem;
        }
      }
    }

    .react-datepicker__month {
      margin: 0.8rem;
    }

    .react-datepicker__year-wrapper {
      width: 100%;
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-column-gap: 0.8rem;

      .react-datepicker__year-text {
        color: #303030;

        width: 100%;
        border: 1px solid transparent;

        &:hover {
          border: 1px solid var(--yellow);
        }

        &.react-datepicker__year-text--selected {
          background-color: var(--yellow-light) !important;
          border: 1px solid var(--yellow);
        }
      }
    }

    .react-datepicker__day {
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #303030;
      transition: 0.1s ease-in-out;
      background-color: transparent;

      &:hover {
        border: 1px solid var(--yellow);
      }

      &.react-datepicker__day--selected {
        border: 1px solid var(--yellow);
      }

      &.react-datepicker__day--today {
        position: relative;
        font-weight: normal;
        &::after {
          content: '•';
          font-size: 30px;
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          color: var(--yellow);
        }
      }

      &.react-datepicker__day--outside-month {
        color: var(--grey-blueWash);
      }

      &.react-datepicker__day--disabled {
        cursor: not-allowed;
        color: var(--grey-blueWash);
      }
    }
  }
`;

const HeaderMain = tw(RowBetween)`
  w-full
  px-[12px]
  mb-[16px]
  mt-[10px]
`;

const HeaderMonthButton = tw.button`
  text-[#017341]
  rounded-md
  transition
  hover:bg-[#f9ecc9]
  hover:shadow
  active:shadow-none
  without-ring
  disabled:text-gray-300
  disabled:opacity-50 
  disabled:cursor-not-allowed
  disabled:hover:bg-transparent
  disabled:hover:border-transparent
  disabled:hover:shadow-none
  disabled:hover:text-gray-300
  disabled:hover:cursor-not-allowed
`;

const Label = tw(P16)`
  text-charcoal
  font-bold
  capitalize
`;

const SelectStyled = tw.select`
  without-ring
  border-none
  text-charcoal
  py-0
  pl-0
  text-[16px]
  font-bold
`;
