/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import BookDisplay from './BookDisplay.js';
import BookForm from './Bookform.js';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const booksList = useSelector((state) => state.booksReducer.booksList, shallowEqual);

  let content;

  if (booksList.length === 0) {
    content = <li className='add-a-book'>ADD A BOOK</li>;
  } else {
    content = booksList.map((book) => (
      <li key={book.aboutBook.id} className='book-list'>
        <BookDisplay book={book} />
      </li>
    ));
  }

  return (
    <>
      <section>
        <ul>
        { content }
        </ul>
      </section>
      <section>
        <BookForm />
      </section>
    </>
  );
};

export default BookList;
