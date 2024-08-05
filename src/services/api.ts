import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const fetchDimensions = async () => {
  try {
    const response = await axios.get(`${API_URL}/dimensions`);
    return response.data.results;
  } catch (error) {}
};

export const fetchIndicators = async (
  start: string,
  end: string,
  country: string,
  indicators: string[]
) => {
  try {
    const indicatorParams = indicators.join(',');
    const response = await axios.get(`${API_URL}/indicators`, {
      params: { start, end, dimensions: country, indicators: indicatorParams },
    });
    return response.data.results;
  } catch (error) {}
};
