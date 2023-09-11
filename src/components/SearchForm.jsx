import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeBookState, fetchBooks, setBooksPagination, setCurrentPage } from '../store/reducers/ActionCreators';
import Search from './Search';
import Filter from './Filter';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { booksPagination, isLoading, startIndex, maxResults } = useSelector(
        (state) => state.booksReducer
    );

    const [search, setSearch] = useState(""); 
    const [filter, setFilter] = useState({ query: 'all', sort: 'relevance'});

    const searchHandler = (e) => {
        e.preventDefault();
        if (!isLoading && search) {
        navigate("/books");
        dispatch(changeBookState());
        dispatch(setBooksPagination([]));
        dispatch(fetchBooks({ term: search, filter, maxResults}));
        }
    }

    useEffect(() => {
      if (search && booksPagination.length) {
        dispatch(fetchBooks({ term: search, filter, startIndex, maxResults}));
      }
    }, [startIndex])

    useEffect(() => {
      if (search) {
        navigate("/books");
        dispatch(changeBookState());
        const pageReseted = 0;
        dispatch(setBooksPagination([]));
        dispatch(setCurrentPage(pageReseted));
        dispatch(fetchBooks({ term: search, filter, maxResults }));
      }
    }, [filter]);

    return (
      <Grid
        container
        component="form"
        onSubmit={searchHandler}
        sx={{ flexDirection: "column", alignItems: "center" }}
      >
        <Grid item mb={"3rem"} md={4} sx={{ width: "100%" }}>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </Grid>

        <Grid item md={4} sx={{ display: "flex", gap: "1rem", width: "100%" }}>
          <Filter
            title="Filter"
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            options={[
              { value: "all", name: "all" },
              { value: "art", name: "art" },
              { value: "biography", name: "biography" },
              { value: "computers", name: "computers" },
              { value: "history", name: "history" },
              { value: "medical", name: "medical" },
              { value: "poetry", name: "poetry" },
            ]}
          />
          <Filter
            title="Sort"
            value={filter.sort}
            onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
            options={[
              { value: "relevance", name: "relevance" },
              { value: "newest", name: "newest" },
            ]}
          />
        </Grid>
      </Grid>
    );
};

export default SearchForm;