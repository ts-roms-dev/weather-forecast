import axios from 'axios';
  const getRepository = async (username) => {
    const url = `https://api.github.com/users/${username}/repos`
    const response = await axios.get(url).then(res => res).catch(err => err)
    return response
  }
export {
  getRepository
}