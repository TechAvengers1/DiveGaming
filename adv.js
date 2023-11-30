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

const express = require('express');
const app = express();
const PORT = 3000;

// Game routes
app.get('/liesofpi', (req, res) => {
  res.json({ game: 'Lies of Pi', url: 'https://store.steampowered.com/app/1627720/Lies_of_P/' });
});

app.get('/newworld', (req, res) => {
  res.json({ game: 'New World', url: 'https://store.steampowered.com/app/1063730/New_World/' });
});

app.get('/seaofthieves', (req, res) => {
  res.json({ game: 'Sea of Thieves', url: 'https://store.steampowered.com/app/1172620/Sea_of_Thieves_2023_Edition/' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});