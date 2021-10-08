/* eslint no-unused-vars: 0 no-undef: 0 */
import PropTypes from 'prop-types';
import PercentageCircle from './PercentageCircle.js';

const CompletionChart = (props) => {
  const { bookProgress } = props;
  const { completed } = bookProgress;

  return (
    <div class='completion-section'>
      <div className="percentage-circle">
          <PercentageCircle completed={completed} />
      </div>
      <div className="progress-percentage">
        <span className="completion">{`${Math.trunc(completed * 1)}%`}</span>
        <span className="progress-status gray">Completed</span>
      </div>
    </div>
  );
};

CompletionChart.defaultProps = {
  bookProgress: {
    completed: null,
  },
  completed: null,
};

CompletionChart.propTypes = {
  bookProgress: PropTypes.object,
  completed: PropTypes.number,
};

export default CompletionChart;
