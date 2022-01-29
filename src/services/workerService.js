import axios from 'axios'

const axiosDefault = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
})

export const getAllWorkersInfo = async () => {
  try {
    const res = await axiosDefault.get('http://localhost:5000/trabajador/')
    return res.data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const getAllWorkersInfoFilter = async (data) => {
  try {
    const res = await axiosDefault.post(
      'http://localhost:5000/trabajador/filtro/',
      data
    )
    return res.data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const getWorkerById = async (data) => {
  try {
    const res = await axiosDefault.get(
      `http://localhost:5000/trabajador/${data.id}`
    )
    return res.data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

/* export const getAllWorkersInfo = async (data) => {
  try {
    const headers = { 
      'Authorization' : `Bearer ${data}`
     }
    const res = await axiosDefault.get('http://localhost:5000/trabajador/',{headers})
    return res.data.data
  } catch (err) {
    console.log(err)
    throw err
  }
} */
