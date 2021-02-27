import axios from 'axios';

const baseUrl = 'https://almost-d964d-default-rtdb.firebaseio.com/authors';

// API CALLS FOR AUTHORS

// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

// DELETE AUTHOR
// CREATE AUTHOR
// UPDATE AUTHOR
// SEARCH AUTHORS

export default getAuthors;
