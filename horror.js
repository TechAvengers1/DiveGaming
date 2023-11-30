document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.getElementsByClassName("dropdown");

  for (var i = 0; i < dropdowns.length; i++) {
    var dropdownContent = dropdowns[i].querySelector(".dropdown-content");

    dropdowns[i].addEventListener("mouseover", function () {
      this.classList.add("open");
    });

    dropdowns[i].addEventListener("mouseout", function (event) {
      var relatedTarget = event.relatedTarget || event.toElement;

      if (!this.contains(relatedTarget)) {
        setTimeout(() => {
          this.classList.remove("open");
        }, 5000); // adjust if need for delay (in milliseconds)
      }
    });

    dropdownContent.addEventListener("mouseover", function () {
      clearTimeout(this.timeoutId);
    });

    dropdownContent.addEventListener("mouseout", function () {
      var dropdown = this.closest(".dropdown");
      this.timeoutId = setTimeout(() => {
        dropdown.classList.remove("open");
      }, 5000); // adjust if need for delay (in milliseconds)
    });

    dropdowns[i].addEventListener("click", function () {
      this.classList.toggle("open");
    });
  }
});
