import axios from 'axios';

const baseUrl = 'https://almost-d964d-default-rtdb.firebaseio.com/books';

// API CALLS FOR BOOKS

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

// DELETE BOOK
// CREATE BOOK
// UPDATE BOOK
// SEARCH BOOKS

export default getBooks;
