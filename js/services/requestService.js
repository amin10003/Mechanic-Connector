// Refactor note: original request service logic moved to js/modules/services/requestService.js.
// This compatibility file keeps the original path usable if referenced elsewhere.
import { initRequestService } from "/js/modules/services/requestService.js";

initRequestService();
