import { forwardRef, Ref } from 'react';
import { IconProps, Svg } from './Svg';

export const CalendarIcon = forwardRef(
  (props: IconProps, ref: Ref<SVGSVGElement>): JSX.Element => {
    return (
      <Svg viewBox='0 0 18 18' {...props} ref={ref}>
        <path
          d='M6 1.5V3.75'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 1.5V3.75'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.625 6.81738H15.375'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.771 10.2749H11.7778'
          stroke='#292D32'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.771 12.5249H11.7778'
          stroke='#292D32'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.99661 10.2749H9.00335'
          stroke='#292D32'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.99661 12.5249H9.00335'
          stroke='#292D32'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.22073 10.2749H6.22747'
          stroke='#292D32'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.22073 12.5249H6.22747'
          stroke='#292D32'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    );
  }
);

CalendarIcon.displayName = 'CalendarIcon';
