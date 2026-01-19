function loadSection(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;

      // Eğer callback varsa çalıştır
      if (callback) callback();
    });
}

/* =================
   SEARCH INIT
================= */

function initSearch() {

  const toggle = document.getElementById("searchToggle");
  const panel = document.getElementById("searchPanel");
  const closeBtn = document.getElementById("closeSearch");

  if (!toggle || !panel || !closeBtn) return;

  toggle.addEventListener("click", () => {
    panel.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.remove("active");
  });
}


/* =================
   LOAD PARTIALS
================= */

loadSection("header", "partials/header.html", initSearch);
loadSection("hero", "partials/hero.html");
loadSection("about", "partials/about.html");
loadSection("publications", "partials/publications.html");
loadSection("cta", "partials/cta.html");
loadSection("latest-articles", "partials/latest-articles.html");
loadSection("footer", "partials/footer.html");
