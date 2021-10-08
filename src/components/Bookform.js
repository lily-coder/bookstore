/* eslint no-unused-vars: 0 no-undef: 0 */
const BookForm = () => {
  const r = '';
  return (
    <>
      <hr className='add-book'/>
      <h2 className='gray add-book'>ADD A NEW BOOK</h2>
      <form action='#'>
        <input className='book-input' type='text' placeholder='Book Title'/>
        <select className='book-select'>
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
