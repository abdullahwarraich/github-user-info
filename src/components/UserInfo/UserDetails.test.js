import { render } from '@testing-library/react'
import UserInfo from './index'

describe('UserInfo', () => {
  let userInfoRender
  let userAllDetails

  beforeEach(() => {
    userAllDetails = {
      avatar_url: '/avatarUrl',
      name: 'Github User Name',
      login: 'githubUser',
      bio: 'Full Stack Engineer',
      company: 'Google',
      location: 'Berlin',
      email: 'abdullahwarraich678@gmail.com',
      public_repos: 10,
      public_gists: 15,
      followers: 5,
      following: 100
    }
  })

  afterEach(() => {
    userInfoRender.unmount()
  })

  test('should render user info', () => {
    userInfoRender = render(<UserInfo userAllDetails={userAllDetails} />)
    expect(userInfoRender).toMatchSnapshot()
  })
})
