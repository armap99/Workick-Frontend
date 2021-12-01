import axios from 'axios'

const axiosDefault = axios.create({
  baseUrl: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
})

export const createNewAccount = async (data) => {
  const res = await axiosDefault.post('http://localhost:5000/cuenta', data)
  return res
}
