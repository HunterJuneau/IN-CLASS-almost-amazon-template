// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `<div class="card">
      <div class="card-body" style="height: 180px;">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="card-text bold">${item.email}</p>
      </div>
    </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
