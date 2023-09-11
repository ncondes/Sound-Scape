import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { InputField } from './InputField'
import { startLogin } from '@/store/auth/auth.thunk'
import { selectAuthStatus } from '@/store/auth/auth.selectors'
import { Status } from '@/store/auth/auth.slice'

const schema = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
    maxLength: {
      value: 30,
      message: 'Password cannot be more than 30 characters',
    },
  },
}

export const Login = () => {
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const status = useSelector(selectAuthStatus)
  const checking = useMemo(() => status === Status.CHECKING, [status])

  const onSubmit = (data) => {
    dispatch(startLogin(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col my-1">
        {/* email */}
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          rules={schema.email}
          control={control}
        />
        {/* password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          rules={schema.password}
          control={control}
        />
      </div>
      <div className="mt-2 text-center">
        <button
          className={`w-full cursor-pointer bg-gradient-to-r from-violet-500 to-indigo-400 text-white py-1.5 px-3 rounded transition hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-500 ${
            checking ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
          disabled={checking}
        >
          {checking ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Submit'}
        </button>
      </div>
    </form>
  )
}
