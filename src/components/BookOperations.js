import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookOperations = (props) => {
  const dispatch = useDispatch();

  const { bookId } = props;

  const removeBookFromList = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className='book-operations'>
      <p className='book-operation'>Comments</p><hr />
      <p className='book-operation' onClick={removeBookFromList}>Remove</p><hr />
      <p className='book-operation'>Edit</p>
    </div>
  );
};

BookOperations.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookOperations;
