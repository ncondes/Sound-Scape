import { useForm } from 'react-hook-form'
import { InputField } from './InputField'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../stores/userThunks'
import { Alert } from '../alert'
import { useEffect, useMemo, useState } from 'react'
import { useAlertMessage } from '../alert/useAlertMessage'

export const Login = () => {
   const { control, handleSubmit } = useForm()
   const dispatch= useDispatch();
   const {message, status} = useSelector(state => state.user)
   const isAuthenticating = useMemo(() => status === 'checking', [status])

   const { handleAlertMessage, alertMessage, backgroundColor } = useAlertMessage()
   
   const onSubmit = (data) => {
      dispatch(startLogin(data))
   }

   const schema = {
      email: {
         required: 'Email is required',
         pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
         }
      },
      password: {
         required: 'Password is required',
         minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
         },
         maxLength: {
            value: 30,
            message: 'Password cannot be more than 30 characters'
         }
      }
   }

   useEffect(() => {
         handleAlertMessage(message, 'login')
   }, [message])
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col my-1">
            {alertMessage ? (
               <Alert alertMessage={alertMessage} backgroundColor={backgroundColor} />
            ) : null}
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
               className={`block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 cursor-pointer ${
                  isAuthenticating ? 'opacity-50 cursor-not-allowed' : ''
               }`}
               type="submit"
               disabled={isAuthenticating}
            >
               Submit
            </button>
         </div>
      </form>
   )
}
