import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  render () {
    const { children } = this.props

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return children
  }
}

export default ErrorBoundary
