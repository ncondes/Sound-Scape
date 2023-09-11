import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from './Login'
import { Register } from './Register'
import { closeModal } from '@/store/auth-modal/authModal.slice'
import { selectIsAuthModalOpen } from '@/store/auth-modal/authModal.selectors'
import { Dialog } from '../dialog/Dialog'

const Tabs = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
}

export const AuthModal = () => {
  const dispatch = useDispatch()
  const open = useSelector(selectIsAuthModalOpen)
  const [tab, setTab] = useState(Tabs.LOGIN)

  const handleClose = () => {
    dispatch(closeModal())
  }

  const toggleTab = () => {
    tab === Tabs.LOGIN ? setTab(Tabs.REGISTER) : setTab(Tabs.LOGIN)
  }

  if (!open) return

  return (
    <Dialog open={open} onClose={handleClose} className="w-96">
      <div className="p-8 relative">
        {/* modal close button */}
        <button
          aria-label="Close"
          className={`cursor-pointer absolute right-2 top-2 w-6 h-6 rounded-full hover:bg-neutral-500 hover:bg-opacity-30`}
          onClick={handleClose}
        >
          <i className="fas fa-times" />
        </button>
        {/* title */}
        <h1 className="text-center text-2xl font-bold mb-4">{tab === Tabs.LOGIN ? 'Login' : 'Register'}</h1>
        {/* form */}
        {tab === Tabs.LOGIN ? <Login /> : <Register />}
        {/* login | register */}
        <p className="text-sm text-center mt-4">
          {tab === Tabs.LOGIN ? 'Not in tune with us? ' : 'Already a member of the band? '}
          <button className="text-blue-500 hover:text-blue-600" onClick={toggleTab}>
            {tab === Tabs.LOGIN ? 'Sign in' : 'Log in'}
          </button>
        </p>
      </div>
    </Dialog>
  )
}
