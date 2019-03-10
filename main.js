document.querySelector("button").addEventListener("click", newMeal);

function newMeal(e) {
  e.preventDefault();
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("img").src = response.meals[0].strMealThumb;
      foodOrigin(response.meals[0].strArea);
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
}

function foodOrigin(origin) {
  let foodType = origin + "%20cuisine";
  var apiURL =
    "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
    foodType +
    "&format=json";
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("p").innerHTML = response[2][0];
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("can't find this description.");
    });
}
