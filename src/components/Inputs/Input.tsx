import React, { ReactNode, Ref, forwardRef } from 'react';
import classNames from 'classnames';
import {
  InputContainer,
  InputStyled,
  LabelRow,
  LabelStyled,
  LeftIconContainer,
  MainContainer,
  RightIconContainer,
} from './InputCommon';

export interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  value?: string;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  tooltip?: ReactNode | string;
  containerClassName?: string;
  hasError?: boolean;
  required?: boolean;
  requiredHasBaseColor?: boolean;
  labelClassName?: string;
}

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>): React.ReactElement => {
    const {
      leftIcon,
      rightIcon,
      tooltip,
      disabled = false,
      containerClassName,
      labelClassName,
      hasError,
      requiredHasBaseColor,
      ...inputProps
    } = props;

    return (
      <MainContainer className={containerClassName}>
        {props.label && (
          <LabelRow>
            <LabelStyled className={labelClassName}>
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
        <InputContainer>
          {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
          <InputStyled
            ref={ref}
            disabled={disabled}
            type='text'
            $disabled={disabled}
            $hasError={!!hasError}
            $leftIcon={!!leftIcon}
            $rightIcon={!!rightIcon}
            $readOnly={!!inputProps.readOnly}
            {...inputProps}
          />
          {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
        </InputContainer>
      </MainContainer>
    );
  }
);

Input.displayName = 'Input';
