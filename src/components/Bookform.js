/* eslint no-unused-vars: 0 no-undef: 0 */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { addBooktoAPI } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const addBookToList = (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const author = event.target[1].value;
    const category = event.target[2].value;

    event.target.reset();

    const newBook = {
      aboutBook: {
        id: uuidv4(),
        category,
        title,
        author,
      },
      bookProgress: {
        chapter: null,
        chapterName: null,
        completed: 0,
      },
    };

    dispatch(addBooktoAPI(newBook));
  };

  const [addNewBook, setAddNewBook] = useState({ title: '', author: '' });
  const onchangeBook = (e) => {
    setAddNewBook({ ...addNewBook, [e.target.name]: e.target.value });
  };

  return (
        <>
        <hr className='add-book bottom-sec'/>
        <h2 className='gray add-book bottom-sec'>ADD NEW BOOK</h2>
        <form name='input-form' action="POST" onSubmit={addBookToList}>
          <input
            className='book-input'
            type='text'
            value={addNewBook.title}
            placeholder='Book Title'
            name='title'
            onChange={onchangeBook}
            required
          />
          <input
            className='book-author-input d-none'
            type="text"
            value={addNewBook.author}
            placeholder="Author"
            name='author'
            onChange={onchangeBook}
            required />
          <select className='book-select' name='book-category'>
            <option value='category' disabled selected>Category</option>
            <option value='Action'>Action</option>
            <option value='Science Fiction'>Science Fiction</option>
            <option value='Economy'>Economy</option>
          </select>
          <input className='input-submit' type='submit' value='ADD BOOK'></input>
        </form>
      </>
  );
};

export default BookForm;
