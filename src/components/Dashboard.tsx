import React, { useEffect, useState } from 'react';
import { fetchDimensions, fetchIndicators } from '../services/api';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import { IndicatorType } from '../services/indicator';
import { DimensionType } from '../services/dimension';
import tw from 'tailwind-styled-components';
import { H1, H2, H3 } from '../Texts';
import { Col, Row } from './Helpers';
import DateFilters from './DateFilters';
import { useMountEffect } from '../hooks/useMountEffect';
import { IMG_URL, LOGO_URL } from '../constant';

const Dashboard: React.FC = () => {
  const [dimensions, setDimensions] = useState<DimensionType[] | []>([]);

  const [franceIds] = useState<string[]>([]);
  let [franceCo2, setFranceCo2] = useState<number>(0);
  const [germanyIds] = useState<string[]>([]);
  let [germanyCo2, setGermanyCo2] = useState<number>(0);
  const [spainIds] = useState<string[]>([]);
  let [spainCo2, setSpainCo2] = useState<number>(0);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalCo2Emissions, setTotalCo2Emissions] = useState<number>(0);
  const [totalHeadcount, setTotalHeadcount] = useState<number>(0);
  const [femaleCount, setFemaleCount] = useState<number>(0);
  const [menCount, setMenCount] = useState<number>(0);
  const [genderParityRatio, setGenderParityRatio] = useState<number>(0);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const fetchCoData = async (start: string, end: string, id: string) => {
    try {
      const rep = await fetchIndicators(start, end, id, ['co2_emissions']);
      return rep;
    } catch (error) {
      console.error('[E] fetchCoData', error);
    }
  };

  const fetchData = async (startDate: string, endDate: string) => {
    try {
      const response = await axios.get('http://localhost:8080/indicators', {
        params: {
          start: startDate,
          end: endDate,
          dimensions: selectedCountry,
          indicators: [
            'total_revenue',
            'co2_emissions',
            'female_headcount',
            'male_headcount',
          ],
        },
      });
      const data = response.data.results;

      let totalRevenue = 0;
      let totalCo2Emissions = 0;
      let totalHeadcount = 0;
      let femaleHeadcount = 0;
      let maleHeadcount = 0;
      data?.forEach((obj: IndicatorType) => {
        if (obj.indicator === 'total_revenue') {
          totalRevenue += obj.value;
        }
        if (obj.indicator === 'co2_emissions') {
          totalCo2Emissions += obj.value;
        }
        if (obj.indicator === 'female_headcount') {
          femaleHeadcount += obj.value;
        }
        if (obj.indicator === 'male_headcount') {
          maleHeadcount += obj.value;
        }
      });

      totalHeadcount = femaleHeadcount + maleHeadcount;
      const genderParityRatio = totalHeadcount
        ? femaleHeadcount / totalHeadcount
        : 0;

      setTotalRevenue(totalRevenue);
      setTotalCo2Emissions(totalCo2Emissions);
      setTotalHeadcount(totalHeadcount);
      setGenderParityRatio(genderParityRatio);
      setFemaleCount(femaleHeadcount);
      setMenCount(maleHeadcount);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const data = [
    { name: 'Total Revenue', value: totalRevenue },
    { name: 'Total CO₂ Emissions', value: totalCo2Emissions },
    { name: 'Total Headcount', value: totalHeadcount },
    { name: 'Men count', value: menCount },
    { name: 'Women count', value: femaleCount },
    { name: 'Gender Parity Ratio', value: genderParityRatio },
  ];

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  async function getCO2Value() {
    const today = new Date().toISOString().split('T')[0];
    await Promise.all(
      franceIds.map(async (id: string) => {
        const rep = await fetchCoData('2023-01-01', today, id);
        if (rep) {
          rep.forEach((i: IndicatorType) => {
            setFranceCo2(franceCo2 + i.value);
          });
        }
      })
    );
    await Promise.all(
      spainIds.map(async (id: string) => {
        const rep = await fetchCoData('2023-01-01', today, id);
        if (rep) {
          rep.forEach((i: IndicatorType) => {
            setSpainCo2(spainCo2 + i.value);
          });
        }
      })
    );
    await Promise.all(
      germanyIds.map(async (id: string) => {
        const rep = await fetchCoData('2023-01-01', today, id);
        if (rep) {
          rep.forEach((i: IndicatorType) => {
            setGermanyCo2(germanyCo2 + i.value);
          });
        }
      })
    );
  }

  async function fetchD() {
    const dimensionsData = await fetchDimensions();
    setDimensions(dimensionsData);
  }

  useMountEffect(() => {
    fetchD();
  });

  useEffect(() => {
    const getIds = () => {
      if (dimensions) {
        dimensions.forEach((d: DimensionType) => {
          if (d.country === 'France' && !franceIds.includes(d.id)) {
            franceIds.push(d.id);
          } else if (d.country === 'Germany' && !germanyIds.includes(d.id)) {
            germanyIds.push(d.id);
          } else if (d.country === 'Spain' && !spainIds.includes(d.id)) {
            spainIds.push(d.id);
          }
        });
      }
    };
    getIds();
    getCO2Value();
  }, [dimensions]);

  useEffect(() => {
    if (selectedCountry) {
      fetchData('2023-01-01', '2024-01-01');
    }
  }, [selectedCountry]);

  //   console.log('[D] Dim', dimensions);
  //   console.log('[D] France ids', franceIds);
  //   console.log('[D] Spain ids', spainIds);
  //   console.log('[D] germany ids', germanyIds);

  //   console.log('[D] FRANCE CO2', franceCo2);
  //   console.log('[D] SPAIN CO2', spainCo2);
  //   console.log('[D] GERMAN CO2', germanyCo2);
  if (!dimensions) return <></>;
  return (
    <Main>
      <HeaderTop>
        <img width={'100%'} src={IMG_URL} alt='img' />
      </HeaderTop>
      <Container>
        <Row>
          <img src={LOGO_URL} alt='logo' />
          <H1>Tableau de bord ESG</H1>
        </Row>
        <Col>
          <H2 className='self-center'>{'Co2 consumption by country'}</H2>
          <Row>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart
                className={'p-4'}
                data={[
                  { name: 'france', Co2: franceCo2 },
                  { name: 'spain', Co2: spainCo2 },
                  { name: 'germany', Co2: germanyCo2 },
                ]}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='Co2' fill='#017341' />
              </BarChart>
            </ResponsiveContainer>
          </Row>
        </Col>
      </Container>
      <Container>
        <Col>
          <H2 className='self-center'>{'Statistics'}</H2>
          <Row className='px-8 gap-4 items-end'>
            <DateFilters onApply={fetchData} />
            <SelectContainer>
              <SelectStyled id='country-select' onChange={handleCountryChange}>
                <option value=''>Select a country</option>
                {dimensions?.map((dimension: DimensionType) => (
                  <option key={dimension.id} value={dimension.id}>
                    {dimension.country} {dimension.business_unit}
                  </option>
                ))}
              </SelectStyled>
            </SelectContainer>
          </Row>
          <Row>
            <ResponsiveContainer width='30%' height={400}>
              <BarChart className={'p-8'} data={[data[0], data[1]]}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='value' fill='#017341' />
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width='60%' height={400}>
              <BarChart className={'p-8'} data={[data[2], data[3], data[4]]}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='value' fill='#017341' />
              </BarChart>
            </ResponsiveContainer>
            {data[5].value > 0 && (
              <ResponsiveContainer width='10%'>
                <Col>
                  <H3>{`Women : ${Number(
                    (data[5].value * 100).toFixed(1)
                  )}%`}</H3>
                  <H3>{`Men : ${
                    100 - Number((data[5].value * 100).toFixed(1))
                  }%`}</H3>
                </Col>
              </ResponsiveContainer>
            )}
          </Row>
        </Col>
      </Container>
    </Main>
  );
};

export default Dashboard;

const Main = tw.div`
  w-full
  flex-col
  -mr-2
`;

const Container = tw.div`
  w-full
  ml-4
  mt-4
`;

const HeaderTop = tw.div`
  w-full
`;

const SelectContainer = tw.div`
  w-full 
  mt-4
`;

const SelectStyled = tw.select`
  min-h-[50px]
  w-full
  border
  rounded-md
`;
