import { render, screen } from '@testing-library/react'
import Empty from './index'

test('renders empty components with text', () => {
  render(<Empty text='Some text' />)
  const linkElement = screen.getByText(/Some text/i)
  expect(linkElement).toBeInTheDocument()
})
