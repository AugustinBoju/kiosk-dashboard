import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { InputDate } from './Inputs';
import { ButtonPrimary } from './Buttons';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Row } from './Helpers';

const dimensionsType = {
  business_unit: '',
  country: '',
  id: '',
};

const DateFilters: React.FC<{
  onApply: (
    start: string,
    end: string,
    dimensions: [],
    country: string
  ) => void;
}> = ({ onApply }) => {
  const date = new Date();
  date.setDate(date.getDate() - 30);
  const dateString = date.toISOString().split('T')[0];
  const today = new Date().toISOString().split('T')[0];

  const [start, setStart] = useState<string>(dateString);
  const [end, setEnd] = useState(today);
  const [dimensions] = useState([dimensionsType]);
  const [selectedCountry] = useState('');

  const handleApply = () => {
    onApply(start, end, dimensions as any, selectedCountry);
  };

  return (
    <Main>
      <Row className='w-full gap-4 items-end'>
        <InputDate
          selected={new Date(start)}
          label='Start'
          onChange={(e: any) => {
            if (e) setStart(e?.toISOString().split('T')[0]);
          }}
        />
        <InputDate
          selected={new Date(end)}
          label='End'
          onChange={(e) => {
            if (e) setEnd(e?.toISOString()?.split('T')[0]);
          }}
        />
        <ButtonPrimary
          leftIcon={<MagnifyingGlassIcon />}
          className='min-h-[50px]'
          onClick={handleApply}
        >
          {'Search'}
        </ButtonPrimary>
      </Row>
    </Main>
  );
};

export default DateFilters;

const Main = tw.div`
  w-full
  flex
  flex-row
  justify-between
  items-center
`;
