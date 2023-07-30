import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addBook, getBooks, getBooksDetails, deleteBook, updateBook } from '../../helpers/helpers';

const FETCH = 'library/books/FETCH';
const ADD = 'library/books/ADD';
const UPDATE = 'library/books/UPDATE';
const DELETE = 'library/books/DELETE';

export const fetchBooks = createAsyncThunk(FETCH, async () => {
    const books = await getBooks();
    console.log(books);
    return books;
});

export const fetchBookDetails = createAsyncThunk(FETCH, async (id) => {
    const selectedBook = await getBooksDetails(id);
    return selectedBook;
});


export const saveBook = createAsyncThunk(ADD, async (book) => {
    await addBook(book);
    return book;
});

export const update_Book = createAsyncThunk(ADD, async (book) => {
    await updateBook(book);
    return book;
});

export const removeBook = createAsyncThunk(DELETE, async (data) => {
    await deleteBook(data);
    return data;
});

const initialState = {
    books: [],
};


const booksSlice = createSlice({
    name: 'library/books',
    initialState,
    // reducers:FetchCarReducer,
    extraReducers: {
        [fetchBooks.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.books = action.payload;
        },
        [fetchBookDetails.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.selectedCar = action.payload;
        },
        [saveBook.fulfilled]: (state, action) => {
            const currentState = state;
            const book = { ...action.payload };
            currentState.books = [...state.books, book];
        },
        [update_Book.fulfilled]: (state, action) => {
            const currentState = state;
            const book = { ...action.payload };
            currentState.books = [...state.books, book];
        },
        [removeBook.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.books = state.books.filter(
                (book) => book.id !== action.payload,
            );
        },
    },
});

export default booksSlice.reducer;