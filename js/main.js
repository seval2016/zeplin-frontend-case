/* ========= PARTIAL LOADER ========= */

function loadSection(id, file, callback) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      const el = document.getElementById(id);
      if (!el) return;

      el.innerHTML = html;
      if (callback) callback();
    });
}

/* ========= SEARCH ========= */

function initSearch() {
  const toggle = document.getElementById("searchToggle");
  const panel = document.getElementById("searchPanel");
  const closeBtn = document.getElementById("closeSearch");

  if (!toggle || !panel || !closeBtn) return;

  toggle.onclick = () => panel.classList.add("active");
  closeBtn.onclick = () => panel.classList.remove("active");
}

/* ========= SLIDER ========= */

function initPublicationsSlider() {
  $("#pubSlider").trigger("destroy.owl.carousel");

  const slider = $("#pubSlider").owlCarousel({
    loop: true,
    margin: 24,

    nav: false,
    dots: false,
    autoplay: false,

    center: false,
    stagePadding: 0,
    startPosition: 0,

    smartSpeed: 600,

    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
    },
  });

  document.getElementById("prevPub")?.addEventListener("click", () => {
    slider.trigger("prev.owl.carousel");
  });

  document.getElementById("nextPub")?.addEventListener("click", () => {
    slider.trigger("next.owl.carousel");
  });
}

/* ========= PUBLICATION COMPONENT ========= */

async function renderPublicationCards() {
  const template = await fetch(
    "partials/components/publication-card.html",
  ).then((res) => res.text());

  const publications = [1, 2, 3, 4, 5, 6];

  const container = document.getElementById("pubSlider");

  if (!container) return;

  container.innerHTML = "";

  publications.forEach((volume) => {
    const html = template.replace("{{volume}}", volume);

    container.insertAdjacentHTML("beforeend", html);
  });

  initPublicationsSlider();
}

/* ========= ARTICLE COMPONENT ========= */

async function renderArticles() {
  const container = document.getElementById("articleList");

  if (!container) {
    console.warn("articleList bulunamadı");
    return;
  }

  const template = await fetch("partials/components/article-card.html").then(
    (res) => res.text(),
  );

  container.innerHTML = ""; // reset

  const articles = [
    {
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      category: "İklim",
      type: "Araştırma Makalesi",
      pages: "12-18",
      authors: "Elif Başkaya Acar, Emre Taran, Halil Başar",
      downloadUrl: "/files/demo.pdf",
      detailUrl: "/makale/1",
    },
    {
      title: "Yapay Zeka ve Kamu Politikaları",
      category: "Teknoloji",
      type: "Derleme",
      pages: "22-30",
      authors: "Ahmet Yılmaz",
      downloadUrl: "/files/demo.pdf",
      detailUrl: "/makale/2",
    },
    {
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      category: "İklim",
      type: "Araştırma Makalesi",
      pages: "12-18",
      authors: "Elif Başkaya Acar, Emre Taran, Halil Başar",
      downloadUrl: "/files/demo.pdf",
      detailUrl: "/makale/1",
    },
    {
      title: "Yapay Zeka ve Kamu Politikaları",
      category: "Teknoloji",
      type: "Derleme",
      pages: "22-30",
      authors: "Ahmet Yılmaz",
      downloadUrl: "/files/demo.pdf",
      detailUrl: "/makale/2",
    },
  ];

  articles.forEach((item) => {
    const html = template
      .replace("{{title}}", item.title)
      .replace("{{category}}", item.category)
      .replace("{{type}}", item.type)
      .replace("{{pages}}", item.pages)
      .replace("{{authors}}", item.authors)
      .replace("{{downloadUrl}}", item.downloadUrl)
      .replace("{{detailUrl}}", item.detailUrl);

    container.insertAdjacentHTML("beforeend", html);
  });
}

/* ========= LOAD ========= */

loadSection("header", "partials/header.html", initSearch);
loadSection("hero", "partials/hero.html");
loadSection("about", "partials/about.html");

loadSection(
  "publications",
  "partials/publications.html",
  renderPublicationCards,
);

loadSection("cta", "partials/cta.html");

loadSection("latest-articles", "partials/latest-articles.html", renderArticles);

loadSection("footer", "partials/footer.html");
