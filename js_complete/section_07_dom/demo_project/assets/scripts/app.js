const backdrop = document.getElementById('backdrop');
const addModal = document.getElementById('add-modal');
const delModal = document.getElementById('delete-modal');
const showModalBtn = document.querySelector('header button');
const cancelModalBtn = document.querySelector('.btn--passive');
const successModalBtn = document.querySelector('.btn--success');
const cancelDeletionBtn = delModal.querySelector('.btn--passive');
const confirmDeletionBtn = delModal.querySelector('.btn--danger');
const entryTextSection = document.getElementById('entry-text');
const moviesUL = document.getElementById('movie-list');
const modalInputs = addModal.querySelectorAll('input');

let moviePojos = [];

const updateUI = () =>
  (entryTextSection.style.display = moviePojos.length ? 'none' : 'block');

const renderNewMovieElement = (movie) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.classList.add('movie-element');
  // getting react vibes from this
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${movie.imageUrl}" alt="${movie.title}">
    </div>
    <div class="movie-element__info">
      <h2>${movie.title}</h2>
      <p>${movie.rating}/5 stars</p>
    </div>
  `;

  // Remove current li when clicked
  newMovieElement.onclick = () => {
    toggleBackdrop();
    delModal.classList.add('visible');
    confirmDeletionBtn.onclick = () => {
      moviesUL.removeChild(newMovieElement);
      moviePojos = moviePojos.filter((item) => item.id != movie.id);
      updateUI(); // re-add the entry text if ul is empty
      closeMovieDeletionModal();
    };
  };

  // add new li to ul
  moviesUL.append(newMovieElement);
};

// takes the inoput fields and clears all values
const clearMovieInputs = () => modalInputs.forEach((input) => (input.value = ''));

const toggleBackdrop = () => backdrop.classList.toggle('visible');

const showMovieModal = () => {
  toggleBackdrop();
  addModal.classList.add('visible');
};

const hideMovieModal = () => {
  addModal.classList.remove('visible');
  closeMovieDeletionModal();
};

// show/hide modal via button and backdrop clicks
showModalBtn.onclick = () => showMovieModal();
backdrop.onclick = () => hideMovieModal();

// click handlers for add modal buttons
successModalBtn.onclick = () => {
  const titleValue = modalInputs[0].value;
  const imageUrlValue = modalInputs[1].value;
  const ratingValue = parseInt(modalInputs[2].value);

  if (!titleValue.trim()) {
    alert('Please enter a title');
    return;
  }

  if (!imageUrlValue.trim()) {
    alert('Please enter a valid url');
    return;
  }

  if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
    alert('Please enter a vaid rating (1 through 5)');
    return;
  }

  const newMovie = {
    id: moviePojos.length + 1,
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };
  moviePojos.push(newMovie);
  hideMovieModal();
  clearMovieInputs();
  renderNewMovieElement(newMovie);
  updateUI();
};

cancelModalBtn.onclick = () => {
  hideMovieModal();
  clearMovieInputs();
};

// Delete Movie Modal stuff
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  delModal.classList.remove('visible');
};

cancelDeletionBtn.onclick = () => closeMovieDeletionModal();
