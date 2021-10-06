const BookForm = () => {
  <>
    <h2>ADD A NEW BOOK</h2>
    <form>
      <input type='text' placeholder='Book Title'/>
      <select>
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>
      <input type='submit' value='ADD BOOK'></input>
    </form>
  </>;
};

export default BookForm;
