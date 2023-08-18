function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Mayk sem lentes escuras")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Mayk com lentes escuras")
  }

  // ou html.classList.toggle("light")
}
