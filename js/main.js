// Refactor note: central entry point for page-specific initializers.
// This file exists to keep script loading simple and scalable without changing behavior.
import { initSeekerAuth } from "/js/modules/auth/seekerAuth.js";
import { initProviderAuth } from "/js/modules/auth/providerAuth.js";
import { initRequestService } from "/js/modules/services/requestService.js";
import { initRequestPage } from "/js/modules/ui/requestPage.js";
import { fetchImages } from "/js/modules/services/imagesService.js";

initSeekerAuth();
initProviderAuth();
initRequestService();
initRequestPage();

const cards = document.querySelectorAll(".imagesCard");
if (cards.length > 0) {
  fetchImages();
}
