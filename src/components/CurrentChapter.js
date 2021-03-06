/* eslint no-unused-vars: 0 no-undef: 0 */
import PropTypes from 'prop-types';

const currentChapter = (num, title) => {
  if (num && title) {
    return `Chapter ${num}: "${title}"`;
  }
  if (num) {
    return `Chapter ${num}`;
  }
  if (title) {
    return `${title}`;
  }
  return '';
};

const currentProgress = (props) => {
  const { bookProgress } = props;
  const { chapter, chapterName } = bookProgress;

  return (
    <div className='completed-chapter gray'>
      <span className='completed-chapter-details current-chapter-head'>
        CURRENT CHAPTER
      </span>
      <span className='completed-chapter-details black'>
        Chapter One {currentChapter(chapter, chapterName)}
      </span>
      <button type="button" className='update-progress completed-chapter-details'>
        UPDATE PROGRESS
      </button>
    </div>
  );
};

currentProgress.defaultProps = {
  bookProgress: {
    chapter: 1,
    chapterName: 'Not specified',
  },
};

currentProgress.propTypes = {
  bookProgress: PropTypes.shape({
    chapter: PropTypes.number,
    chapterName: PropTypes.string,
  }),
};

export default currentProgress;