import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token)
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser({ id: decoded.id, username: decoded.username })
      } catch (error) {
        console.error('Invalid token', error)
        localStorage.removeItem('token')
        setToken(null)
      }
    }
  }, [token])

  const login = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}