import React from 'react'
import { useHistory } from 'react-router-dom'
import { Result } from 'antd'
import Button from '../../components/Button'

const NotFound = () => {
  const history = useHistory()
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button onClick={() => history.goBack()} type='primary'>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
