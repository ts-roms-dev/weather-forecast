import axios from 'axios';
  const fetchCity = async (param) => {
    const { city } = param;
    const url = `${process.env.REACT_APP_GEO_URL}/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_GEO_API_KEY}`
    const response = await axios.get(url).then(res => res).catch(err => err)
    return response
  }
export {
  fetchCity
}