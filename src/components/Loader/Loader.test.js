import { render } from '@testing-library/react'
import Loader from './index'

describe('Loader', () => {
  let loaderRender

  afterEach(() => {
    loaderRender.unmount()
  })

  test('should render loader', async () => {
    loaderRender = render(<Loader />)
    expect(loaderRender).toMatchSnapshot()
  })
})
