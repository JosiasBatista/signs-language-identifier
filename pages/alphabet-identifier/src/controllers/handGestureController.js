import { prepareRunChecker } from "../utils/util.js";

const { shouldRun: highlightShouldRun } = prepareRunChecker({ timerDelay: 200 });

export default class HandGestureController {
  #camera
  #view
  #service

  constructor({ camera, view, service }) {
    this.#camera = camera;
    this.#view = view;
    this.#service = service;
  }

  async init() {
    return this.#loop();
  }

  async #estimateHands() {
    try {
      const hands = await this.#service.estimateHands(this.#camera.video);

      for await (const { event } of this.#service.detectGestures(hands)) {
        if (!highlightShouldRun()) continue;

        this.#view.highlightLetter(event)
      }
    } catch (error) {
      console.log('deu negado!', error);
    }
  }

  async #loop() {
    await this.#service.initializeDetector();
    await this.#estimateHands();

    this.#view.loop(this.#loop.bind(this));
  }

  static async initialize(deps) {
    const controller = new HandGestureController(deps);
    controller.init();
  }
}