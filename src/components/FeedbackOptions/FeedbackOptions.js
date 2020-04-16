import React, { Fragment } from "react";

const FeedbackOptions = ({ good, neutral, bad }) => (
  <Fragment>
    <button type="button" onClick={good}>
      good
    </button>
    <button type="button" onClick={neutral}>
      neutral
    </button>
    <button type="button" onClick={bad}>
      bad
    </button>
  </Fragment>
);

export default FeedbackOptions;
