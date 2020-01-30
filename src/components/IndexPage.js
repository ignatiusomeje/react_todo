import React, { Fragment } from "react";
import IndexHeader from "./IndexHeader";
import IndexPageHeader from "./IndexPageHeader";
import ExplainTodo from "./ExplainTodo";
import IndexFooter from "./IndexFooter";

const IndexPage = () => {
  return (
    <Fragment>
      <IndexHeader />
      <IndexPageHeader />
      <ExplainTodo />
      <IndexFooter />
    </Fragment>
  );
};

export default IndexPage;
