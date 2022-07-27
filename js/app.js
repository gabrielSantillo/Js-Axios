/* this function get an aleatory course from an API based on the education category */
function educationActivity(details) {
  /* getting the section from the page */
  let section = document.querySelector(`section`);
  /* this function insert onto the page the type of category was chosen, its activity, price and link the course */
  function post_success(response) {
    section.insertAdjacentHTML(
      `beforeend`,
      `<div>
        <h1>${response[`data`][`type`]}</h1>
        <h2>${response[`data`][`activity`]}</h2>
        <p>$ ${response[`data`][`price`]}</p>
        <a href=${response[`data`][`link`]}>Link to course</a>
        </div>
        `
    );
  }

  /* in case the request fail, an error message will be inserted to the page */
  function post_failure(error) {
    main.insertAdjacentHTML(
      `beforeend`,
      `
          <h1>ERROR</h1>
          `
    );
  }

  /* making request to an API already defined by its category */
  axios
    .request({
      url: `http://www.boredapi.com/api/activity?type=education`,
    })
    /* in case the request was successful, call the function post_success */
    .then(post_success)
    /* in case the request wasn't successful, call the function post_failure */
    .catch(post_failure);
}

/* getting the button from the page */
let education_button = document.getElementById(`education_button`);
/* after the button being clicked, call the function educationActivity */
education_button.addEventListener(`click`, educationActivity);

/* this function get an aleatory course from an API based on the recreational category */
function recreationalActivity(details) {
  /* getting the section from the page */
  let section = document.querySelector(`section`);
  /* this function insert onto the page the type of category was chosen, its activity, price and link the course */
  function post_success(response) {
    section.insertAdjacentHTML(
      `beforeend`,
      `<div>
          <h1>${response[`data`][`type`]}</h1>
          <h2>${response[`data`][`activity`]}</h2>
          <p>$ ${response[`data`][`price`]}</p>
          <a href=${response[`data`][`link`]}>Link to course</a>
          </div>
          `
    );
  }

  /* in case the request fail, an error message will be inserted to the page */
  function post_failure(error) {
    main.insertAdjacentHTML(
      `beforeend`,
      `
            <h1>ERROR</h1>
            `
    );
  }

  /* making request to an API already defined by its category */
  axios
    .request({
      url: `http://www.boredapi.com/api/activity?type=recreational`,
    })
    /* in case the request was successful, call the function post_success */
    .then(post_success)
    /* in case the request wasn't successful, call the function post_failure */
    .catch(post_failure);
}

/* getting the button from the page */
let recreational_button = document.getElementById(`recreational_button`);
/* after the button being clicked, call the function educationActivity */
recreational_button.addEventListener(`click`, recreationalActivity);

/* this function get an aleatory course from an API based on the social category */
function socialActivity(details) {
  /* getting the section from the page */
  let section = document.querySelector(`section`);
  /* this function insert onto the page the type of category was chosen, its activity, price and link the course */
  function post_success(response) {
    section.insertAdjacentHTML(
      `beforeend`,
      `<div>
            <h1>${response[`data`][`type`]}</h1>
            <h2>${response[`data`][`activity`]}</h2>
            <p>$ ${response[`data`][`price`]}</p>
            <a href=${response[`data`][`link`]}>Link to course</a>
            </div>
            `
    );
  }

  /* in case the request fail, an error message will be inserted to the page */
  function post_failure(error) {
    main.insertAdjacentHTML(
      `beforeend`,
      `
              <h1>ERROR</h1>
              `
    );
  }

  /* making request to an API already defined by its category */
  axios
    .request({
      url: `http://www.boredapi.com/api/activity?type=social`,
    })
    /* in case the request was successful, call the function post_success */
    .then(post_success)
    /* in case the request wasn't successful, call the function post_failure */
    .catch(post_failure);
}

/* getting the button from the page */
let social_button = document.getElementById(`social_button`);
/* after the button being clicked, call the function socialActivity */
social_button.addEventListener(`click`, socialActivity);

/* this function get an aleatory course from an API based on the music category */
function musicActivity(details) {
    /* getting the section from the page */
    let section = document.querySelector(`section`);
    /* this function insert onto the page the type of category was chosen, its activity, price and link the course */
    function post_success(response) {
      section.insertAdjacentHTML(
        `beforeend`,
        `<div>
              <h1>${response[`data`][`type`]}</h1>
              <h2>${response[`data`][`activity`]}</h2>
              <p>$ ${response[`data`][`price`]}</p>
              <a href=${response[`data`][`link`]}>Link to course</a>
              </div>
              `
      );
    }
  
    /* in case the request fail, an error message will be inserted to the page */
    function post_failure(error) {
      main.insertAdjacentHTML(
        `beforeend`,
        `
                <h1>ERROR</h1>
                `
      );
    }
  
    /* making request to an API already defined by its category */
    axios
      .request({
        url: `http://www.boredapi.com/api/activity?type=music`,
      })
      /* in case the request was successful, call the function post_success */
      .then(post_success)
      /* in case the request wasn't successful, call the function post_failure */
      .catch(post_failure);
  }
  
  /* getting the button from the page */
  let music_button = document.getElementById(`music_button`);
  /* after the button being clicked, call the function socialActivity */
  music_button.addEventListener(`click`, musicActivity);