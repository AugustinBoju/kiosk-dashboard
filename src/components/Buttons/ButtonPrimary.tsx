import tw from 'tailwind-styled-components';
import { forwardRef, Ref } from 'react';
import { ButtonBase, ButtonBaseProps, ButtonLabel } from './ButtonBase';

export const ButtonPrimary = forwardRef(
  (props: ButtonBaseProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
    const { children, isLoading, ...remainingProps } = props;

    return (
      <ButtonStyled ref={ref} {...remainingProps}>
        <ButtonLabel $isLoading={isLoading ?? false}>{children}</ButtonLabel>
      </ButtonStyled>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

const ButtonStyled = tw(ButtonBase)`
  text-charcoal
  bg-[#017341]
  text-white
  rounded-md
  disabled:bg-grey-blueWash
  disabled:text-grey-50
  hover:shadow-[0px_1.5px_0px_0px_#ffffff]
  hover:opacity-80
`;
