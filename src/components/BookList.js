/* eslint no-unused-vars: 0 no-undef: 0 */
import React from 'react';
import BookForm from './Bookform.js';

const BookList = () => {
  const bookslist = {
    bookslists: [
      {
        aboutBook: {
          category: 'Action',
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
        },
        bookProgress: {
          chapterName: 'Chapter 17',
          chapter: '17',
          completed: '64%',
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
          completed: '8%',
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
          completed: '0%',
        },
      },
    ],
  };
};

export default BookList;
