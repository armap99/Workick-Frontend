import axios from 'axios'

const axiosDefault = axios.create({
  baseUrl: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
})

export const createNewAccount = async (data) => {
  try {
    const res = await axiosDefault.post('http://localhost:5000/cuenta', data)
    return res
  } catch (err) {
    console.log(err)
  }
}

export const logIn = async (data) => {
  try {
    const res = await axiosDefault.post(
      'http://localhost:5000/cuenta/login',
      data
    )
    return res
  } catch (err) {
    console.log(err)
    throw err
  }
}
