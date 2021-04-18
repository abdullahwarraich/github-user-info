import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API_URL

const headers = () => ({
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const GET = async url => axios.get(url, headers())
