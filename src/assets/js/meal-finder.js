const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const singleMealEl = document.getElementById('single-meal');

function searchMeal(event) {
  event.preventDefault();

  singleMealEl.innerHTML = '';

  const term = search.value;

  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for ${term}</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `
            <p>
              There are no search results
            </p>
          `;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
                <div class="pointer relative text-center meal">
                  <img class="w-full h-full border-round-md" src="${meal.strMealThumb}"/>
                  <div data-mealID="${meal.idMeal}">
                      <h3 class="h-full w-full absolute flex align-items-center justify-content-center meal-info" >
                        ${meal.strMeal}
                      </h3>
                  </div>
                </div>
              `
            )
            .join('');
        }
      });

    search.value = '';
  } else alert('dupa zbita!');
}

submit.addEventListener('click', searchMeal);
