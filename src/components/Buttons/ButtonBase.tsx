import React, { Ref, forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { ButtonLoader } from './ButtonLoader';

export type ButtonsSizeType = 's' | 'm' | 'l' | 'xl' | '2xl';

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  size?: ButtonsSizeType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  children: React.ReactNode | string;
  ref?: Ref<HTMLButtonElement>;
}

export const ButtonBase = forwardRef(
  (props: ButtonBaseProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
    const {
      children,
      size = 'm',
      isLoading,
      leftIcon,
      rightIcon,
      iconOnly = false,
      disabled,
      type = 'button',
      ...remainingProps
    } = props;
    const isDisabled = disabled || isLoading;

    return (
      <Button
        $size={size}
        $iconOnly={iconOnly}
        type={type}
        {...remainingProps}
        disabled={isDisabled}
        ref={ref}
      >
        {leftIcon && (
          <IconContainer $isLoading={isLoading}>{leftIcon}</IconContainer>
        )}

        {iconOnly ? (
          <IconContainer $isLoading={isLoading}>{children}</IconContainer>
        ) : (
          children
        )}

        {rightIcon && (
          <IconContainer $isLoading={isLoading}>{rightIcon}</IconContainer>
        )}
        {isLoading && <ButtonLoader />}
      </Button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';

interface ButtonStyleProps {
  $size: ButtonsSizeType;
  $iconOnly: boolean;
}

interface IconContainerProps {
  $isLoading: boolean | undefined;
}

const IconContainer = styled.div<IconContainerProps>`
  opacity: ${({ $isLoading }: IconContainerProps) => ($isLoading ? 0 : 1)};
  svg {
    width: 17px;
    height: 17px;
  }
`;

const Button = tw.button<ButtonStyleProps>`
  relative
  text-center
  font-sans
  font-semibold
  border-0
  transition
  w-fit
  gap-2
  rounded-md
  flex
  flex-row
  justify-center
  items-center
  group/btnBase

  disabled:cursor-not-allowed
  disabled:hover:shadow-none

  active:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)_inset]
  
  ${({ $size, $iconOnly }: ButtonStyleProps) => {
    if ($size === 's')
      return `h-9 max-h-9 min-h-9 text-[12px] ${
        $iconOnly ? 'w-9 max-w-9 min-w-9 p-0' : 'px-4 py-[9px]'
      }`;
    if ($size === 'm')
      return `h-10 max-h-10 min-h-10 text-[12px] ${
        $iconOnly ? 'w-10 max-w-10 min-w-10 p-0' : 'px-4 py-[9px]'
      }`;
    if ($size === 'l')
      return `h-11 max-h-11 min-h-11 text-[12px] ${
        $iconOnly ? 'w-11 max-w-11 min-w-11 p-0' : 'px-4 py-[9px]'
      }`;
    if ($size === 'xl')
      return `h-12 max-h-12 min-h-12 text-[12px] ${
        $iconOnly ? 'w-12 max-w-12 min-w-12 p-0' : 'px-[30px] py-[15px]'
      }`;
    if ($size === '2xl')
      return `h-15 max-h-15 min-h-15 text-[12px] ${
        $iconOnly ? 'w-15 max-w-15 min-w-15 p-0' : 'px-4 py-[9px]'
      }`;
    return '';
  }}
`;

interface ButtonLabelProps {
  $isLoading: boolean;
}

export const ButtonLabel = tw.span<ButtonLabelProps>`
  ${({ $isLoading }: ButtonLabelProps) =>
    $isLoading ? 'opacity-0' : 'opacity-100'}
  flex
  flex-row
  justify-center
  items-center
  gap-3

  transition-all
  duration-500
`;
