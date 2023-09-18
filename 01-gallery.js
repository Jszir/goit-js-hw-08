import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  return `
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
}

galleryContainer.style.marginTop
    galleryContainer.style.listStyle = "none"

const galleryMarkup = galleryItems.map(createGalleryItem).join(" ");
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});