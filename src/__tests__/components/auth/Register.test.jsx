import { Provider } from 'react-redux'
import { Register } from '@/components/auth/Register'
import { store } from '@/store'
import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'

vi.mock('@/components/auth/InputField', () => ({
  InputField: () => <input />,
}))

describe('Register', () => {
  test('renders correctly the inputs and the button', () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>,
    )
    // check that two inputs are rendered
    expect(screen.getAllByRole('textbox').length).toBe(5)
    // check that the checkbox is rendered
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    // check that the select is rendered
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    // check that the button is rendered
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
