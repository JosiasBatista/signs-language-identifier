export default class AlphabetApplicationController {
  #view

  constructor({ view }) {
    this.#view = view;
  }

  async init() {
    this.#view.renderAlphabet();
  }

  static async initialize(deps) {
    const controller = new AlphabetApplicationController(deps);
    controller.init();
  }
}