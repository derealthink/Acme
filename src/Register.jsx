import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar.jsx'

const schema = Joi.object({
  username: Joi.string().required().label('Username'),
  password: Joi.string().min(6).required().label('Password'),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().label('Confirm Password').messages({
    'any.only': 'Passwords do not match',
  }),
})

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema),
  })
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3002/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: data.username, password: data.password }),
      })
      const result = await response.json()
      if (response.ok) {
        setSuccess('Registration successful! Please log in.')
        setTimeout(() => navigate('/login'), 2000)
      } else {
        setError(result.message || 'Registration failed')
      }
    } catch {
      setError('Network error')
    }
  }

  return (
    <>
      <Navbar />
      <div className="relative isolate min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Blurred background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      {/* Bottom blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <img
            alt="SiteCraft"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=rose&shade=600"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Start building amazing websites with SiteCraft
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                Username
              </label>
              <input
                id="username"
                {...register('username')}
                type="text"
                required
                className="mt-2 block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                placeholder="Choose a username"
              />
              {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                {...register('password')}
                type="password"
                required
                className="mt-2 block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                placeholder="Create a password (min 6 characters)"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                {...register('confirmPassword')}
                type="password"
                required
                className="mt-2 block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {success && (
            <div className="rounded-md bg-green-50 p-4">
              <p className="text-sm text-green-600">{success}</p>
            </div>
          )}

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-colors"
          >
            Create account
          </button>

          <div className="text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-rose-600 hover:text-rose-500 transition-colors"
            >
              Already have an account? Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register