function setUpTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function changeTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "theme-dark") {
    setUpTheme("theme-light");
  } else {
    setUpTheme("theme-dark");
  }
}

export { changeTheme, setUpTheme };
