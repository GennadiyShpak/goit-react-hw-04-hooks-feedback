import { useState, useEffect } from 'react';

import Controls from './Controls';
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementValue = ({ target }) => {
    const name = target.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  useEffect(() => countTotalValue(neutral, bad, good), [bad, good, neutral]);

  function countTotalValue(a, b, c) {
    setTotal(a + b + c);
  }

  function incrementPrecentValue() {
    if (total === 0) {
      return 0;
    } else {
      return Math.trunc((good / total) * 100);
    }
  }

  return (
    <>
      <Controls
        onLeaveFeedback={incrementValue}
        options={['good', 'neutral', 'bad']}
      />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        precent={incrementPrecentValue()}
      />
    </>
  );
}

export default App;
