import axios from 'axios'

export default async function login ({ correo, contraseña }) {
  const res = await axios.post('http://localhost:3001/usuario/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ correo, contraseña }) //fijarse si tiene que ser el mismo nombre que los models
  })
  if (!res.ok)
    throw new Error('Response is NOT ok')
  const res_2 = await res.json()
  const { jwt } = res_2
  return jwt
}