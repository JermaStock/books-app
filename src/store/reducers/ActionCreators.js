import axios from "axios"
import { booksSlice } from "./BooksSlice";
import { bookSlice } from "./BookSlice";

const KEY = 'AIzaSyDiUuEYaZ5LGHD57_smvgpLujrJ3P6PQ9A'

export const fetchBooks =
  ({ term, filter, startIndex = 0, maxResults }) =>
  async (dispatch) => {
    try {
      dispatch(booksSlice.actions.booksFetching());
      const response = await axios.get(
        'https://www.googleapis.com/books/v1/volumes',
        {
          params: {
            q: `${term} ${
              filter.query === "all" ? "" : "+subject:" + filter.query
            }`,
            orderBy: filter.sort,
            maxResults,
            startIndex,
            key: KEY,
          },
        }
      );
      if (!startIndex) {
        dispatch(booksSlice.actions.booksTotalCount(response.data));
        dispatch(booksSlice.actions.changeBooksPage(0));
      }
      if (response.data.items) {
        dispatch(booksSlice.actions.booksEndIndex(false));
        dispatch(booksSlice.actions.createBooksPagination(response.data));
      } else {
        dispatch(booksSlice.actions.booksEndIndex(true));
      }
      dispatch(booksSlice.actions.booksFetchingSuccess(response.data));
      
    } catch (error) {
      dispatch(booksSlice.actions.booksFetchingError(error.message));
      throw error
    }
  };

export const setBooksTotalCount = (totalCount) => (dispatch) => {
    dispatch(booksSlice.actions.booksTotalCount(totalCount));
}

export const setCurrentPage = (page) => (dispatch) => {
    dispatch(booksSlice.actions.changeBooksPage(page))
};

export const setBooksPagination = (val) => (dispatch) => {
    dispatch(booksSlice.actions.clearBooksPagination(val));
}

export const fetchBook = (id) =>  async (dispatch) => {
  try {
    dispatch(bookSlice.actions.bookFetching());
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`,
      {
        params: {
          key: KEY,
        },
      }
    );
    dispatch(bookSlice.actions.bookFetchingSuccess(response.data));
  } catch (error) {
    dispatch(bookSlice.actions.bookFetchingError(error.message));
    throw error
  }
}

export const changeBookState = () => (dispatch) => {
  dispatch(bookSlice.actions.resetBookState());
}