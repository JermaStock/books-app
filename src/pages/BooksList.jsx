import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/reducers/ActionCreators';
import BooksItems from '../components/BooksItem';
import Loader from '../components/Loader';
import LoadMoreButton from '../components/LoadMoreButton';
import Result from '../components/Result';
import ErrorMessage from '../components/ErrorMessage';

const BooksList = () => {
    const dispatch = useDispatch();
    const {
      startIndex,
      maxResults,
      firstLoad,
      totalCount,
      isLoading,
      isEndIndex,
      error
    } = useSelector((state) => state.booksReducer);

    const loadNextPage = () => {
        const nextPage = startIndex + maxResults;
        dispatch(setCurrentPage(nextPage));
    }

    if (error) {
      return (
        <ErrorMessage message={error}/>
      )
    }

    return (
      <div>
        {!firstLoad && !isLoading && (
          <Result
            value={totalCount ? `Found ${totalCount} results` : "No results"}
          />
        )}

        {!firstLoad && <BooksItems />}

        {totalCount > 30 && !isLoading && !isEndIndex && (
          <LoadMoreButton disabled={isLoading} onClick={loadNextPage} />
        )}

        {isLoading && <Loader />}
      </div>
    );
};

export default BooksList;