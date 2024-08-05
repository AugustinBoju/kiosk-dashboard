import tw from 'tailwind-styled-components';
import { Loader } from '../Loader';

export function ButtonLoader(): JSX.Element | null {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
}

const LoaderContainer = tw.div`
  absolute
  top-0
  left-0
  w-full
  h-full
  grid
  justify-center
  content-center
`;
