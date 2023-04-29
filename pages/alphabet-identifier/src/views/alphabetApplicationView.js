export default class AlphabetApplicationView {
  #appDOM
  #alphabetList

  constructor() {
    this.#appDOM = document;
    this.#alphabetList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z"]
  }

  renderAlphabet() {
    for (let letter of this.#alphabetList.slice(0,14)) {
      this.#buildAndInsertLetter(letter, 'left')
    }
    
    for (let letter of this.#alphabetList.slice(13,27)) {
      this.#buildAndInsertLetter(letter, 'right')
    }
  }

  #buildAndInsertLetter(letter, side) {
    const letterToRender = document.createElement('div')
      letterToRender.classList.add('letter-container')
      letterToRender.setAttribute('id', `letter_${letter}`)

      const letterImg = document.createElement('img')
      letterImg.src = `./../../assets/alphabet/letter_${letter}.png`

      const letterLabel = document.createElement('span')
      letterLabel.innerHTML = letter.toUpperCase();

      letterToRender.appendChild(letterImg)
      letterToRender.appendChild(letterLabel)

      const alphabetCont = this.#appDOM.getElementById('alphabet-container-side-' + side)
      alphabetCont.appendChild(letterToRender);
  }
}