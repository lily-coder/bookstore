/* eslint no-unused-vars: 0 no-undef: 0 */
import PropTypes from 'prop-types';
import Book from './Book.js';
import BookOperations from './BookOperations.js';
import CompletionChart from './CompletionChart.js';
import CurrentProgress from './CurrentChapter.js';

const BookDisplay = (props) => {
  const { book } = props;
  const { aboutBook, bookProgress } = book;

  return (
    <div className='book-card'>
      <div className='book-title-circle'>
        <div>
          <Book bookInfo={aboutBook} />
          <BookOperations />
        </div>
        <div>
          <CompletionChart bookProgress={bookProgress} />
        </div>
      </div><hr />
      <div className='chapter-progress'>
        <CurrentProgress bookProgress={bookProgress} />
      </div>
    </div>
  );
};

BookDisplay.defaultProps = {
  book: null,
};

BookDisplay.propTypes = {
  book: PropTypes.object,
};

export default BookDisplay;