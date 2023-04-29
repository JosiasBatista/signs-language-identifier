import handGestureFactory from "./factories/handGestureFactory.js";
import alphabetApplicationFactory from "./factories/alphabetApplicationFactory.js";

await alphabetApplicationFactory.initialize();
await handGestureFactory.initialize();