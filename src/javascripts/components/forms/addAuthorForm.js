const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" aria-describedby="firstName" placeholder="Enter First Name" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" aria-describedby="lastName" placeholder="Enter Last Name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="example@almostamazon.com" required>
      </div>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite">
        <label class="form-check-label" for="favorite">Favorite</label>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;
};

export default addAuthorForm;
