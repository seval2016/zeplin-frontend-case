function loadSection(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

loadSection("header", "partials/header.html");
loadSection("hero", "partials/hero.html");
loadSection("about", "partials/about.html");
loadSection("publications", "partials/publications.html");
loadSection("cta", "partials/cta.html");
loadSection("latest-issues", "partials/latest-issues.html");
loadSection("footer", "partials/footer.html");
