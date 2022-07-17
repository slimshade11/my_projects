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
        resultHeading.innerHTML = `
            <h2>
              Search results for ${term}
            </h2>
        `;

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
                <div class="pointer relative text-center w-full h-full meal">
                  <img class="w-full h-full border-round-md" src="${meal.strMealThumb}"/>
                  <div>
                      <h3 data-mealId="${meal.idMeal}" class="h-full w-full absolute flex align-items-center justify-content-center meal-info" >
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
  } else alert('Type name of meal you are looking for');
}

function getMealById(mealId) {
  fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId)
    .then((response) => response.json())
    .then((data) => console.log(data));
  // TODO: display single meal in template
}

submit.addEventListener('click', searchMeal);

mealsEl.addEventListener('click', (e) => {
  const mealInfo = e.composedPath().find((item) => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else return false;
  });

  if (mealInfo) {
    const mealId = mealInfo.getAttribute('data-mealId');
    getMealById(mealId);
  }
});
