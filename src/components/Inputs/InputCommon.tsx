import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Col, RowBetween, Row } from '../Helpers';
import { P14 } from '../../Texts';

export const MainContainer = tw(Col)`
  relative
  w-full
  h-fit
`;

export const LeftIconContainer = styled.div`
  z-index: 1;
  position: absolute;
  left: 20px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const RightIconContainer = styled.div`
  z-index: 1;
  position: absolute;
  right: 20px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const InputContainer = tw(RowBetween)`
  relative
  group/inputBaseContainer
`;

export interface InputStyledProps {
  $disabled: boolean;
  $hasError: boolean;
  $leftIcon: boolean;
  $rightIcon: boolean;
  $readOnly: boolean;
}

export const InputBase = `
  w-full
  min-h-[50px]
  rounded
  without-ring
  placeholder-grey-40
  text-charcoal
  font-medium
  text-sm
  leading-[normal]
  border
  border-grey-contour
  hover:border-grey-40
  px-[20px]
  bg-white
  transition
  duration-300
`;

export const InputStyled = tw.input<InputStyledProps>`
  ${() => InputBase}

  ${({ $leftIcon, $rightIcon }: InputStyledProps) => {
    if ($leftIcon && $rightIcon) return 'px-[48px]';
    if ($leftIcon) return 'pl-[48px]';
    if ($rightIcon) return 'pr-[48px]';
  }}

  ${({ $disabled, $hasError, $readOnly }: InputStyledProps) => {
    if ($readOnly) return '!border-grey-contour !text-grey-50 bg-grey-10';
    if ($hasError) return '!border-error';
    if ($disabled) return 'opacity-50 cursor-not-allowed !border-grey-contour';
    return 'focus:border-yellow-01';
  }}
`;

export const TextareaStyled = tw.textarea<InputStyledProps>`
  py-[16px]

  ${() => InputBase}

  ${({ $leftIcon, $rightIcon }: InputStyledProps) => {
    if ($leftIcon && $rightIcon) return 'px-[48px]';
    if ($leftIcon) return 'pl-[48px]';
    if ($rightIcon) return 'pr-[48px]';
  }}
  
  ${({ $disabled, $hasError }: InputStyledProps) => {
    if ($hasError) return '!border-error';
    if ($disabled) return 'opacity-50 cursor-not-allowed';
    return 'focus:border-yellow-01';
  }}
`;

export const LabelStyled = tw(P14)`
  text-charcoal
  font-medium
`;

export const LabelRow = tw(Row)`
  items-center
  gap-1.5
  mb-2.5
`;

interface LeftCharContainerProps {
  $disabled: boolean;
  $hasError: boolean;
  $hasFocus: boolean;
  $readOnly: boolean;
}

export const LeftCharContainer = tw.div<LeftCharContainerProps>`
  absolute
  left-0
  bottom-0
  max-h-[50px]
  h-full
  w-[54px]
  border-r
  border-grey-contour
  transition
  duration-300
  text-charcoal
  z-[1]

  ${({
    $disabled,
    $hasError,
    $hasFocus,
    $readOnly,
  }: LeftCharContainerProps) => {
    if ($readOnly) return '!border-grey-contour text-grey-50';
    if ($hasError) return '!border-error';
    if ($disabled) return 'opacity-50 cursor-not-allowed !border-grey-contour';
    if ($hasFocus) return 'border-yellow-01';
    return 'group-hover/inputBaseContainer:border-grey-40';
  }}
`;

export const LeftChar = tw(P14)`
  absolute
  left-[22px]
  bottom-[15px]
`;
