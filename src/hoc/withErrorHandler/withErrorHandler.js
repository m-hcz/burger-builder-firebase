import React, { Component } from "react";
import Model from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary";

function withErrorHandler(WrappedComponent, axios) {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxiliary>
          <Model show={this.state.error} closed={this.errorConfirmedHandler}>
            {this.state.error && this.state.error.message}
          </Model>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
}

export default withErrorHandler;
