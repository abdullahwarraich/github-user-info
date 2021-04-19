import { render, screen } from '@testing-library/react'
import AppFooter from './index'

test('renders app footer', () => {
  render(<AppFooter />)
  const linkElement = screen.getByText(
    /Github User Info ©2021 Created by Abdullah Warraich/i
  )
  expect(linkElement).toBeInTheDocument()
})
