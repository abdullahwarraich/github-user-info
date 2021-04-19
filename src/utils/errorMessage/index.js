import { message } from 'antd'

const ErrorMessage = errorMessage => {
  message.destroy()
  message.error(errorMessage)
}

export default ErrorMessage
