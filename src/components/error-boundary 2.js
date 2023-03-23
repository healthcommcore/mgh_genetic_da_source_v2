import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const errors = { error, errorInfo }
    console.log(errors);
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occurred</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
