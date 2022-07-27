/* this function display all the options the user has to chose between a range of courses */
function displayActivity(details) {
  /* inserting the option in the screen */
  document.querySelector(`main`).insertAdjacentHTML(
    `beforeend`,
    `
        <button id="education_button">Education</button>
        <button id="recreational_button">Recreational</button>
        <button id="social_button">Social</button>
        <button id="diy_button">Diy</button>
        <button id="charity_button">Charity</button>
        <button id="cooking_button">Cooking</button>
        <button id="relaxation_button">Relaxation</button>
        <button id="music_button">Music</button>
        <button id="busywork_button">Busywork</button>
        <hr>
        `
  );

  /* getting the first button ny its IS */
  let education_button = document.getElementById(`education_button`);
  /* after the button being clicked, call the function addFreeOrPaidOptions */
  education_button.addEventListener(`click`, addFreeOrPaidOptions);
}

/* this function simply insert in the page two options for the user to chose, free or paid courses */
function addFreeOrPaidOptions(response) {
  /* adding in the pages to buttons, free and paid options */
  main.insertAdjacentHTML(
    `beforeend`,
    `
    <button id="free_button">Free Courses</button>
    <button id="paid_button">Paid Courses</button>
    `
  );

  /* getting the free button from the page */
  let free_button = document.getElementById(`free_button`);
  /* after being clicked, call the function freeEducationActivity */
  free_button.addEventListener(`click`, freeEducationActivity);

  /* getting the free button from the page */
  let paid_button = document.getElementById(`paid_button`);
  /* after being clicked, call the function freeEducationActivity */
  paid_button.addEventListener(`click`, freeEducationActivity);
}

/* this function is called when the success occurs when requesting information form the API */
function post_success(response) {
  if (response[`data`][`price`] === 0) {
    /* inserting onto the page informatio about the course */
    main.insertAdjacentHTML(
      `beforeend`,
      /* inserting the type of course, description and link*/
      `
    <h3>${response[`data`][`type`]}</h3>
    <p>${response[`data`][`activity`]}</p>
    <a href=${response[`data`][`link`]}>Link to the course</a>
    <p>$ ${response[`data`][`price`]}</p>
        `
    );
  } else {
    /* inserting onto the page informatio about the course */
    main.insertAdjacentHTML(
      `beforeend`,
      /* inserting the type of course, description and link*/
      `
      <h3>${response[`data`][`type`]}</h3>
      <p>${response[`data`][`activity`]}</p>
      <a href=${response[`data`][`link`]}>Link to the course</a>
      <p>$ ${response[`data`][`price`]}</p>
          `
    );
  }
}

/* when the request function fail, an error message is printed */
function post_failure(error) {
  main.insertAdjacentHTML(
    `beforeend`,
    `
          <h1>ERROR</h1>
          `
  );
}

/* this function make a request to the api by type and price */
function freeEducationActivity(details) {
  axios
    .request({
      /* getting from the API, only options from the education category */
      url: `http://www.boredapi.com/api/activity?type=education`
    })
    /* if the request is successful, call the function post_success */
    .then(post_success)
    /* if the request fail, call the function post_failure */
    .catch(post_failure);
}

/* global variable that gets the main tag */
let main = document.querySelector(`main`);

/* get this activity button from the page */
let button = document.getElementById(`activity_button`);
/* after being clicked, call the function displayActivity */
button.addEventListener(`click`, displayActivity);
