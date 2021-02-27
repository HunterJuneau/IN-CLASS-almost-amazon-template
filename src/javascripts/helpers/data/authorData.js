import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const baseUrl = firebaseConfig.databaseURL;

// API CALLS FOR AUTHORS

// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/authors.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const getFavoriteAuthors = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then((authorsArray) => resolve(authorsArray));
    })
    .catch((error) => reject(error));
});

// CREATE AUTHOR
const createAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/authors.json`, authorObj)
    .then((response) => {
      axios.patch(`${baseUrl}/authors/${response.data.name}.json`, { firebaseKey: response.data.name }).then(() => {
        resolve(getAuthors());
      });
    })
    .catch((error) => reject(error));
});

// UPDATE AUTHOR
// SEARCH AUTHORS

export {
  getAuthors,
  getFavoriteAuthors,
  deleteAuthor,
  createAuthor,
};
