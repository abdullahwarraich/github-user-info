import { render, screen, fireEvent } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  let buttonRender
  let props
  let buttonClick

  beforeEach(() => {
    props = {}
    buttonClick = jest.fn()
  })

  afterEach(() => {
    buttonRender.unmount()
  })

  test('should render Button', async () => {
    buttonRender = render(
      <Button buttonClick={buttonClick} props={props}>
        {'Button Clicked'}
      </Button>
    )

    const button = screen.getByRole('button')
    await fireEvent.click(button)
    expect(button).toHaveTextContent('Button Clicked')
    
    expect(buttonRender).toMatchSnapshot()
  })
})
