import axios from 'axios';
  const fetchCity = async (param) => {
    const { city } = param;
    const url = `${process.env.REACT_APP_GEO_URL}/data/2.5/forecast/daily?q=${city}&cnt=1&appid=${process.env.REACT_APP_GEO_API_KEY}`
    const response = axios.get(url).then(res => res).catch(err => console.log('err: ', err))
    const data = await response;
    return data
  }
export {
  fetchCity
}