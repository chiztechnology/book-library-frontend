import { configureStore } from '@reduxjs/toolkit';
import books from './books';
import authentication from './authentication';

const rootReducer = { books, authentication };

const store = configureStore({
    reducer: rootReducer,
});

export default store;