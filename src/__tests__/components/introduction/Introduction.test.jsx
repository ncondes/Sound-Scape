import { screen, render } from '@testing-library/react'
import { Introduction } from '@/components/introduction/Introduction'
import { expect } from 'vitest'

describe('Introduction', () => {
  test('Renders correctly', () => {
    render(<Introduction />)
    // title is rendered
    expect(screen.getByText('Listen to Great Music!')).toBeInTheDocument()
    // description is rendered
    expect(
      screen.getByText(
        'Sound Scape is a global music sharing platform that connects artists and music lovers, offering an immersive and intuitive audio experience with a vast library of original compositions across all genres connecting with like-minded individuals, and promoting your own creative works.',
      ),
    ).toBeInTheDocument()
    // image is rendered
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
