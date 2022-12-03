import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["content", "input", "type", "dropdown", "delete", "newInput"]

  connect() {
    this.contentTarget.focus()
  }

  changed = this.debounce(() => {
    if (this.dropdownTarget.getAttribute("data-show") === 'false') {
      this.inputTarget.value = this.contentTarget.innerText
      this.inputTarget.form.requestSubmit()
    }
  }, 1000)

  press(e) {
    if (e.key === '/') {
      this.dropdownTarget.setAttribute('data-show', "true")
    }

    if (e.key === 'Backspace' && this.contentTarget.innerText === '') {
      this.deleteTarget.click()
    }

    if (e.key === "Enter" && this.dropdownTarget.getAttribute("data-show") === 'true') {
      const children = this.dropdownTarget.children
      for (let index = 0; index < children.length; index++) {
        if (children[index].getAttribute('data-selected') === "true") {
          this.typeTarget.value = children[index].querySelector('span').innerText
          this.typeTarget.form.requestSubmit()
        }
      }
    } else if (e.key === "Enter") {
      e.preventDefault()
      this.newInputTarget.form.requestSubmit()
    }
  }

  input(e) {
    if (e.key === 'Backspace'
      && this.dropdownTarget.getAttribute("data-show") === 'true'
      && !this.contentTarget.innerText.includes('/')
    ) {
      this.dropdownTarget.setAttribute('data-show', "false")
    }

    if (this.dropdownTarget.getAttribute("data-show") === 'true') {
      const children = this.dropdownTarget.children
      const buttons = this.dropdownTarget.querySelectorAll('button')
      const filter = this.getFilter(this.contentTarget.innerText)

      if (filter) {
        for (let i = 0; i < children.length; i++) {
          const span = children[i].querySelector("span");
          if (!span) continue
          const txtValue = span.textContent || span.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            children[i].style.display = "";
          } else {
            children[i].style.display = "none";
          }
        }

        let found = false

        for (let index = 0; index < buttons.length; index++) {
          buttons[index].setAttribute('data-selected', "false")
          if (!found && !buttons[index].style.display) {
            found = true
            buttons[index].setAttribute('data-selected', "true")
          }
        }

        if (!found) {
          this.dropdownTarget.lastElementChild.setAttribute('data-show', "true")
        } else {
          this.dropdownTarget.lastElementChild.setAttribute('data-show', "false")
        }
      }
    }
  }

  getFilter(text) {
    const index = text.lastIndexOf('/') + 1
    if (index) {
      return text.slice(index).toUpperCase()
    } else {
      this.dropdownTarget.getAttribute("data-show") === 'false'
    }
    return null
  }

  updateType(e) {
    this.typeTarget.value = e.target.innerText
    this.typeTarget.form.requestSubmit()
  }

  debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
}
