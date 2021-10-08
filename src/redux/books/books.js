const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  booksList: [
    {
      aboutBook: {
        id: '1',
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        category: 'action',
      },
      bookProgress: {
        chapter: 17,
        chapterName: null,
        completed: 65,
      },
    },
    {
      aboutBook: {
        id: '2',
        title: 'Dune',
        author: 'Frank Herbert',
        category: 'science fiction',
      },
      bookProgress: {
        chapter: 3,
        chapterName: 'A Lesson Learned',
        completed: 8,
      },
    },
    {
      aboutBook: {
        id: '3',
        title: 'Capital in the 21st Century',
        author: 'Suzanne Collins',
        category: 'economy',
      },
      bookProgress: {
        chapter: null,
        chapterName: 'Introduction',
        completed: 0,
      },
    },
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