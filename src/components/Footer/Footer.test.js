import { render } from '@testing-library/react'
import AppFooter from './index'

describe('AppFooter', () => {
  let appFooterRender

  afterEach(() => {
    appFooterRender.unmount()
  })

  test('should render app footer', async () => {
    appFooterRender = render(<AppFooter />)
    expect(appFooterRender).toMatchSnapshot()
  })
})
