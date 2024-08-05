import { forwardRef, Ref, SVGProps } from 'react';
import tw from 'tailwind-styled-components';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {}

export const Svg = forwardRef(
  (props: IconProps, ref: Ref<SVGSVGElement>): JSX.Element => {
    const { className, viewBox, children, ...svgProps } = props;

    return (
      <SvgStyled
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        viewBox={viewBox}
        fill='none'
        ref={ref}
        {...svgProps}
      >
        {children}
      </SvgStyled>
    );
  }
);

Svg.displayName = 'Svg';

const SvgStyled = tw.svg`
  w-4
  h-4
`;
