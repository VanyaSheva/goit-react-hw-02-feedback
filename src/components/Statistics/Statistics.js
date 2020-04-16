import React, { Fragment } from "react";

const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => (
  <Fragment>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {countTotalFeedback()}</p>
    {countTotalFeedback() !== 0 && (
      <p>
        Positive feedback:
        {countPositiveFeedbackPercentage().toFixed(2)}
      </p>
    )}
  </Fragment>
);

export default Statistics;
