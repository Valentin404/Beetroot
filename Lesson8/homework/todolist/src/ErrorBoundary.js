import React from 'react'

// class ErrorBoundary extends React.Component {
//     state = {hasError: false}
//     static getDerivedStateFromError(error) {
//         console.log(error)
//         return {hasError: true}
//     }
//     componentDidCatch(error,info) {
//         console.log("Error service...", error,info)
//     }
//     render() {
//         return this.state.hasError
//         ?<h1>Something went wrong</h1>
//         : this.props.children
//     }
// }

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
        }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return this.props.children;
    }  
  }

export default ErrorBoundary