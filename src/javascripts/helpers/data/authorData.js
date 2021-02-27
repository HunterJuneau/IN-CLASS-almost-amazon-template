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

// DELETE AUTHOR
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

export { getAuthors, createAuthor };
