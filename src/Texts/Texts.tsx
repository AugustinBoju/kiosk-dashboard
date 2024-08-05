import { AnchorHTMLAttributes, ReactNode, forwardRef } from 'react';
import tw from 'tailwind-styled-components';

export interface TextsProps
  extends React.HTMLAttributes<
    HTMLParagraphElement | HTMLAnchorElement | HTMLHeadingElement
  > {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const H1 = forwardRef<HTMLHeadingElement, TextsProps>((props, ref) => {
  const { children, className, ...textProps } = props;
  return (
    <H1Styled ref={ref} className={className} {...textProps}>
      {children}
    </H1Styled>
  );
});

export const H2 = forwardRef<HTMLHeadingElement, TextsProps>((props, ref) => {
  const { children, className, ...textProps } = props;
  return (
    <H2Styled ref={ref} className={className} {...textProps}>
      {children}
    </H2Styled>
  );
});

export const H3 = forwardRef<HTMLHeadingElement, TextsProps>((props, ref) => {
  const { children, className, ...textProps } = props;
  return (
    <H3Styled ref={ref} className={className} {...textProps}>
      {children}
    </H3Styled>
  );
});

export const H4 = forwardRef<HTMLHeadingElement, TextsProps>((props, ref) => {
  const { children, className, ...textProps } = props;
  return (
    <H4Styled ref={ref} className={className} {...textProps}>
      {children}
    </H4Styled>
  );
});

export const P24 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P24Styled ref={ref} className={className} {...textProps}>
        {children}
      </P24Styled>
    );
  }
);

export const P22 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P22Styled ref={ref} className={className} {...textProps}>
        {children}
      </P22Styled>
    );
  }
);

export const P20 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P20Styled ref={ref} className={className} {...textProps}>
        {children}
      </P20Styled>
    );
  }
);

export const P18 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P18Styled ref={ref} className={className} {...textProps}>
        {children}
      </P18Styled>
    );
  }
);

export const P16 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P16Styled ref={ref} className={className} {...textProps}>
        {children}
      </P16Styled>
    );
  }
);

export const P14 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P14Styled ref={ref} className={className} {...textProps}>
        {children}
      </P14Styled>
    );
  }
);

export const P12 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P12Styled ref={ref} className={className} {...textProps}>
        {children}
      </P12Styled>
    );
  }
);

export const P11 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P11Styled ref={ref} className={className} {...textProps}>
        {children}
      </P11Styled>
    );
  }
);

export const P10 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P10Styled ref={ref} className={className} {...textProps}>
        {children}
      </P10Styled>
    );
  }
);

export const P08 = forwardRef<HTMLParagraphElement, TextsProps>(
  (props, ref) => {
    const { children, className, ...textProps } = props;
    return (
      <P08Styled ref={ref} className={className} {...textProps}>
        {children}
      </P08Styled>
    );
  }
);

interface Link1Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link1 = forwardRef<HTMLAnchorElement, Link1Props>((props, ref) => {
  const { children, className, ...textProps } = props;
  return (
    <Link1Styled ref={ref} className={className} {...textProps}>
      {children}
    </Link1Styled>
  );
});

const H1Styled = tw.h1`
  text-2xl
`;

const H2Styled = tw.h2`
  text-xl
`;

const H3Styled = tw.h3`
  text-lg
`;

const H4Styled = tw.h4`
  text-[24px]
`;

const P24Styled = tw.p`
  text-[24px]
`;

const P22Styled = tw.p`
  text-[22px]
`;

const P20Styled = tw.p`
  text-[20px]
`;

const P18Styled = tw.p`
  text-base
`;

const P16Styled = tw.p`
  text-[16px]
`;

const P14Styled = tw.p`
  text-sm
`;

const P12Styled = tw.p`
  text-xs
`;

const P11Styled = tw.p`
  text-[11px]
`;

const P10Styled = tw.p`
  text-2xs
`;

const P08Styled = tw.p`
  text-[8px]
`;

const Link1Styled = tw.a`
  text-primary-700
  hover:text-primary-500
  cursor-pointer
  font-semibold
`;

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
P24.displayName = 'P24';
P22.displayName = 'P22';
P20.displayName = 'P20';
P18.displayName = 'P18';
P16.displayName = 'P16';
P14.displayName = 'P14';
P12.displayName = 'P12';
P10.displayName = 'P10';
P11.displayName = 'P11';
P08.displayName = 'P08';
Link1.displayName = 'Link1';
