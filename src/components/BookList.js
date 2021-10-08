/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { useState } from 'react';
import BookDisplay from './BookDisplay.js';
import BookForm from './Bookform.js';

const BookList = () => {
  const initialObject = {
    booksList: [
      {
        aboutBook: {
          category: 'Action',
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
        },
        bookProgress: {
          chapterName: 'Chapter 17',
          chapter: '17',
          completed: 64,
        },
      },
      {
        aboutBook: {
          category: 'Science Fiction',
          title: 'Dune',
          author: 'Frank Herbert',
        },
        bookProgress: {
          chapterName: 'Chapter 3: A Lesson Learned',
          chapter: '3',
          completed: 8,
        },
      },
      {
        aboutBook: {
          category: 'Economy',
          title: 'Capital In The Twenty First Century',
          author: 'Suzanne Collins',
        },
        bookProgress: {
          chapterName: 'Introduction',
          chapter: '17',
          completed: 0,
        },
      },
    ],
  };

  const [booklists, setBookLists] = useState(initialObject);

  const addBook = (newBook) => setBookLists((booklist) => {
    const { booksList } = booklist;
    return { booksList: booksList.concat(newBook) };
  });

  return (
    <>
      <section>
        <ul>
          <li className='book-list'>
            <BookDisplay book={booklists.booksList[0]} />
          </li>
          <li className='book-list'>
            <BookDisplay book={booklists.booksList[1]} />
          </li>
          <li className='book-list'>
            <BookDisplay book={booklists.booksList[2]} />
          </li>
        </ul>
      </section>
      <section>
        <BookForm addBook={addBook} />
      </section>
    </>
  );
};

export default BookList;
