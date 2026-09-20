(function () {
  "use strict";

  const money = (n) => "₹" + Number(n).toLocaleString("en-IN");

  // ---------- product media (photo, with graceful fallback) ----------
  window.__mediaFallback = function (img) {
    const box = img.closest(".sku-media");
    if (!box) return;
    box.classList.add("sku-media-empty");
    box.innerHTML =
      '<span class="media-badge">' + (img.dataset.badge || "") + '</span>' +
      '<span class="media-hint">Photo coming soon</span>';
  };

  function mediaBlock(imageFile, alt, badgeText) {
    if (imageFile) {
      return (
        '<div class="sku-media">' +
        '<img src="images/' + imageFile + '" alt="' + alt + '" loading="lazy" ' +
        'data-badge="' + badgeText + '" onerror="__mediaFallback(this)">' +
        '</div>'
      );
    }
    return (
      '<div class="sku-media sku-media-empty">' +
      '<span class="media-badge">' + badgeText + '</span>' +
      '<span class="media-hint">Photo coming soon</span>' +
      '</div>'
    );
  }

  const state = {
    battery: { categories: new Set(), brands: new Set() },
    tyre: { categories: new Set(), brands: new Set() },
    cart: [], // {id, kind, title, meta, price, qty}
  };

  // ---------- persistence (per-browser convenience only) ----------
  function loadCart() {
    try {
      const raw = localStorage.getItem("mpap_cart");
      if (raw) state.cart = JSON.parse(raw);
    } catch (e) { /* ignore */ }
  }
  function saveCart() {
    try { localStorage.setItem("mpap_cart", JSON.stringify(state.cart)); } catch (e) { /* ignore */ }
  }

  // ---------- header / config ----------
  function initHeader() {
    document.querySelectorAll("[data-business-name]").forEach((el) => (el.textContent = CONFIG.businessName));
    document.querySelectorAll("[data-tagline]").forEach((el) => (el.textContent = CONFIG.tagline));
    document.querySelectorAll("[data-phone]").forEach((el) => (el.textContent = CONFIG.phone));
    document.querySelectorAll("a[data-tel]").forEach((el) => (el.href = "tel:" + CONFIG.phoneDial));
    document.querySelectorAll("a[data-wa]").forEach((el) => {
      const msg = el.getAttribute("data-wa-msg") || "Hi " + CONFIG.businessName + ", I'd like some help.";
      el.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg);
    });
    document.querySelectorAll("[data-email]").forEach((el) => (el.textContent = CONFIG.email));
    document.querySelectorAll("[data-whatsapp-display]").forEach((el) => (el.textContent = CONFIG.whatsappDisplay));
    document.querySelectorAll("a[data-mailto]").forEach((el) => (el.href = "mailto:" + CONFIG.email));
    document.title = CONFIG.businessName + " — Batteries & Tyres, Madhya Pradesh";
  }

  // ---------- filter builders ----------
  function buildFilterGroup(container, title, items, selectedSet, onChange) {
    const group = document.createElement("div");
    group.className = "filter-group";
    const h4 = document.createElement("h4");
    h4.textContent = title;
    group.appendChild(h4);
    const list = document.createElement("div");
    list.className = "filter-list";
    items.forEach(({ value, label }) => {
      const id = title.replace(/\s+/g, "-") + "-" + value;
      const wrap = document.createElement("label");
      wrap.className = "filter-chip";
      wrap.setAttribute("for", id);
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.id = id;
      cb.checked = selectedSet.has(value);
      cb.addEventListener("change", () => {
        if (cb.checked) selectedSet.add(value); else selectedSet.delete(value);
        onChange();
      });
      wrap.appendChild(cb);
      const span = document.createElement("span");
      span.textContent = label;
      wrap.appendChild(span);
      list.appendChild(wrap);
    });
    group.appendChild(list);
    container.appendChild(group);
  }

  function uniqueBrands(items) {
    return Array.from(new Set(items.map((i) => i.brand))).sort();
  }

  // ---------- battery catalog ----------
  function renderBatteryFilters() {
    const el = document.getElementById("battery-filters");
    el.innerHTML = "";
    const catItems = Object.entries(BATTERY_CATEGORIES).map(([value, label]) => ({ value, label }));
    buildFilterGroup(el, "Vehicle type", catItems, state.battery.categories, renderBatteries);
    const brandItems = uniqueBrands(BATTERIES).map((b) => ({ value: b, label: b }));
    buildFilterGroup(el, "Brand", brandItems, state.battery.brands, renderBatteries);
    const reset = document.createElement("button");
    reset.className = "filter-reset";
    reset.textContent = "Clear filters";
    reset.addEventListener("click", () => {
      state.battery.categories.clear();
      state.battery.brands.clear();
      renderBatteryFilters();
      renderBatteries();
    });
    el.appendChild(reset);
  }

  function filteredBatteries() {
    return BATTERIES.filter((b) => {
      const catOk = state.battery.categories.size === 0 || state.battery.categories.has(b.category);
      const brandOk = state.battery.brands.size === 0 || state.battery.brands.has(b.brand);
      return catOk && brandOk;
    });
  }

  function batteryCard(b) {
    const card = document.createElement("article");
    card.className = "sku-card";
    card.innerHTML =
      mediaBlock(b.image, b.brand + " " + b.model, "Ah") +
      '<div class="sku-top">' +
        '<div><div class="sku-brand">' + b.brand + '</div><div class="sku-model">' + b.model + '</div></div>' +
        '<div class="sku-id">' + b.id + '</div>' +
      '</div>' +
      '<div class="sku-specs">' +
        '<div class="row"><span>Capacity</span><span>' + b.ah + ' Ah</span></div>' +
        '<div class="row"><span>Warranty</span><span>' + b.warrantyMonths + ' months</span></div>' +
        '<div class="row"><span>Fits</span><span>' + b.vehicles.join(", ") + '</span></div>' +
      '</div>' +
      '<div class="sku-price">' +
        '<div><div class="price">' + money(b.priceWithExchange) + '</div><div class="price-note">with old battery exchange</div></div>' +
        '<div class="price-note tabular">MRP ' + money(b.mrp) + '</div>' +
      '</div>' +
      '<div class="sku-actions">' +
        '<button class="btn btn-volt btn-sm" data-add="' + b.id + '">Add to enquiry</button>' +
      '</div>';
    card.querySelector("[data-add]").addEventListener("click", () =>
      addToCart({
        id: b.id,
        kind: "Battery",
        title: b.brand + " " + b.model,
        meta: b.ah + " Ah • " + b.warrantyMonths + " mo warranty",
        price: b.priceWithExchange,
      })
    );
    return card;
  }

  function renderBatteries() {
    const grid = document.getElementById("battery-grid");
    const count = document.getElementById("battery-count");
    grid.innerHTML = "";
    const items = filteredBatteries();
    count.textContent = items.length + " of " + BATTERIES.length + " batteries";
    if (items.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No batteries match those filters yet — try clearing one.";
      grid.appendChild(empty);
      return;
    }
    items.forEach((b) => grid.appendChild(batteryCard(b)));
  }

  // ---------- tyre catalog ----------
  function renderTyreFilters() {
    const el = document.getElementById("tyre-filters");
    el.innerHTML = "";
    const catItems = Object.entries(TYRE_CATEGORIES).map(([value, label]) => ({ value, label }));
    buildFilterGroup(el, "Vehicle type", catItems, state.tyre.categories, renderTyres);
    const brandItems = uniqueBrands(TYRES).map((b) => ({ value: b, label: b }));
    buildFilterGroup(el, "Brand", brandItems, state.tyre.brands, renderTyres);
    const reset = document.createElement("button");
    reset.className = "filter-reset";
    reset.textContent = "Clear filters";
    reset.addEventListener("click", () => {
      state.tyre.categories.clear();
      state.tyre.brands.clear();
      renderTyreFilters();
      renderTyres();
    });
    el.appendChild(reset);
  }

  function filteredTyres() {
    return TYRES.filter((t) => {
      const catOk = state.tyre.categories.size === 0 || state.tyre.categories.has(t.category);
      const brandOk = state.tyre.brands.size === 0 || state.tyre.brands.has(t.brand);
      return catOk && brandOk;
    });
  }

  function tyreCard(t) {
    const card = document.createElement("article");
    card.className = "sku-card";
    card.innerHTML =
      mediaBlock(t.image, t.brand + " " + t.pattern, "Tyre") +
      '<div class="sku-top">' +
        '<div><div class="sku-brand">' + t.brand + '</div><div class="sku-model">' + t.pattern + '</div></div>' +
        '<div class="sku-id">' + t.id + '</div>' +
      '</div>' +
      '<div class="sku-specs">' +
        '<div class="row"><span>Size</span><span>' + t.size + '</span></div>' +
        '<div class="row"><span>Category</span><span>' + t.categoryLabel + '</span></div>' +
        '<div class="row"><span>Fits</span><span>' + t.vehicles.join(", ") + '</span></div>' +
      '</div>' +
      '<div class="sku-price">' +
        '<div><div class="price">' + money(t.mrp) + '</div><div class="price-note">per tyre, fitting extra</div></div>' +
      '</div>' +
      '<div class="sku-actions">' +
        '<button class="btn btn-ember btn-sm" data-add="' + t.id + '">Add to enquiry</button>' +
      '</div>';
    card.querySelector("[data-add]").addEventListener("click", () =>
      addToCart({
        id: t.id,
        kind: "Tyre",
        title: t.brand + " " + t.pattern,
        meta: t.size + " • " + t.categoryLabel,
        price: t.mrp,
      })
    );
    return card;
  }

  function renderTyres() {
    const grid = document.getElementById("tyre-grid");
    const count = document.getElementById("tyre-count");
    grid.innerHTML = "";
    const items = filteredTyres();
    count.textContent = items.length + " of " + TYRES.length + " tyres";
    if (items.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No tyres match those filters yet — try clearing one.";
      grid.appendChild(empty);
      return;
    }
    items.forEach((t) => grid.appendChild(tyreCard(t)));
  }

  // ---------- category quick-jump grid ----------
  function renderCategoryGrid() {
    const grid = document.getElementById("category-grid");
    const defs = [
      { tag: "volt", tagLabel: "Battery", title: "Car & SUV Batteries", meta: "35–75 Ah • 9 brands", action: () => jumpTo("batteries", { categories: ["car"] }) },
      { tag: "volt", tagLabel: "Battery", title: "Two-Wheeler Batteries", meta: "2.5–9 Ah • 5 brands", action: () => jumpTo("batteries", { categories: ["bike"] }) },
      { tag: "volt", tagLabel: "Battery", title: "Inverter & Home UPS", meta: "100–220 Ah", action: () => jumpTo("batteries", { categories: ["inverter"] }) },
      { tag: "volt", tagLabel: "Battery", title: "Commercial & Heavy Vehicle", meta: "Truck, bus, LCV", action: () => jumpTo("batteries", { categories: ["commercial"] }) },
      { tag: "volt", tagLabel: "Battery", title: "Tractor & Farm", meta: "88–135 Ah", action: () => jumpTo("batteries", { categories: ["tractor"] }) },
      { tag: "ember", tagLabel: "Tyre", title: "Car & SUV Tyres", meta: "13 brands", action: () => jumpTo("tyres", { categories: ["car"] }) },
      { tag: "ember", tagLabel: "Tyre", title: "Two-Wheeler Tyres", meta: "Scooter & motorcycle", action: () => jumpTo("tyres", { categories: ["bike"] }) },
      { tag: "ember", tagLabel: "Tyre", title: "Truck & Bus Tyres", meta: "LCV / HCV", action: () => jumpTo("tyres", { categories: ["truck"] }) },
      { tag: "ember", tagLabel: "Tyre", title: "Tractor & Farm Tyres", meta: "Front, rear, trailer", action: () => jumpTo("tyres", { categories: ["tractor"] }) },
      { tag: "ember", tagLabel: "Tyre", title: "Three-Wheeler Tyres", meta: "Auto & e-rickshaw", action: () => jumpTo("tyres", { categories: ["auto"] }) },
    ];
    grid.innerHTML = "";
    defs.forEach((d) => {
      const card = document.createElement("button");
      card.className = "cat-card";
      card.innerHTML =
        '<span class="cat-tag ' + d.tag + '">' + d.tagLabel + '</span>' +
        '<h3>' + d.title + '</h3>' +
        '<span class="cat-meta">' + d.meta + '</span>';
      card.addEventListener("click", d.action);
      grid.appendChild(card);
    });
  }

  function jumpTo(section, opts) {
    if (section === "batteries" && opts && opts.categories) {
      state.battery.categories = new Set(opts.categories);
      renderBatteryFilters();
      renderBatteries();
    }
    if (section === "tyres" && opts && opts.categories) {
      state.tyre.categories = new Set(opts.categories);
      renderTyreFilters();
      renderTyres();
    }
    document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---------- regional offices ----------
  function renderRegions() {
    const grid = document.getElementById("region-grid");
    grid.innerHTML = "";
    REGIONS.forEach((r) => {
      const card = document.createElement("article");
      card.className = "region-card";
      card.id = "office-" + r.city.toLowerCase();
      const mapsQuery = encodeURIComponent(CONFIG.businessName + ", " + r.area + ", " + r.city + " " + r.pincode);
      card.innerHTML =
        '<div class="region-city"><h3>' + r.city + '</h3><span class="region-pin">PIN ' + r.pincode + '</span></div>' +
        '<div class="region-addr">' + r.area + ', ' + r.city + ' – ' + r.pincode + '</div>' +
        '<div class="region-meta">' +
          '<div class="row"><span>Phone</span> <span class="tabular">' + r.phone + '</span></div>' +
          '<div class="row"><span>Hours</span> <span>' + r.hours + '</span></div>' +
        '</div>' +
        '<div class="region-actions">' +
          '<a class="btn btn-line btn-sm" href="tel:' + r.phone.replace(/\s+/g, "") + '">Call office</a>' +
          '<a class="btn btn-line btn-sm" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + mapsQuery + '">Get directions</a>' +
        '</div>';
      grid.appendChild(card);
    });
  }

  function renderCityStrip() {
    const strip = document.getElementById("city-strip");
    strip.innerHTML = "";
    REGIONS.forEach((r) => {
      const a = document.createElement("a");
      a.href = "#office-" + r.city.toLowerCase();
      a.className = "city-chip";
      a.textContent = r.city;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("regions").scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          document.querySelectorAll(".region-card").forEach((c) => c.classList.remove("highlight"));
          const target = document.getElementById("office-" + r.city.toLowerCase());
          if (target) {
            target.classList.add("highlight");
            target.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 300);
      });
      strip.appendChild(a);
    });
  }

  function populateCallbackCitySelect() {
    const sel = document.getElementById("cb-city");
    sel.innerHTML = "";
    REGIONS.forEach((r) => {
      const opt = document.createElement("option");
      opt.value = r.city;
      opt.textContent = r.city;
      sel.appendChild(opt);
    });
  }

  // ---------- cart / enquiry drawer ----------
  function addToCart(item) {
    const existing = state.cart.find((c) => c.id === item.id);
    if (existing) existing.qty += 1;
    else state.cart.push(Object.assign({ qty: 1 }, item));
    saveCart();
    renderCart();
    openDrawer();
    showToast(item.title + " added to enquiry list");
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter((c) => c.id !== id);
    saveCart();
    renderCart();
  }

  function cartTotal() {
    return state.cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  }

  function renderCart() {
    const countEl = document.getElementById("cart-count");
    const total = state.cart.reduce((n, c) => n + c.qty, 0);
    countEl.textContent = String(total);
    countEl.hidden = total === 0;

    const body = document.getElementById("drawer-body");
    body.innerHTML = "";
    if (state.cart.length === 0) {
      const empty = document.createElement("div");
      empty.className = "drawer-empty";
      empty.textContent = "Your enquiry list is empty. Add a battery or tyre to get a quote.";
      body.appendChild(empty);
    } else {
      state.cart.forEach((c) => {
        const row = document.createElement("div");
        row.className = "drawer-item";
        row.innerHTML =
          '<div>' +
            '<div class="di-title">' + c.kind + ': ' + c.title + '</div>' +
            '<div class="di-meta">' + c.meta + ' • qty ' + c.qty + '</div>' +
            '<div class="di-price tabular">' + money(c.price * c.qty) + '</div>' +
          '</div>' +
          '<button class="di-remove" data-remove="' + c.id + '">Remove</button>';
        row.querySelector("[data-remove]").addEventListener("click", () => removeFromCart(c.id));
        body.appendChild(row);
      });
    }
    document.getElementById("drawer-total-value").textContent = money(cartTotal());
    document.getElementById("send-enquiry").disabled = state.cart.length === 0;
  }

  function openDrawer() {
    document.getElementById("drawer-backdrop").hidden = false;
    document.getElementById("drawer").hidden = false;
  }
  function closeDrawer() {
    document.getElementById("drawer-backdrop").hidden = true;
    document.getElementById("drawer").hidden = true;
  }

  function buildEnquiryMessage(extra) {
    const lines = [];
    lines.push("Hi " + CONFIG.businessName + ", I'd like a quote for:");
    state.cart.forEach((c) => {
      lines.push("• " + c.kind + " — " + c.title + " (" + c.meta + ") x" + c.qty + " — " + money(c.price * c.qty));
    });
    lines.push("Estimated total: " + money(cartTotal()));
    if (extra && extra.name) lines.push("Name: " + extra.name);
    if (extra && extra.phone) lines.push("Phone: " + extra.phone);
    if (extra && extra.city) lines.push("Nearest office: " + extra.city);
    if (extra && extra.time) lines.push("Best time to call: " + extra.time);
    return lines.join("\n");
  }

  function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 2600);
  }

  function initDrawer() {
    document.getElementById("open-drawer").addEventListener("click", openDrawer);
    document.getElementById("drawer-close").addEventListener("click", closeDrawer);
    document.getElementById("drawer-backdrop").addEventListener("click", closeDrawer);
    document.getElementById("send-enquiry").addEventListener("click", () => {
      const url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(buildEnquiryMessage());
      window.open(url, "_blank", "noopener");
    });
    document.getElementById("callback-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cb-name").value.trim();
      const phone = document.getElementById("cb-phone").value.trim();
      const city = document.getElementById("cb-city").value;
      const time = document.getElementById("cb-time").value;
      if (!name || !phone) return;
      const url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(buildEnquiryMessage({ name, phone, city, time }));
      window.open(url, "_blank", "noopener");
      showToast("Opening WhatsApp to send your callback request…");
    });
  }

  // ---------- FAQ ----------
  function initFaq() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.addEventListener("toggle", () => {
        if (item.open) {
          document.querySelectorAll(".faq-item").forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  }

  // ---------- mobile nav ----------
  function initNavToggle() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  function start() {
    loadCart();
    initHeader();
    renderCategoryGrid();
    renderBatteryFilters();
    renderBatteries();
    renderTyreFilters();
    renderTyres();
    renderCityStrip();
    renderRegions();
    populateCallbackCitySelect();
    initDrawer();
    renderCart();
    initFaq();
    initNavToggle();
  }

  if (window.claude && window.claude.hot) {
    window.claude.hot.ready
      ? window.claude.hot.ready(start)
      : start(window.claude.hot.data || {});
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
})();
