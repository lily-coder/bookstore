const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  booksList: [
  ],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { booksList: [...state.booksList, action.payload] };
    case REMOVE_BOOK:
      return { booksList: state.booksList.filter((book) => book.aboutBook.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;