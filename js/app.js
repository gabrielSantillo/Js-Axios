function randomActivity(details) {

    function post_success(response) {
        let main = document.querySelector(`main`);
        main.insertAdjacentHTML(`beforeend`, 
        `
        <h1>${response[`data`][`activity`]}</h1>
        <h3>Type of course: ${response[`data`][`type`]}</h3>
        <p>Price: $ ${response[`data`][`price`]}</p>
        <a href="${response[`data`][`link`]}">Link to course</a>
        `)
    }

  axios
    .request({
      url: `http://www.boredapi.com/api/activity/`,
    })
    .then(post_success)
    .catch(post_failure);
}

let button = document.getElementById(`activity_button`);
button.addEventListener(`click`, randomActivity);
