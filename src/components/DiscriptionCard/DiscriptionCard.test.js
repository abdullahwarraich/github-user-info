import { render } from '@testing-library/react'
import DiscriptionCard from './index'

describe('DiscriptionCard', () => {
  let discriptionCardRender
  let title

  beforeEach(() => {
    title = 'Discription Card Title'
  })

  afterEach(() => {
    discriptionCardRender.unmount()
  })

  test('should render DiscriptionCard', async () => {
    discriptionCardRender = render(
      <DiscriptionCard title={title}>
        <div>{'Test div'}</div>
      </DiscriptionCard>
    )
    expect(discriptionCardRender).toMatchSnapshot()
  })
})
