

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(item => {
  const  titleCategory = item.firstElementChild;
  const itemList = item.lastElementChild;
console.log(`Category: ${titleCategory.textContent} \nElements: ${itemList.length}`);
});
