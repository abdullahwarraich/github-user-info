import { render, screen, fireEvent } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  test('Button must have onclick function and button text', async () => {
    const onClick = jest.fn()
    render(<Button buttonClick={onClick()}>{'Button Clicked'}</Button>)
    const button = screen.getByRole('button')
    await fireEvent.click(button)
    expect(button).toHaveTextContent('Button Clicked')
  })
})
