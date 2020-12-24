import PropTypes from 'prop-types';

import Section from '../Section';
import s from './Controls.module.css';

function Controls({ onLeaveFeedback, options }) {
  return (
    <Section className={s.feedbackControl} title="Please leave feedback">
      {options.map(item => (
        <button key={item} type="button" onClick={onLeaveFeedback} name={item}>
          {item}
        </button>
      ))}
    </Section>
  );
}

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Controls;
