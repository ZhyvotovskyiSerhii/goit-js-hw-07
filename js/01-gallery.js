import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImg = createGalleryImages(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryImg);


function createGalleryImages(galleryItems) {
return galleryItems
    .map(({preview, original, description}) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </div>
    `}).join('');   
}

gallery.addEventListener(`click`, galleryClick);


function galleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
  return;
  }

  const modal = {
    onShow: () => {
      document.addEventListener('keydown', keyEscPress);
    },
    onClose: () => {
      document.removeEventListener('keydown', keyEscPress);
    },
}

const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, modal);


instance.show()

function keyEscPress(event) {
  if (event.key === 'Escape') {
    instance.close();
  } 
}
}
console.log(galleryItems);
