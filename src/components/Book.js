/* eslint no-unused-vars: 0 no-undef: 0 */
import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookInfo } = props;
  const { category, title, author } = bookInfo ?? { bookInfo: [] };

  return (
    <div>
      <h5 className='book-category'>{ category }</h5>
      <h2 className='book-title'>{ title }</h2>
      <p className='book-author'>{ author }</p>
    </div>
  );
};

Book.defaultProps = {
  bookInfo: null,
};

Book.propTypes = {
  bookInfo: PropTypes.object,
};

export default Book;
