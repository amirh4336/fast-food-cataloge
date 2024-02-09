import axios from 'axios'

const customAxios = axios.create(
  {
    baseURL: "https://react-mini-projects-api.classbon.com",
    
  }
)


export default customAxios