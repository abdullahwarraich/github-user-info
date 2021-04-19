import { render, fireEvent } from '@testing-library/react'
import InputField from './index'

const inputMock = jest.fn()

test('input field component', async () => {
  const container = render(<InputField inputPlaceholder='placeholder' />)
  const input = container.getByPlaceholderText('placeholder')
  await fireEvent.change(input, { target: { value: 'value' } })
  await expect(input.value).toBe('value')
  expect(input).toBeInTheDocument()
  await expect(inputMock.mock.calls).toHaveLength(0)
})
