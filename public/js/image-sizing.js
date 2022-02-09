const images = document.querySelectorAll('img');
console.log (images.length); // Did I get all 10?

for (let image of images) {
    image.style.width = "120px";
    image.style.filter = "grayscale(70%)";
}