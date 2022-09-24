

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(item => {
  const  titleCategory = item.querySelector('h2');
  const itemList = item.querySelectorAll('li');
console.log(`Category: ${titleCategory.textContent} \nElements: ${itemList.length}`);
});
