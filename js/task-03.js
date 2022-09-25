const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

  
// const ulEl = document.querySelector('.gallery');

// images.forEach(el => {
//   ulEl.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`,
//   );
  
// });
 
// const galleryList = document.querySelector(".gallery");
// galleryList.insertAdjacentHTML("afterbegin",  ulEl);
// galleryList.setAttribute("style", "list-style-type:none; gap: 100% / 3;");



const ulRef = document.querySelector(".gallery");

const galeryImg = images.reduce(
  (gallery, image) =>
    gallery +
    `<li class="gallery--item"><img src=${image.url} ${image.alt}  width = "150" height = "100"/></li>`,
  ""
);
console.log(galeryImg);

ulRef.insertAdjacentHTML("afterbegin", galeryImg);
ulRef.setAttribute("style", "list-style-type:none; ");