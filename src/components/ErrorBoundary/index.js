import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('componentDidCatch', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
          <h3>Something went wrong. Please refresh the page.</h3>
      )
    }
    else {
      return this.props.children
    }
  }
}
