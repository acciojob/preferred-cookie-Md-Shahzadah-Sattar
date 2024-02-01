//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve preferences from cookies and apply them
  applyPreferences();

  // Add event listener for form submission
  document.getElementById("preferencesForm").addEventListener("submit", function (event) {
    event.preventDefault();
    savePreferences();
  });
});

function savePreferences() {
  // Get user preferences
  const fontSize = document.getElementById("fontsize").value + "px";
  const fontColor = document.getElementById("fontcolor").value;

  // Update page styles
  document.documentElement.style.setProperty("--fontsize", fontSize);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Store preferences in cookies
  document.cookie = `fontsize=${fontSize}; expires=Thu, 31 Dec 2099 23:59:59 GMT; path=/`;
  document.cookie = `fontcolor=${fontColor}; expires=Thu, 31 Dec 2099 23:59:59 GMT; path=/`;
}

function applyPreferences() {
  // Retrieve preferences from cookies
  const cookies = document.cookie.split("; ");
  const preferences = {};
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    preferences[key] = value;
  }

  // Apply preferences to the page
  if (preferences.fontsize) {
    document.documentElement.style.setProperty("--fontsize", preferences.fontsize);
  }
  if (preferences.fontcolor) {
    document.documentElement.style.setProperty("--fontcolor", preferences.fontcolor);
  }
}
