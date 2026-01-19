function loadSection(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
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
   OWL INIT
================= */

function initPublicationsSlider(){

  const slider = $("#pubSlider").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,

    autoplay:false,

    responsive:{
      0:{ items:1 },
      768:{ items:2 },
      1200:{ items:3 }
    }
  });

  $("#prevPub").click(function(){
    slider.trigger("prev.owl.carousel");
  });

  $("#nextPub").click(function(){
    slider.trigger("next.owl.carousel");
  });
}


/* =================
   LOAD PARTIALS
================= */

loadSection("header", "partials/header.html", initSearch);
loadSection("hero", "partials/hero.html");
loadSection("about", "partials/about.html");
loadSection("publications", "partials/publications.html", initPublicationsSlider);
loadSection("cta", "partials/cta.html");
loadSection("latest-articles", "partials/latest-articles.html");
loadSection("footer", "partials/footer.html");
