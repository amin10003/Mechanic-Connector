// async function fetchImages() {
//   const images_API = `https://api.pexels.com/v1/search?query=mechanic`;

//   try {
//     const response = await fetch(images_API, {
//       headers: {
//         Authorization:
//           "Bz5srxXoKegu7GQkq7yURNbgQwzJEMGu1T9al2ePG1bsv78TcyJhpIvC",
//       },
//     });
//     const data = await response.json();
//     const images = document.querySelectorAll('img')

//     data.photos.forEach((photo, index) => {
//       if(images[index]){
//         images[index].src = photo.src.medium
//       }
//     });
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   }
// }

// fetchImages();

async function fetchImages() {
  const images_API = `https://api.pexels.com/v1/search?query=mechanic`;

  const services = [
    {
      title: "Tire Repair",
      description: "Fix punctures and replace damaged tires",
    },
    {
      title: "Engine Check",
      description: "Full engine diagnostics and repair",
    },
    {
      title: "Battery Jumpstart",
      description: "Quick battery boost and replacement",
    },
    {
      title: "Oil Change",
      description: "Engine oil replacement and maintenance",
    },
    {
      title: "Brake Service",
      description: "Brake pad replacement and inspection",
    },
    {
      title: "Car Wash",
      description: "Exterior and interior cleaning",
    },
    {
      title: "Transmission Repair",
      description: "Fix gear and transmission issues",
    },
    {
      title: "AC Repair",
      description: "Fix and refill car air conditioning",
    },
  ];

  try {
    const response = await fetch(images_API, {
      headers: {
        Authorization:
          "Bz5srxXoKegu7GQkq7yURNbgQwzJEMGu1T9al2ePG1bsv78TcyJhpIvC",
      },
    });

    const data = await response.json();

    const cards = document.querySelectorAll(".card");

    data.photos.forEach((photo, index) => {
      if (cards[index]) {
        const img = cards[index].querySelector("img");
        const title = cards[index].querySelector("h3");
        const desc = cards[index].querySelector("p");
        const button = cards[index].querySelector("button");

        // set image
        img.src = photo.src.medium;

        // set service content
        const service = services[index % services.length];

        title.textContent = service.title;
        desc.textContent = service.description;

        // convert button → anchor behavior
        button.onclick = () => {
          window.location.href = `/html/serviceSeeker/request.html?service=${encodeURIComponent(service.title)}`;
        };
      }
    });
  } catch (e) {
    console.error(e);
  }
}

fetchImages();
