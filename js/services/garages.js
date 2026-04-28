const garageSection = document.getElementById("garageSection");

const garages = [
  {
    name: "Almiskad Garage",
    services: ["Engine Repair", "Oil Change", "Brake Service"],
    image: "/src/mordernGarage.jpg",
  },
];

garages.forEach((garage) => {
  const card = document.createElement("div");
  card.className = "garage-card bg-white shadow-md rounded-lg overflow-hidden";

  card.innerHTML = `
    <img src="${garage.image}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h2 class="text-center font-bold text-lg mb-2">${garage.name}</h2>
      <ul class="text-sm mb-4">
        ${garage.services.map((s) => `<li>• ${s}</li>`).join("")}
      </ul>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-xl w-full">View More</button>
    </div>
  `;

  garageSection.appendChild(card);
});
