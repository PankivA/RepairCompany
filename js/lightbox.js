import { galleryItems } from "./gallery-items.js";

// контейнер галереї
const gallery = document.querySelector(".gallery");

// генеруємо HTML
const cardsMarkup = galleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", cardsMarkup);

function galleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" />
        </a>
      `
    )
    .join("");
}

// ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
});