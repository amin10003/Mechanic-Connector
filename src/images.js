

async function fetchImages() {
  const images_API = `https://api.pexels.com/v1/search?query=mechanic`;

  try {
    const response = await fetch(images_API, {
      headers: {
        Authorization:
          "Bz5srxXoKegu7GQkq7yURNbgQwzJEMGu1T9al2ePG1bsv78TcyJhpIvC",
      },
    });
    const data = await response.json();
    const images = document.querySelectorAll('img')


    data.photos.forEach((photo, index) => {
      if(images[index]){
        images[index].src = photo.src.medium
      }
    });
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

fetchImages();
