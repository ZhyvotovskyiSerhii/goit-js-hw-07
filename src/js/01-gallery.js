import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryImages = {
    itemsList: document.querySelector('.gallery'),
  };



  function createGalleryImages(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
       <li>
        <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
        </a>
       </li>
     </div>`;
      }).join('');
  }
  
  galleryImages.itemsList.innerHTML = createGalleryImages(galleryItems);
  galleryImages.itemsList.addEventListener('click', onImgClick);
  
  function onImgClick(event) {
    event.preventDefault();
    const modal = {
      onShow: () => {
        document.addEventListener('keydown', keyEscPress);
      },
      onClose: () => {
        document.removeEventListener('keydown', keyEscPress);
      },
    };
  
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, modal);
    instance.show();
    function keyEscPress(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    }
  }
console.log(galleryItems);
