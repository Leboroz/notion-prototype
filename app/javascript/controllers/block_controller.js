import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["content", "input", "dropdown", "delete", "newInput"]

  changed = this.debounce(() => {
    if (
      this.contentTarget
      && this.contentTarget.innerHTML.length <= 0
      && this.dropdownTarget.getAttribute("data-show", "false")
    ) return
    this.inputTarget.value = this.contentTarget.innerHTML
    this.inputTarget.form.requestSubmit()
  }, 1000)

  press(e) {
    if (e.key === '/') {
      this.dropdownTarget.setAttribute('data-show', "true")
    } else if (e.key === 'Backspace' && this.contentTarget.innerHTML === '') {
      this.deleteTarget.click()
    } else if (e.key === "Enter") {
      this.newInputTarget.value = ''
      this.newInputTarget.form.requestSubmit()
    }
  }

  debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
}
