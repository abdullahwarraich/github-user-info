import { render } from '@testing-library/react'
import Empty from './index'

describe('Empty', () => {
  let emptyRender
  let text

  beforeEach(() => {
    text = 'Empty Compoent Text'
  })

  afterEach(() => {
    emptyRender.unmount()
  })

  test('should render empty component with text', async () => {
    emptyRender = render(<Empty title={text} />)
    expect(emptyRender).toMatchSnapshot()
  })
})
