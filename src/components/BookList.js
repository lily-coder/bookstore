/* eslint no-unused-vars: 0 no-undef: 0 */
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import BookDisplay from './BookDisplay.js';
import BookForm from './Bookform.js';

const BookList = () => {
  const booksList = useSelector((state) => state.booksReducer.booksList, shallowEqual);

  let content;

  const addBook = (newBook) => setBookLists((booklist) => {
    const { booksList } = booklist;
    return { booksList: booksList.concat(newBook) };
  });

  if (booksList.length === 0) {
    content = <li>ADD A BOOK</li>;
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
