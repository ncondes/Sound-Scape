import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Alert } from '@/components/alert/Alert'

describe('Alert', () => {
  test('renders correctly the alert', () => {
    render(<Alert message="Invalid Login Credentials" variant="error" />)

    expect(screen.getByText('Invalid Login Credentials')).toBeInTheDocument()
  })

  test('should close the alert when the close button is clicked', () => {
    render(<Alert message="Invalid Login Credentials" variant="error" />)
    // get the close button
    const closeButton = screen.getByRole('button')
    // check that the alert is in the document
    expect(screen.getByText('Invalid Login Credentials')).toBeInTheDocument()
    // simulate a click event
    fireEvent.click(closeButton)
    // check that the alert is not in the document
    expect(screen.queryByText('Invalid Login Credentials')).not.toBeInTheDocument()
  })

  test('should render the alert with the success variant', () => {
    const { container } = render(<Alert message="Login successful!" variant="success" />)
    // check that the alert has the success class
    expect(container.querySelector('div')).toHaveClass('bg-green-500')
  })
})
