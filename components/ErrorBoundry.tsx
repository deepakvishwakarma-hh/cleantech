/* eslint-disable @next/next/no-html-link-for-pages */
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Center, StepStatus, Text } from "@chakra-ui/react";
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  info: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, info: "" };
  }

  static getDerivedStateFromError(_: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center h={"100vh"} flexDir={"column"}>
          <Text fontSize={"xl"} mb={5}>
            Oops! There is some error
          </Text>
          <a href="/">Go to Home</a>
        </Center>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
