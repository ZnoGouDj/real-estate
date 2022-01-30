import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '759a24c1c6mshc1ecfe00fa9f9c3p107251jsnee515c7609b8',
    },
  });

  return data;
};
