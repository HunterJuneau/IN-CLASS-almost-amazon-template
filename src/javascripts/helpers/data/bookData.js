import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const baseUrl = firebaseConfig.databaseURL;

// API CALLS FOR BOOKS

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/books.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

// DELETE BOOK
// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/books.json`, bookObj)
    .then((response) => {
      axios.patch(`${baseUrl}/books/${response.data.name}.json`, { firebaseKey: response.data.name }).then(() => {
        resolve(getBooks());
      });
    })
    .catch((error) => reject(error));
});

// UPDATE BOOK
// SEARCH BOOKS

export { getBooks, createBook };
