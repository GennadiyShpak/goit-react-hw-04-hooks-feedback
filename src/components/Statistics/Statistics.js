import PropTypes from 'prop-types';

import Section from '../Section';
import s from './Statistics.module.css';
import Notification from '../Notification';

function Statistics({ good, bad, neutral, total, precent }) {
  return (
    <Section title="Statistics">
      <Notification message="No feedback given" />
      <ul>
        <li className={s.item}>
          <p>Good:</p>
          <p>{good}</p>
        </li>
        <li className={s.item}>
          <p>Neutral:</p>
          <p>{neutral}</p>
        </li>
        <li className={s.item}>
          <p>Bad:</p>
          <p>{bad}</p>
        </li>
        <li className={s.item}>
          <p>Total:</p>
          <p>{total}</p>
        </li>
        <li className={s.item}>
          <p>Precent:</p>
          <p>{precent}</p>
        </li>
      </ul>
    </Section>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // neutral: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // precent: PropTypes.number.isRequired,
};

export default Statistics;
