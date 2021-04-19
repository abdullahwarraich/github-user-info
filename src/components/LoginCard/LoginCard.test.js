import { render } from '@testing-library/react'
import LoginCard from './index'

describe('LoginCard', () => {
  let loginCardRender
  let title

  beforeEach(() => {
    title = 'Login Card Title'
  })

  afterEach(() => {
    loginCardRender.unmount()
  })

  test('should render LoginCard', async () => {
    loginCardRender = render(
      <LoginCard title={title}>
        <div>{'Login card child component'}</div>
        <div>{'Login card child component1'}</div>
      </LoginCard>
    )
    expect(loginCardRender).toMatchSnapshot()
  })
})
