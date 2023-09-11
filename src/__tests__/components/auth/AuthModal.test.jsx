import { act, fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, test } from 'vitest'
import { AuthModal } from '@/components/auth/AuthModal'
import { closeModal } from '@/store/auth-modal/authModal.slice'

describe('AuthModal', () => {
  test('renders the modal when isOpen is true', () => {
    // mock modal state
    const mockedStore = {
      getState: () => ({ modal: { isOpen: true }, auth: { status: 'not-authenticated' } }),
      subscribe: vi.fn(),
    }

    const { container } = render(
      <Provider store={mockedStore}>
        <AuthModal />
      </Provider>,
    )
    // modal title is rendered
    expect(screen.getByText('Your Account')).toBeInTheDocument()
    // modal close button is rendered
    expect(container.querySelector('i')).toHaveClass('fas fa-times')
    // login tab is rendered
    expect(screen.getByText('Login')).toBeInTheDocument()
    // register tab is rendered
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  test('does not render the modal when isOpen is false', () => {
    // mock modal state
    const mockedStore = {
      getState: () => ({ modal: { isOpen: false }, auth: { status: 'not-authenticated' } }),
      subscribe: vi.fn(),
    }

    render(
      <Provider store={mockedStore}>
        <AuthModal />
      </Provider>,
    )
    // modal title is not rendered
    expect(screen.queryByText('Your Account')).not.toBeInTheDocument()
    // login tab is not rendered
    expect(screen.queryByText('Login')).not.toBeInTheDocument()
    // register tab is not rendered
    expect(screen.queryByText('Register')).not.toBeInTheDocument()
  })

  test('Set tab to login when login tab is clicked', () => {
    // mock modal state
    const mockedStore = {
      getState: () => ({ modal: { isOpen: true }, auth: { status: 'not-authenticated' } }),
      subscribe: vi.fn(),
    }

    render(
      <Provider store={mockedStore}>
        <AuthModal />
      </Provider>,
    )
    // login tab is rendered
    expect(screen.getByText('Login')).toBeInTheDocument()
    // click login tab
    // TODO: click event ?
    // login tab is active
    expect(screen.getByText('Login')).toHaveClass('bg-blue-600')
    // register tab is not active
    expect(screen.getByText('Register')).not.toHaveClass('bg-blue-600')
  })

  test('call handleClose when close button is clicked', () => {
    // mock dispatch
    const dispatch = vi.fn()
    // mock modal state
    const mockedStore = {
      getState: () => ({ modal: { isOpen: true }, auth: { status: 'not-authenticated' } }),
      subscribe: vi.fn(),
      dispatch,
      dispatchEvent: vi.fn(),
    }

    const { container } = render(
      <Provider store={mockedStore}>
        <AuthModal />
      </Provider>,
    )
    // click close button
    const button = container.getElementsByClassName('cursor-pointer z-50')[0]
    fireEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith(closeModal())
  })
})
