import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  clicked(e) {
    if (e.currentTarget === e.target)
      Array.of(...this.containerTarget.querySelectorAll('.block')).at(-1).focus()
  }
}
