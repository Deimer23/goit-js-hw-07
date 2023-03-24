import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGallery(){
    let insertGallery = "";
    for (const gallery of galleryItems) {
        insertGallery += `<div class="gallery__item">
                            <a class="gallery__link" href="${gallery.original}">
                                <img class="gallery__image" src="${gallery.preview}" 
                                     alt="${gallery.description}" 
                                     data-source="${gallery.original}"                                     
                                />
                            </a>
                          </div>`;
    }    
    return insertGallery;
}

gallery.addEventListener('click', (event) =>{
    event.preventDefault();
    const src = event.target.dataset.source;    
    console.log(event.target);
    const instance = basicLightbox.create(`<img src="${src}" width="800" height="600">`);
    instance.show();

    window.addEventListener('keydown', closeWindow);

    function closeWindow(event){
        const esc = 'Escape';
        if(event.code === esc){
            instance.close();
            window.removeEventListener('keydown', closeWindow);
        }
    }
});

gallery.insertAdjacentHTML('beforeend', createGallery());


