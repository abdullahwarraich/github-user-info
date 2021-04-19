import { render, fireEvent } from '@testing-library/react'
import NavMenu from './index'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

describe('Navbar', () => {
  let navMenuRender

  afterEach(() => {
    navMenuRender.unmount()
  })

  test('should render Navbar', async () => {
    navMenuRender = await render(<NavMenu />)

    const profileLink = await navMenuRender.findByText('Profile')
    fireEvent.click(profileLink)
    expect(mockHistoryPush).toHaveBeenCalledWith('/profile')

    const gistLink = await navMenuRender.findByText('Gists')
    fireEvent.click(gistLink)
    expect(mockHistoryPush).toHaveBeenCalledWith('/gists')

    const orgsLink = await navMenuRender.findByText('Orgs')
    fireEvent.click(orgsLink)
    expect(mockHistoryPush).toHaveBeenCalledWith('/orgs')

     expect(navMenuRender).toMatchSnapshot()
  })
})
