
export default function login ({ correo, contraseña }) {
  return fetch('http://localhost:3001/usuario/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({correo, contraseña}) //fijarse si tiene que ser el mismo nombre que los models
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { jwt } = res
    return jwt
  })
}