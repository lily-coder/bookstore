/* eslint no-unused-vars: 0 no-undef: 0 */

import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookInfo } = props;
  const { category, title, author } = bookInfo;

  return (
    <div>
      <p>{category}</p>
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
};

Book.defaultProps = {
  bookInfo: null,
};

Book.propTypes = {
  bookInfo: PropTypes.shape,
};

export default Book;
