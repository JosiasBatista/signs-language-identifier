import AlphabetApplicationController from "../controllers/alphabetApplicationController.js"
import AlphabetApplicationView from "../views/alphabetApplicationView.js"

const factory = {
  async initialize() {
    return AlphabetApplicationController.initialize({
      view: new AlphabetApplicationView()
    })
  }
}

export default factory;