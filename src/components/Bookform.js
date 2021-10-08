/* eslint no-unused-vars: 0 no-undef: 0 */
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const addBookToList = (event) => {
    event.preventDefault();

    const category = event.target[0].value;
    const title = event.target[1].value;
    const author = event.target[2].value;

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

    dispatch(addBook(newBook));
  };

  return (
        <>
        <hr className='add-book'/>
        <h2 className='gray add-book'>ADD A NEW BOOK</h2>
        <form action="POST" onSubmit={addBookToList}>
          <input className='book-input' type='text' placeholder='Book Title'/>
          <input className='book-author-input' type="text" placeholder="Author" required />
          <select className='book-select' name='book-category'>
            <option value='' disabled hidden>Category</option>
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
