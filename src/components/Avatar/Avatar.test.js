import { render } from '@testing-library/react'
import AntAvatar from './index'

describe('Avatar', () => {
  let avatarRender
  let image

  beforeEach(() => {
    image = 'imagePath'
  })

  afterEach(() => {
    avatarRender.unmount()
  })

  test('should render avatar', async () => {
    avatarRender = render(<AntAvatar image={image} />)
    expect(avatarRender).toMatchSnapshot()
  })
})
