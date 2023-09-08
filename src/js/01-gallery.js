import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__pic" href="${original}">
            <img
            class="gallery__image"
            data-source="${original}"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`
  )
  .join("");
  
    galleryContainer.style.marginTop =  '100px'


galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const originalUrl = e.target.dataset.source;
  basicLightbox.create(`<img src="${originalUrl}">`).show();
});


