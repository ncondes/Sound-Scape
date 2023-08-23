import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { Login } from '@/components/auth/Login'
import { store } from '@/store'
import { Provider } from 'react-redux'

vi.mock('@/components/auth/InputField', () => ({
  InputField: () => <input />,
}))

describe('Login', () => {
  test('renders correctly the inputs and the button', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    )
    // check that two inputs are rendered
    expect(screen.getAllByRole('textbox').length).toBe(2)
    // check that the button is rendered
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
