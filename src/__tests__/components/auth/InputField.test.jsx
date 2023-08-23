import { render, screen } from '@testing-library/react'
import { describe, test, vi } from 'vitest'
import { InputField } from '@/components/auth/InputField'

vi.mock('react-hook-form', () => ({
  Controller: () => <input />,
}))

describe('InputField', () => {
  test('renders correctly the label and the controller', () => {
    render(<InputField label="Email" />)
    // check if the label is rendered
    screen.getByText('Email')
    // check if the controller is rendered
    screen.getByRole('textbox')
  })
})
