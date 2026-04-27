import { getServiceCatalog } from "../services/catalogService.js";

export async function initSeekerServicesPage() {
  const cards = document.querySelectorAll(".imagesCard");
  if (cards.length === 0) {
    return;
  }

  const imageApi = "https://api.pexels.com/v1/search?query=mechanic";
  const catalog = getServiceCatalog();

  try {
    const response = await fetch(imageApi, {
      headers: {
        Authorization:
          "Bz5srxXoKegu7GQkq7yURNbgQwzJEMGu1T9al2ePG1bsv78TcyJhpIvC",
      },
    });
    const data = await response.json();

    cards.forEach((card, index) => {
      const service = catalog[index % catalog.length];
      const photo = data.photos[index];

      const image = card.querySelector("img");
      const title = card.querySelector("h3");
      const description = card.querySelector("p");
      const button = card.querySelector("button");

      if (image && photo) {
        image.src = photo.src.medium;
      }
      if (title) {
        title.textContent = service.title;
      }
      if (description) {
        description.textContent = service.description;
      }
      if (button) {
        button.onclick = () => {
          window.location.href = `/html/serviceSeeker/request.html?service=${encodeURIComponent(service.title)}`;
        };
      }
    });
  } catch (error) {
    console.error("Failed loading service cards:", error);
  }
}
