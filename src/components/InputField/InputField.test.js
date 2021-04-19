import { render } from '@testing-library/react'
import InputField from './index'

describe('Input', () => {
  let testRender
  let allowClear
  let inputOnChange
  let inputValue
  let inputPlaceholder

  beforeEach(() => {
    allowClear = true
    inputOnChange = jest.fn(() => a => a)
    inputValue = 'input value'
    inputPlaceholder = 'input place holder'
  })

  afterEach(() => {
    testRender.unmount()
  })

  test('should render Input', async () => {
    testRender = render(
      <InputField
        allowClear={allowClear}
        inputPlaceholder={inputPlaceholder}
        inputValue={inputValue}
        inputOnChange={inputOnChange}
      />
    )
    expect(testRender).toMatchSnapshot()
  })
})
