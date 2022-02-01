import axios from 'axios'

const axiosDefault = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
})

export const addWorkOffer = async (data, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    const res = axiosDefault.post('http://localhost:5000/propuesta/', data, {
      headers,
    })
    return res
  } catch (err) {
    console.log(err)
    throw err
  }
}
