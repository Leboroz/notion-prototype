import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container", "newInput"]

  clicked(e) {
    if (this.containerTarget.children.length <= 0)
      this.newInputTarget.form.requestSubmit()

    if (e.currentTarget === e.target)
      this.containerTarget.lastElementChild.querySelector('.block').focus()
  }
}
