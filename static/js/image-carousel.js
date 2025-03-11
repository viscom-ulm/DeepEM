function updateImage(carouselId) {
    const carousel = carousels[carouselId];
    const container = document.getElementById(carouselId);
    const imageElement = container.querySelector(".carousel-image");
    const captionElement = container.querySelector(".caption");
    const counterElement = container.querySelector(".counter");

    // Get current image data
    const currentImage = carousel.images[carousel.currentIndex];

    // Set image, caption, and counter
    imageElement.src = currentImage.src;
    captionElement.innerHTML = currentImage.caption;
    counterElement.textContent = `${carousel.currentIndex + 1} / ${carousel.images.length}`;

    // Log the caption to the console
    console.log("Current Caption: " + currentImage.caption);

    // Enable/Disable buttons
    container.querySelector(".prev").disabled = carousel.currentIndex === 0;
    container.querySelector(".next").disabled = carousel.currentIndex === carousel.images.length - 1;
}


function nextImage(carouselId) {
    const carousel = carousels[carouselId];
    if (carousel.currentIndex < carousel.images.length - 1) {
        carousel.currentIndex++;
        updateImage(carouselId);
    }
}

function prevImage(carouselId) {
    const carousel = carousels[carouselId];
    if (carousel.currentIndex > 0) {
        carousel.currentIndex--;
        updateImage(carouselId);
    }
}

// Initialize all carousels on page load
Object.keys(carousels).forEach(updateImage);