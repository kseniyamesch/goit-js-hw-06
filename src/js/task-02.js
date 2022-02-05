const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector('#ingredients');
const createElements = element => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;
  return itemRef;
};
const elementListRef = ingredients.map(ingredient =>
  createElements(ingredient),
);

listRef.append(...elementListRef);
