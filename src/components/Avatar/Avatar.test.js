import { render, screen } from '@testing-library/react'
import AntAvatar from './index'

describe('Avatar', () => {
  test('Avatar must have image = "image.png"', () => {
    render(<AntAvatar image='image.png' />)
    const Avatar = screen.getByRole('img')
    expect(Avatar).toHaveAttribute('src', 'image.png')
  })
})
