import { render } from '@testing-library/react'
import PageLayout from './index'

describe('PageLayout', () => {
  let pageLayoutRender

  afterEach(() => {
    pageLayoutRender.unmount()
  })

  test('should render page layout component', () => {
    pageLayoutRender = render(
      <PageLayout>
        <h1>{'Header'}</h1>
        <p>{'Paragraph'}</p>
        <div>{'Div'}</div>
      </PageLayout>
    )
    expect(pageLayoutRender).toMatchSnapshot()
  })
})
