const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("#ingredients");

const ingredientRef = ingredients.map((ingredient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  return liElem;
});

console.log(ingredientRef);

ulRef.append(...ingredientRef);


