import axios from 'axios';
  const fetchCity = async (param) => {
    const { city } = param;
    const url = `${process.env.REACT_APP_GEO_URL}/forecast.json?key=${process.env.REACT_APP_GEO_API_KEY}&q=${city}&aqi=yes'`
    const response = await axios.get(url).then(res => res).catch(err => console.log('err: ', err))
    return response.data
  }
export {
  fetchCity
}