import tw from 'tailwind-styled-components';

export const Row = tw.div`
  flex
  flex-row
  items-center
`;

export const RowBetween = tw(Row)`
  justify-between
  items-center
`;

export const Col = tw.div`
  flex
  flex-col
`;

export const Center = tw.div`
  grid
  content-center
  justify-center
`;

export const Grid1 = tw.div`
  grid
  grid-cols-1
`;

export const Grid2 = tw.div`
  grid
  grid-cols-2
`;

export const Grid3 = tw.div`
  grid
  grid-cols-3
`;

export const Grid4 = tw.div`
  grid
  grid-cols-4
`;

export const Grid5 = tw.div`
  grid
  grid-cols-5
`;

export const GridCol1 = tw.div`
  col-span-1
`;

export const GridCol2 = tw.div`
  col-span-1
`;

export const AbsoluteCenter = tw.div`
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
`;

export const Relative = tw.div`
  relative
`;
