$(document).ready(function() {
  const darkTheme = {
    mainBackground: "bg-dark",
    altBackground: "bg-secondary",
    altText: "text-light",
    mainText: "text-white",
    linkText: "text-warning",
    skillBackground: "bg-success"
  };

  const lightTheme = {
    mainBackground: "bg-white",
    altBackground: "bg-light",
    altText: "text-secondary",
    mainText: "text-dark",
    linkText: "text-success",
    skillBackground: "bg-danger"
  };

  let isDark = true;

  $("#toggleTheme").click(function() {
    if (isDark) {
      for (let key in darkTheme) {
        $(`.${darkTheme[key]}`).addClass(lightTheme[key]);
        $(`.${darkTheme[key]}`).removeClass(darkTheme[key]);
      }
      isDark = !isDark;
    } else {
      for (let key in darkTheme) {
        $(`.${lightTheme[key]}`).addClass(darkTheme[key]);
        $(`.${lightTheme[key]}`).removeClass(lightTheme[key]);
      }
      isDark = !isDark;
    }
  });
});
