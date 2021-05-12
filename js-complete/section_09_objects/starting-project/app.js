const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movieList = document.getElementById('movie-list');

const movies = [];

const renderMovies = (filter = '') => {
  movies.length
    ? movieList.classList.add('visible')
    : movieList.classList.remove('visible');

  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieElem = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);

    // contrived use of 'bind', 'call' and 'apply'
    // to demonstrate weird behavior of 'this' keyword
    let { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    // call(), pass args as comma list
    // apply(), pass args as array
    // let text = getFormattedTitle.call(movie);
    let text = getFormattedTitle.apply(movie);

    const extraKey = Object.keys(info).filter(
      (item) => item !== 'title' && item !== '_title'
    )[0];
    text += ` - ${extraKey}: ${info[extraKey]}`;
    // movieElem.textContent = `${movie.getFormattedTitle()} - ${extraKey}: ${
    //   info[extraKey]
    // }`;
    movieElem.textContent = text;
    movieList.append(movieElem);
  });
};

addMovieBtn.onclick = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        let value = val.trim();
        if (!val) {
          value = 'DEFAULT';
        }
        this._title = value;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: (Math.random() + movies.length).toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

searchBtn.onclick = () => {
  // when a normal function is bound to an event listener
  // 'this' will point to the element (i.e. the button)
  // when using an arrow function, this will point to the next valid
  // scope 'this' can be used in, (i.e. global scope in this case)
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

// example of 'this' shenanighens
const members = {
  teamName: 'Blue Rockets',
  people: ['Max', 'Manuel'],
  // a method will have 'this' bound to the class it's declared in
  // but, that maynot be the case for functions inside this method
  getTeamMemebers() {
    // an arrow function inside of a method will point to the correct object.
    // Because 'this' is valid inside the body of this method, and is already
    // bound to the object
    // this.people.forEach((p) => {
    //   console.log(this);
    //   console.log(p + ' - ' + this.teamName);
    // });

    // a function inside a method doesn't work the same.
    // the function passed to forEach has not been bound to anything.
    // therefore, 'this' will point to the globalScope
    this.people.forEach(
      function (p) {
        console.log(this);
        console.log(p + ' - ' + this.teamName);
      }
      // .bind(members) // adding bind here will correct the problem
    );
  },
  // 'this' will point to the global object, because that is the next place
  // where 'this' can logically be used. Arrow functions will look to it's
  // next logical scope (literal objects are key-value pairs, those not logical scopes)
  somethingElse: () => {
    console.log(this);
  },
};
members.getTeamMemebers();
