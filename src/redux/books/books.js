const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
const BOOKS_FAILURE = 'BOOKS_FAILURE';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DtCeReylHfRRGmnkWwvK/';
const initialState = {
  booksList: [
  ],
};
export const booksSuccess = (payload) => ({
  type: BOOKS_SUCCESS,
  payload,
});

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(`${baseURL}books/`, {
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    const books = await response.json();
    return dispatch(booksSuccess(books));
  }
  return dispatch(BOOKS_FAILURE());
};
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const addBooktoAPI = (payload) => async (dispatch) => {
  const response = await fetch(`${baseURL}books/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: payload.aboutBook.id,
      title: payload.aboutBook.title,
      category: payload.aboutBook.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    return dispatch(addBook(payload));
  }
  return dispatch(BOOKS_FAILURE());
};
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export const removeBookFromAPI = (payload) => async (dispatch) => {
  const response = await fetch(`${baseURL}books/${payload}`, {
    method: 'DELETE',
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    return dispatch(removeBook(payload));
  }
  return dispatch(BOOKS_FAILURE());
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_SUCCESS:
      return {
        booksList: Object.keys(action.payload).map((key) => (
          {
            aboutBook: {
              id: key,
              title: action.payload[key][0].title,
              author: null,
              category: action.payload[key][0].category,
            },
            bookProgress: {
              chapterNumber: null,
              chapterTitle: null,
              completed: 0,
            },
          }
        )),
      };
    case BOOKS_FAILURE:
      return state;
    case ADD_BOOK:
      return { booksList: [...state.booksList, action.payload] };
    case REMOVE_BOOK:
      return { booksList: state.booksList.filter((book) => book.aboutBook.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;