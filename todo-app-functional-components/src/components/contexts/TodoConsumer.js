import React from "react";
import { Context } from "./TodoProvider";

export const withConsumer = (Component) => {
  return function WrapperComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
};
