const refs = {
  gallery: document.querySelector('.js-gallery'),
  largeImg: document.querySelector('.js-large-image'),
};

refs.gallery.addEventListener('click', onGalleryclick);

function onGalleryclick(event) {
    event.preventDefault();
    console.log(event.target);

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const imgRef = event.target;
    const largeImage = imgRef.dataset.source;

    setLargeImg(largeImage);
}

function setLargeImg (url) {
    refs.largeImg.src = url;
}