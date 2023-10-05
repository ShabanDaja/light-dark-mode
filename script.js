const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamicaly
function switchTheme(event) {
  console.log(event.target.checked);
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);
