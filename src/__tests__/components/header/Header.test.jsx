import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { Header } from '@/components/header/Header'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { openModal } from '@/store/auth-modal/authModal.slice'
import { startLogout } from '@/store/auth/auth.thunk'

describe('Header', () => {
  test('Renders the home button', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    )
    // home button is rendered
    expect(screen.getByText('SOUND')).toBeInTheDocument()
  })

  test('renders a login/register button when user is not logged in', () => {
    // mock user auth state
    const mockedStore = {
      getState: () => ({ auth: { isUserLoggedIn: false } }),
      subscribe: vi.fn(),
    }

    render(
      <Provider store={mockedStore}>
        <Header />
      </Provider>,
    )
    // login/register button is rendered
    expect(screen.getByText('Login / Register')).toBeInTheDocument()
  })

  test('renders a manage button when user is logged in', () => {
    // mock user auth state
    const mockedStore = {
      getState: () => ({ auth: { isUserLoggedIn: true } }),
      subscribe: vi.fn(),
    }

    render(
      <Provider store={mockedStore}>
        <Header />
      </Provider>,
    )
    // manage button is rendered
    expect(screen.getByText('Manage')).toBeInTheDocument()
    // logout button is rendered
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })

  test('handleOpen is called when login/register button is clicked', () => {
    // mock dispatch
    const dispatch = vi.fn()
    // mock store
    const mockedStore = {
      getState: () => ({ auth: { isUserLoggedIn: false } }),
      subscribe: vi.fn(),
      dispatchEvent: vi.fn(),
      dispatch,
    }

    render(
      <Provider store={mockedStore}>
        <Header />
      </Provider>,
    )
    // click login/register button
    fireEvent.click(screen.getByText('Login / Register'))
    // handleOpen is called
    expect(dispatch).toHaveBeenCalledWith(openModal())
  })

  test('handleLogOut is called when logout button is clicked', () => {
    // mock dispatch
    const dispatch = vi.fn()
    // mock store
    const mockedStore = {
      getState: () => ({ auth: { isUserLoggedIn: true } }),
      subscribe: vi.fn(),
      dispatchEvent: vi.fn(),
      dispatch,
    }

    render(
      <Provider store={mockedStore}>
        <Header />
      </Provider>,
    )
    // click logout button
    fireEvent.click(screen.getByText('Logout'))
    // handleLogOut is called
    expect(dispatch).toHaveBeenCalled()
  })
})
