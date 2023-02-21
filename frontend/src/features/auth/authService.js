import axios from 'axios'

const BACKEND_API_URL = 'http://localhost:5000'
console.log(BACKEND_API_URL)

const API_URL = BACKEND_API_URL + '/api/users'
console.log(API_URL)

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  register,
  logout,
  login,
}

export default authService
