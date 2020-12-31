import axios from 'axios'
// const url = '/api/auth'
const url = 'https://mern-habit-tracker.herokuapp.com'

let token = null

const setToken = (tokenToSet) => {
  token = `bearer ${tokenToSet}`
}

const getToken = () => {
  return token
}

const register = async (userObject) => {
  const res = await axios.post(`${url}/register`, userObject)
  if (res.data.error) {
    return null
  }
  return res.data
}

const login = async (userObject) => {
  const res = await axios.post(`${url}/login`, userObject)
  if (res.data.error) {
    return null
  }
  return res.data
}

export default { register, login, setToken, getToken }