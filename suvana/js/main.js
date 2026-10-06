(function () {
  var LANG_KEY = "suvana_lang";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 900;

  function lang() {
    return document.documentElement.getAttribute("lang") || "en";
  }

  function loc(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang()] || obj.en || "";
  }

  function money(n) {
    return window.SUVANA_CONFIG.currencySymbol + n;
  }

  function applyLang(next) {
    var pack = window.SUVANA_I18N[next] || window.SUVANA_I18N.en;
    document.documentElement.lang = pack.lang;
    document.documentElement.dir = pack.dir;
    localStorage.setItem(LANG_KEY, pack.lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = window.t(el.getAttribute("data-i18n"));
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.placeholder = val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.placeholder = window.t(el.getAttribute("data-i18n-placeholder"));
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-on", btn.getAttribute("data-lang") === pack.lang);
    });
    var marquee = document.getElementById("marquee-text");
    if (marquee) marquee.textContent = (pack.marquee + pack.marquee);
    renderHeaderActive();
    renderCart();
    if (window.__suvanaRefreshPage) window.__suvanaRefreshPage();
  }

  function svg(name) {
    if (name === "search")
      return '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.2-3.2"/></svg>';
    if (name === "bag")
      return '<svg viewBox="0 0 24 24"><path d="M6 8h12l-1 13H7L6 8z"/><path d="M9 8V7a3 3 0 016 0v1"/></svg>';
    return "";
  }

  function mountChrome() {
    var header = document.getElementById("site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML =
        '<a class="logo hoverable" href="index.html">SUVANA</a>' +
        '<nav class="nav-desktop">' +
        link("index.html", "nav.home") +
        link("shop.html", "nav.shop") +
        link("shop.html?cat=hoodies", "nav.hoodies") +
        link("shop.html?cat=sets", "nav.sets") +
        link("shop.html?cat=tshirts", "nav.tshirts") +
        link("about.html", "nav.about") +
        "</nav>" +
        '<div class="header-actions">' +
        '<div class="lang-switch">' +
        '<button class="lang-btn hoverable" data-lang="en">EN</button>' +
        "<span>/</span>" +
        '<button class="lang-btn hoverable" data-lang="ar">AR</button>' +
        "</div>" +
        '<button class="icon-btn hoverable" data-open="search" aria-label="Search">' +
        svg("search") +
        "</button>" +
        '<button class="icon-btn hoverable" data-open="cart" aria-label="Cart">' +
        svg("bag") +
        '<span class="cart-count" id="cart-count">0</span></button>' +
        '<button class="hamburger hoverable" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>' +
        "</div>";
    }

    var mobile = document.getElementById("mobile-nav");
    if (mobile) {
      mobile.className = "mobile-nav";
      mobile.innerHTML =
        link("index.html", "nav.home") +
        link("shop.html", "nav.shop") +
        link("shop.html?cat=hoodies", "nav.hoodies") +
        link("shop.html?cat=sets", "nav.sets") +
        link("shop.html?cat=tshirts", "nav.tshirts") +
        link("about.html", "nav.about");
    }

    var footer = document.getElementById("site-footer");
    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML =
        '<div class="footer-top">' +
        '<div><a class="logo hoverable" href="index.html">SUVANA</a><p class="kicker" data-i18n="footer.tag"></p></div>' +
        '<div class="footer-links">' +
        link("shop.html", "nav.shop") +
        link("about.html", "nav.about") +
        link("contact.html", "nav.contact") +
        link("size-guide.html", "nav.sizeGuide") +
        link("privacy.html", "nav.privacy") +
        link("terms.html", "nav.terms") +
        "</div>" +
        '<div class="socials">' +
        '<a class="hoverable" href="' +
        window.SUVANA_CONFIG.instagram +
        '" target="_blank" rel="noopener">IG</a>' +
        '<a class="hoverable" href="' +
        window.SUVANA_CONFIG.facebook +
        '" target="_blank" rel="noopener">FB</a>' +
        '<a class="hoverable" href="' +
        window.SUVANA_CONFIG.tiktok +
        '" target="_blank" rel="noopener">TT</a>' +
        '<a class="hoverable" href="https://wa.me/' +
        window.SUVANA_CONFIG.whatsapp +
        '" target="_blank" rel="noopener">WA</a>' +
        "</div></div>" +
        '<div class="footer-bottom"><span data-i18n="footer.copy"></span><span>SUVANA</span></div>';
    }

    document.getElementById("cart-root").innerHTML =
      '<div class="cart-backdrop" id="cart-backdrop"></div>' +
      '<aside class="cart-drawer" id="cart-drawer">' +
      '<div class="cart-head"><span data-i18n="cart.title"></span><button class="hoverable" data-close="cart" data-i18n="close"></button></div>' +
      '<div class="cart-body" id="cart-body"></div>' +
      '<div class="cart-foot" id="cart-foot"></div></aside>';

    document.getElementById("search-root").innerHTML =
      '<div class="search-backdrop" id="search-backdrop"></div>' +
      '<div class="search-panel" id="search-panel">' +
      '<div class="search-head"><span data-i18n="search.title"></span><button class="hoverable" data-close="search" data-i18n="search.close"></button></div>' +
      '<input id="search-input" data-i18n-placeholder="search.placeholder" />' +
      '<div class="search-results" id="search-results"></div></div>';

    document.getElementById("qv-root").innerHTML =
      '<div class="qv-backdrop" id="qv-backdrop"></div>' +
      '<div class="qv" id="qv"></div>';

    bindChrome();
    renderHeaderActive();
  }

  function link(href, key) {
    return '<a class="hoverable" href="' + href + '" data-i18n="' + key + '"></a>';
  }

  function renderHeaderActive() {
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-desktop a").forEach(function (a) {
      var href = a.getAttribute("href");
      a.classList.toggle("is-active", href === path || (path === "" && href === "index.html"));
    });
  }

  function bindChrome() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });

    var ham = document.getElementById("hamburger");
    var mobile = document.getElementById("mobile-nav");
    if (ham && mobile) {
      ham.addEventListener("click", function () {
        ham.classList.toggle("is-open");
        mobile.classList.toggle("is-open");
      });
      mobile.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          ham.classList.remove("is-open");
          mobile.classList.remove("is-open");
        });
      });
    }

    document.addEventListener("click", function (e) {
      var open = e.target.closest("[data-open]");
      var close = e.target.closest("[data-close]");
      if (open) toggleOverlay(open.getAttribute("data-open"), true);
      if (close) toggleOverlay(close.getAttribute("data-close"), false);
      if (e.target.id === "cart-backdrop") toggleOverlay("cart", false);
      if (e.target.id === "search-backdrop") toggleOverlay("search", false);
      if (e.target.id === "qv-backdrop") closeQuickView();
    });

    window.addEventListener("scroll", function () {
      var h = document.getElementById("site-header");
      if (h) h.classList.toggle("is-scrolled", window.scrollY > 24);
    });

    interceptNav();
  }

  function toggleOverlay(name, on) {
    if (name === "cart") {
      document.getElementById("cart-drawer").classList.toggle("is-open", on);
      document.getElementById("cart-backdrop").classList.toggle("is-open", on);
      if (on) renderCart();
    }
    if (name === "search") {
      document.getElementById("search-panel").classList.toggle("is-open", on);
      document.getElementById("search-backdrop").classList.toggle("is-open", on);
      if (on) {
        var input = document.getElementById("search-input");
        input.value = "";
        renderSearch("");
        setTimeout(function () {
          input.focus();
        }, 200);
      }
    }
  }

  function renderCart() {
    var items = window.SuvanaCart.read();
    var countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = String(window.SuvanaCart.count());
    var body = document.getElementById("cart-body");
    var foot = document.getElementById("cart-foot");
    if (!body || !foot) return;
    if (!items.length) {
      body.innerHTML =
        '<div class="empty-cart"><p data-i18n="cart.empty"></p><a class="btn hoverable" href="shop.html" data-i18n="cart.shop"></a></div>';
      foot.innerHTML = "";
      body.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = window.t(el.getAttribute("data-i18n"));
      });
      return;
    }
    body.innerHTML = items
      .map(function (item, i) {
        var p = window.getProductById(item.id);
        if (!p) return "";
        var color = p.colors.find(function (c) {
          return c.id === item.color;
        });
        return (
          '<article class="cart-item">' +
          '<img src="' +
          p.images[0] +
          '" alt="" />' +
          "<div><div class=\"product-name\">" +
          loc(p.name) +
          "</div><div class=\"product-price\">" +
          money(p.price) +
          " · " +
          item.size +
          " · " +
          (color ? loc(color.name) : "") +
          '</div><div class="qty-row">' +
          '<button class="hoverable" data-qty="' +
          i +
          '" data-d="-1">−</button><span>' +
          item.qty +
          '</span><button class="hoverable" data-qty="' +
          i +
          '" data-d="1">+</button>' +
          '<button class="hoverable" data-remove="' +
          i +
          '" data-i18n="cart.remove"></button></div></div></article>'
        );
      })
      .join("");
    body.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = window.t(el.getAttribute("data-i18n"));
    });
    foot.innerHTML =
      '<div class="cart-row"><span data-i18n="cart.items"></span><span>' +
      window.SuvanaCart.count() +
      '</span></div><div class="cart-row"><span data-i18n="cart.subtotal"></span><span>' +
      money(window.SuvanaCart.subtotal()) +
      "</span></div>" +
      '<button class="btn btn-fill hoverable" id="wa-checkout" data-i18n="cart.checkout"></button>' +
      '<button class="btn btn-ghost hoverable" id="clear-cart" style="margin-top:10px;width:100%" data-i18n="cart.clear"></button>';
    foot.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = window.t(el.getAttribute("data-i18n"));
    });

    body.querySelectorAll("[data-qty]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = +btn.getAttribute("data-qty");
        var d = +btn.getAttribute("data-d");
        var itemsNow = window.SuvanaCart.read();
        window.SuvanaCart.setQty(i, itemsNow[i].qty + d);
      });
    });
    body.querySelectorAll("[data-remove]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.SuvanaCart.remove(+btn.getAttribute("data-remove"));
      });
    });
    var wa = document.getElementById("wa-checkout");
    if (wa)
      wa.addEventListener("click", function () {
        window.open(window.SuvanaCart.waUrl(window.SuvanaCart.whatsappMessage()), "_blank");
      });
    var clear = document.getElementById("clear-cart");
    if (clear) clear.addEventListener("click", window.SuvanaCart.clear);
  }

  window.addEventListener("suvana:cart", renderCart);

  function renderSearch(q) {
    var box = document.getElementById("search-results");
    var query = (q || "").trim().toLowerCase();
    var list = window.SUVANA_PRODUCTS.filter(function (p) {
      if (!query) return true;
      return (
        p.name.en.toLowerCase().indexOf(query) !== -1 ||
        p.name.ar.indexOf(query) !== -1 ||
        p.category.indexOf(query) !== -1
      );
    });
    if (!list.length) {
      box.innerHTML = '<p data-i18n="search.none"></p>';
      box.querySelector("[data-i18n]").textContent = window.t("search.none");
      return;
    }
    box.innerHTML = list
      .map(function (p) {
        return (
          '<a class="hoverable" href="product.html?id=' +
          p.id +
          '"><img src="' +
          p.images[0] +
          '" alt="" /><span>' +
          loc(p.name) +
          "<br />" +
          money(p.price) +
          "</span></a>"
        );
      })
      .join("");
  }

  function productCard(p) {
    var sw = p.colors
      .map(function (c) {
        return '<span class="swatch" style="background:' + c.hex + '"></span>';
      })
      .join("");
    return (
      '<article class="product-card hoverable">' +
      '<a class="product-media" href="product.html?id=' +
      p.id +
      '"><img loading="lazy" src="' +
      p.images[0] +
      '" alt="' +
      loc(p.name) +
      '" /></a>' +
      '<div class="product-overlay">' +
      '<button class="btn hoverable" data-qv="' +
      p.id +
      '" data-i18n="product.quickView"></button>' +
      '<button class="btn btn-fill hoverable" data-add="' +
      p.id +
      '" data-i18n="product.addToCart"></button></div>' +
      '<div class="product-meta"><div class="product-name">' +
      loc(p.name) +
      '</div><div class="product-price">' +
      money(p.price) +
      '</div><div class="swatches">' +
      sw +
      "</div></div></article>"
    );
  }

  function hydrateI18n(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = window.t(el.getAttribute("data-i18n"));
    });
  }

  function openQuickView(id) {
    var p = window.getProductById(id);
    if (!p) return;
    var el = document.getElementById("qv");
    el.innerHTML =
      '<img src="' +
      p.images[0] +
      '" alt="" /><div class="qv-body"><p class="kicker">' +
      p.category.toUpperCase() +
      "</p><h2 class=\"display\" style=\"font-size:40px;margin:8px 0\">" +
      loc(p.name) +
      "</h2><p>" +
      money(p.price) +
      "</p><p>" +
      loc(p.description) +
      '</p><a class="btn hoverable" href="product.html?id=' +
      p.id +
      '" data-i18n="product.details"></a></div>';
    hydrateI18n(el);
    el.classList.add("is-open");
    document.getElementById("qv-backdrop").classList.add("is-open");
  }

  function closeQuickView() {
    document.getElementById("qv").classList.remove("is-open");
    document.getElementById("qv-backdrop").classList.remove("is-open");
  }

  function toast(msg) {
    var el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("is-on");
    setTimeout(function () {
      el.classList.remove("is-on");
    }, 1600);
  }

  function bindProductButtons(root) {
    (root || document).querySelectorAll("[data-qv]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openQuickView(btn.getAttribute("data-qv"));
      });
    });
    (root || document).querySelectorAll("[data-add]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var p = window.getProductById(btn.getAttribute("data-add"));
        if (!p) return;
        window.SuvanaCart.add({
          id: p.id,
          size: p.sizes[1] || p.sizes[0],
          color: p.colors[0].id,
          qty: 1
        });
        toggleOverlay("cart", true);
        toast(window.t("product.addToCart"));
      });
    });
  }

  function interceptNav() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || href.indexOf("http") === 0 || href.indexOf("wa.me") !== -1 || a.target === "_blank") return;
      if (href.charAt(0) === "#" || reduced) return;
      if (href.indexOf(".html") === -1 && href.indexOf("?") === -1) return;
      e.preventDefault();
      document.documentElement.classList.add("is-leaving");
      setTimeout(function () {
        location.href = href;
      }, 280);
    });
  }

  function loader() {
    var el = document.getElementById("loader");
    if (!el) return;
    var skip = sessionStorage.getItem("suvana_loaded") && document.body.getAttribute("data-page") !== "home";
    if (skip || reduced) {
      el.classList.add("is-done");
      document.documentElement.classList.add("is-ready");
      return;
    }
    setTimeout(function () {
      el.classList.add("is-done");
      document.documentElement.classList.add("is-ready");
      sessionStorage.setItem("suvana_loaded", "1");
    }, 1300);
  }

  function cursor() {
    if (isTouch || reduced) {
      document.body.classList.add("is-mobile");
      return;
    }
    var ring = document.querySelector(".cursor");
    var dot = document.querySelector(".cursor-dot");
    var x = 0,
      y = 0,
      rx = 0,
      ry = 0;
    window.addEventListener("mousemove", function (e) {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = x + "px";
      dot.style.top = y + "px";
    });
    function loop() {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    }
    loop();
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest(".hoverable, a, button, .product-card, img")) ring.classList.add("is-hover");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest(".hoverable, a, button, .product-card, img")) ring.classList.remove("is-hover");
    });
  }

  function observe() {
    var els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .img-reveal");
    if (reduced) {
      els.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  function parallax() {
    if (reduced || isTouch) return;
    var nodes = document.querySelectorAll("[data-parallax]");
    if (!nodes.length) return;
    window.addEventListener(
      "scroll",
      function () {
        nodes.forEach(function (el) {
          var speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
          var rect = el.getBoundingClientRect();
          var y = (window.innerHeight - rect.top) * speed * 0.15;
          el.style.transform = "translateY(" + y + "px) scale(1.05)";
        });
      },
      { passive: true }
    );
  }

  function homePage() {
    var hero = document.getElementById("hero-bg");
    if (hero) hero.style.backgroundImage = "url('" + window.SUVANA_HERO + "')";
    var grid = document.getElementById("latest-grid");
    if (grid) {
      grid.innerHTML = window.SUVANA_PRODUCTS.filter(function (p) {
        return p.featured;
      })
        .slice(0, 6)
        .map(productCard)
        .join("");
      hydrateI18n(grid);
      bindProductButtons(grid);
    }
    var look = document.getElementById("look-row");
    if (look) {
      look.innerHTML = window.SUVANA_LOOKBOOK.map(function (src) {
        return '<div class="look-item hoverable img-reveal"><img loading="lazy" src="' + src + '" alt="SUVANA lookbook" /></div>';
      }).join("");
    }
    var ig = document.getElementById("ig-grid");
    if (ig) {
      ig.innerHTML = window.SUVANA_INSTAGRAM.map(function (src) {
        return (
          '<a class="hoverable" href="' +
          window.SUVANA_CONFIG.instagram +
          '" target="_blank" rel="noopener"><img loading="lazy" src="' +
          src +
          '" alt="SUVANA" /></a>'
        );
      }).join("");
    }
    ["hoodies", "sets", "tshirts", "pants"].forEach(function (key) {
      var el = document.querySelector('[data-cat-img="' + key + '"]');
      if (el) el.src = window.SUVANA_CATEGORIES[key];
    });
    var follow = document.getElementById("ig-follow");
    if (follow) follow.href = window.SUVANA_CONFIG.instagram;
    window.__suvanaRefreshPage = function () {
      homePage();
      observe();
    };
  }

  function shopPage() {
    var params = new URLSearchParams(location.search);
    var state = { cat: params.get("cat") || "all", sort: "featured" };
    var grid = document.getElementById("shop-grid");
    var chips = document.getElementById("shop-filters");
    var sort = document.getElementById("shop-sort");
    var count = document.getElementById("shop-count");

    function draw() {
      var list = window.SUVANA_PRODUCTS.filter(function (p) {
        return state.cat === "all" || p.category === state.cat;
      });
      if (state.sort === "newest") list = list.slice().sort(function (a, b) {
        return Number(b.newest) - Number(a.newest);
      });
      if (state.sort === "low") list = list.slice().sort(function (a, b) {
        return a.price - b.price;
      });
      if (state.sort === "high") list = list.slice().sort(function (a, b) {
        return b.price - a.price;
      });
      if (state.sort === "featured") list = list.slice().sort(function (a, b) {
        return Number(b.featured) - Number(a.featured);
      });
      grid.innerHTML = list.map(productCard).join("");
      hydrateI18n(grid);
      bindProductButtons(grid);
      if (count) count.textContent = list.length + " " + window.t("shop.count");
      chips.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("is-on", c.getAttribute("data-cat") === state.cat);
      });
    }

    chips.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-cat]");
      if (!chip) return;
      state.cat = chip.getAttribute("data-cat");
      draw();
    });
    sort.addEventListener("change", function () {
      state.sort = sort.value;
      draw();
    });
    window.__suvanaRefreshPage = function () {
      chips.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = window.t(el.getAttribute("data-i18n"));
      });
      Array.prototype.forEach.call(sort.options, function (opt) {
        if (opt.dataset.i18n) opt.textContent = window.t(opt.dataset.i18n);
      });
      draw();
    };
    window.__suvanaRefreshPage();
  }

  function productPage() {
    var id = new URLSearchParams(location.search).get("id") || "essential-hoodie";
    var p = window.getProductById(id) || window.SUVANA_PRODUCTS[0];
    var state = { size: p.sizes[1] || p.sizes[0], color: p.colors[0].id, qty: 1, img: 0 };

    function draw() {
      document.getElementById("pdp-name").textContent = loc(p.name);
      document.getElementById("pdp-price").textContent = money(p.price);
      document.getElementById("pdp-desc").textContent = loc(p.description);
      document.getElementById("pdp-main").src = p.images[state.img];
      document.getElementById("pdp-thumbs").innerHTML = p.images
        .map(function (src, i) {
          return (
            '<button class="hoverable' +
            (i === state.img ? " is-on" : "") +
            '" data-img="' +
            i +
            '"><img src="' +
            src +
            '" alt="" /></button>'
          );
        })
        .join("");
      document.getElementById("pdp-sizes").innerHTML = p.sizes
        .map(function (s) {
          return (
            '<button class="hoverable' +
            (s === state.size ? " is-on" : "") +
            '" data-size="' +
            s +
            '">' +
            s +
            "</button>"
          );
        })
        .join("");
      document.getElementById("pdp-colors").innerHTML = p.colors
        .map(function (c) {
          return (
            '<button class="swatch hoverable' +
            (c.id === state.color ? " is-on" : "") +
            '" data-color="' +
            c.id +
            '" style="background:' +
            c.hex +
            ';width:22px;height:22px" title="' +
            loc(c.name) +
            '"></button>'
          );
        })
        .join("");
      document.getElementById("pdp-qty").textContent = String(state.qty);
      var colorName = p.colors.find(function (c) {
        return c.id === state.color;
      });
      document.getElementById("pdp-color-label").textContent = colorName ? loc(colorName.name) : "";
    }

    document.getElementById("pdp-thumbs").addEventListener("click", function (e) {
      var b = e.target.closest("[data-img]");
      if (!b) return;
      state.img = +b.getAttribute("data-img");
      draw();
    });
    document.getElementById("pdp-sizes").addEventListener("click", function (e) {
      var b = e.target.closest("[data-size]");
      if (!b) return;
      state.size = b.getAttribute("data-size");
      draw();
    });
    document.getElementById("pdp-colors").addEventListener("click", function (e) {
      var b = e.target.closest("[data-color]");
      if (!b) return;
      state.color = b.getAttribute("data-color");
      draw();
    });
    document.getElementById("qty-minus").addEventListener("click", function () {
      state.qty = Math.max(1, state.qty - 1);
      draw();
    });
    document.getElementById("qty-plus").addEventListener("click", function () {
      state.qty += 1;
      draw();
    });
    document.getElementById("pdp-add").addEventListener("click", function () {
      window.SuvanaCart.add({ id: p.id, size: state.size, color: state.color, qty: state.qty });
      toggleOverlay("cart", true);
    });
    document.getElementById("pdp-buy").addEventListener("click", function () {
      window.SuvanaCart.add({ id: p.id, size: state.size, color: state.color, qty: state.qty });
      toggleOverlay("cart", true);
    });
    document.getElementById("pdp-wa").addEventListener("click", function () {
      var msg = window.SuvanaCart.productWhatsapp(p, state.size, state.color, state.qty);
      window.open(window.SuvanaCart.waUrl(msg), "_blank");
    });
    window.__suvanaRefreshPage = draw;
    draw();
  }

  function newsletter() {
    var form = document.getElementById("news-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("news-email").value.trim();
      var msg = document.getElementById("news-msg");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = window.t("news.err");
        return;
      }
      var list = JSON.parse(localStorage.getItem("suvana_news") || "[]");
      list.push(email);
      localStorage.setItem("suvana_news", JSON.stringify(list));
      msg.textContent = window.t("news.ok");
      form.reset();
    });
  }

  function contactPage() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var wa = document.getElementById("contact-wa");
    if (wa) wa.href = "https://wa.me/" + window.SUVANA_CONFIG.whatsapp;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("contact-msg").textContent = window.t("contact.ok");
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (isTouch) document.body.classList.add("is-mobile");
    mountChrome();
    var saved = localStorage.getItem(LANG_KEY) || "en";
    applyLang(saved);
    loader();
    cursor();
    var page = document.body.getAttribute("data-page");
    if (page === "home") homePage();
    if (page === "shop") shopPage();
    if (page === "product") productPage();
    if (page === "contact") contactPage();
    newsletter();
    var searchInput = document.getElementById("search-input");
    if (searchInput)
      searchInput.addEventListener("input", function () {
        renderSearch(searchInput.value);
      });
    observe();
    parallax();
  });
})();
