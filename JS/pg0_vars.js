// variables for the name and image
let name_new = "Caseum Borgaro";
let imageSrc = "./assets/png/caseum_borgaro.png";

// Function to update the content of the span and the image
// follows top down approach, so it starts from the very top, meaning the website title.
function updateContent(name, imageSrc) {
    document.title = `${name} - Portfolio`;
    // The picture
    document.getElementById('logo-img').src = imageSrc;
    document.getElementById('logo-img').alt = `${name} Logo Image`;
    // The name beside the picture
    document.getElementById('logo-sub').textContent = name;
    // The big name at on-load
    document.getElementById('home-name-primary').textContent = `My name is ${name}`;
    // The Get to know me section
    document.getElementById('about-name').innerHTML = `Hi, I'm <strong>${name}</strong>.`;
    // Footer name
    document.getElementById('footer-name').textContent = name;
}

updateContent(name_new, imageSrc);
