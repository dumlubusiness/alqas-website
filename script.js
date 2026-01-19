/*
  ALQAS AL IRAQI - Simple JS (Beginner-friendly)
  ------------------------------------------------
  ✅ Setup (edit only these):
  - ORDER_LINKS: add your real Talabat/Snoonu/Keeta URLs
  - MAPS_LINK: add your real Google Maps pin
  - SOCIAL_LINKS: add your social links
*/

// 1) UPDATE THESE 🔥
const PHONE_QATAR = "+97455026741";
const WHATSAPP_QATAR = "+97455026741";

// 2) Replace these with YOUR restaurant pages on each app
const ORDER_LINKS = {
  talabat: "https://www.talabat.com/qatar",
  snoonu: "https://snoonu.com/",
  keeta: "https://www.keeta.com/",
  call: () => `tel:${PHONE_QATAR}`,
  whatsapp: (message) => buildWhatsAppLink(message),
};

// 3) Google Maps link
const MAPS_LINK = "https://maps.app.goo.gl/EytJS5FhABcwX12D8";

// 4) Social links (edit later)
const SOCIAL_LINKS = {
  instagram: "#",
  tiktok: "#",
  snapchat: "#",
};

// ------------------------------------------------------------
// Bilingual content (AR/EN)

const I18N = {
  ar: {
    brand_tag: "شاورما عراقية أصلية في قطر",

    menu_modal_note: "يمكنك استبدال هذه الصورة لاحقاً بصورة المنيو الرسمية.",

    menu_modal_title: "المنيو",

    menu_badge: "اضغط للتكبير",

    view_menu: "عرض المنيو",

    menu_preview_subtitle: "هذه صورة مثال فقط — تقدر تبدلها لاحقاً بصورتكم الرسمية.",

    menu_preview_title: "منيو (صورة مؤقتة)",

    open_maps_short: "الموقع",

    loc_desc: "افتح Google Maps لمعرفة المسافة والاتجاهات من موقعك.",

    loc_hint: "اضغط لفتح الاتجاهات على Google Maps.",

    loc_title: "الوُكير • قطر",

    loc_label: "الموقع",

    nav_menu: "المنيو",
    nav_best: "الأكثر طلباً",
    nav_gallery: "الصور",
    nav_location: "الموقع",

    drawer_title: "القائمة",
    drawer_lang: "اللغة",

    hero_title: "شاورما عراقية أصلية... طازجة وسريعة",
    hero_subtitle: "طعم عراقي حقيقي في الوُكير – قطر. اطلب خلال ثواني عبر التطبيقات أو واتساب أو اتصال مباشر، أو افتح الاتجاهات على الخريطة.",

    trust_fresh: "✅ طازج يومياً",
    trust_fast: "⚡ توصيل سريع",
    trust_quality: "🔥 جودة ثابتة",

    cta_talabat: "اطلب من Talabat",
    cta_snoonu: "اطلب من Snoonu",
    cta_whatsapp: "واتساب سريع",
    cta_call: "اتصال مباشر",

    hero_micro: "* المنيو الكامل سيتم إضافته قريباً. حالياً: اعرض المنتجات واطلب بسهولة.",

    benefits_title: "ليش الناس تختار ALQAS AL IRAQI؟",
    benefits_subtitle: "لأنك تبي طعم ثابت، خدمة سريعة، وطلب سهل بدون تعقيد.",
    benefit_1_title: "طعم عراقي أصيل",
    benefit_1_desc: "تتبيلة متوازنة، شاورما مشوية صح، ونكهة ترجعك العراق.",
    benefit_2_title: "طلب سهل",
    benefit_2_desc: "اختر الطريقة اللي تريحك: تطبيقات، واتساب، أو اتصال.",
    benefit_3_title: "جودة ثابتة",
    benefit_3_desc: "مكونات موثوقة وتحضير يومي لنتيجة ترضيك كل مرة.",

    menu_title: "المنيو",
    menu_subtitle: "تقدر تضيف/تعدل الأصناف لاحقاً بسهولة (صور + أسماء + أسعار).",
    item_1_title: "شاورما لحم (سيغنتشر)",
    item_1_desc: "مذاق قوي وتتبيلة عراقية.",
    item_1_price: "QAR —",
    item_2_title: "شاورما دجاج",
    item_2_desc: "طريّة ولذيذة ومناسبة للجميع.",
    item_2_price: "QAR —",
    item_3_title: "كومبو",
    item_3_desc: "شاورما + بطاطس + مشروب.",
    item_3_price: "QAR —",
    menu_cta: "اختر طريقة الطلب الآن",

    best_title: "الأكثر طلباً",
    best_subtitle: "اختيارات الناس اللي ترجع تطلب مرة ثانية.",
    best_badge_1: "#1",
    best_1_title: "شاورما اللحم السيغنتشر",
    best_1_desc: "للناس اللي تحب النكهة القوية.",
    best_badge_2: "#2",
    best_2_title: "شاورما الدجاج",
    best_2_desc: "خفيفة ولذيذة ومحبوبة.",
    best_badge_3: "#3",
    best_3_title: "كومبو الوجبة",
    best_3_desc: "أفضل قيمة إذا كنت جوعان.",

    gallery_title: "الصور",
    gallery_subtitle: "صور من شاورماتنا (يمكنك استبدالها لاحقاً بصوركم الرسمية).",

    location_title: "الموقع",
    location_subtitle: "تقدر تلقانا في الوُكير – قطر. اضغط زر الموقع للاتجاهات.",
    open_maps: "افتح الموقع على Google Maps",

    footer_note: "شاورما عراقية أصلية • طازجة يومياً • اطلب بسهولة",

    btn_order: "اطلب الآن",
    btn_whatsapp: "واتساب",
    btn_call: "اتصال",

    modal_title: "اختر طريقة الطلب",
    modal_note: "اختر الخيار المناسب وسيتم فتحه فوراً.",

    wa_message: "السلام عليكم، أريد طلب شاورما من ALQAS AL IRAQI"
  },

  en: {
    brand_tag: "Authentic Iraqi Shawarma in Qatar",

    menu_modal_note: "You can replace this image later with your official menu.",

    menu_modal_title: "Menu",

    menu_badge: "Tap to zoom",

    view_menu: "View Menu",

    menu_preview_subtitle: "This is a placeholder menu image — replace it later with your official menu.",

    menu_preview_title: "Menu (sample image)",

    open_maps_short: "Find Us",

    loc_desc: "Open Google Maps to see distance and directions from your location.",

    loc_hint: "Tap to open directions in Google Maps.",

    loc_title: "Al Wakair • Qatar",

    loc_label: "Location",

    nav_menu: "Menu",
    nav_best: "Bestsellers",
    nav_gallery: "Gallery",
    nav_location: "Location",

    drawer_title: "Menu",
    drawer_lang: "Language",

    hero_title: "Authentic Iraqi Shawarma — Fresh & Fast",
    hero_subtitle: "Real Iraqi flavor in Al Wakair, Qatar. Order in seconds via apps, WhatsApp, or a quick call — or tap directions on Google Maps.",

    trust_fresh: "✅ Fresh daily",
    trust_fast: "⚡ Fast delivery",
    trust_quality: "🔥 Consistent quality",

    cta_talabat: "Order on Talabat",
    cta_snoonu: "Order on Snoonu",
    cta_whatsapp: "Quick WhatsApp",
    cta_call: "Direct Call",

    hero_micro: "* Full menu will be added soon. For now: preview items and order easily.",

    benefits_title: "Why people choose ALQAS AL IRAQI",
    benefits_subtitle: "Because you want consistent taste, fast service, and easy ordering.",
    benefit_1_title: "Authentic Iraqi taste",
    benefit_1_desc: "Balanced seasoning, perfectly grilled shawarma, real flavor.",
    benefit_2_title: "Easy ordering",
    benefit_2_desc: "Choose what suits you: apps, WhatsApp, or a direct call.",
    benefit_3_title: "Consistent quality",
    benefit_3_desc: "Trusted ingredients and fresh preparation every day.",

    menu_title: "Menu",
    menu_subtitle: "You can replace items later (photos + names + prices).",
    item_1_title: "Beef Shawarma (Signature)",
    item_1_desc: "Bold flavor with Iraqi seasoning.",
    item_1_price: "QAR —",
    item_2_title: "Chicken Shawarma",
    item_2_desc: "Tender, tasty, and loved by everyone.",
    item_2_price: "QAR —",
    item_3_title: "Combo Meal",
    item_3_desc: "Shawarma + fries + drink.",
    item_3_price: "QAR —",
    menu_cta: "Choose order method now",

    best_title: "Bestsellers",
    best_subtitle: "Customer favorites people reorder again and again.",
    best_badge_1: "#1",
    best_1_title: "Signature Beef Shawarma",
    best_1_desc: "Perfect for bold-flavor lovers.",
    best_badge_2: "#2",
    best_2_title: "Chicken Shawarma",
    best_2_desc: "Light, delicious, and popular.",
    best_badge_3: "#3",
    best_3_title: "Combo Meal",
    best_3_desc: "Best value when you’re hungry.",

    gallery_title: "Gallery",
    gallery_subtitle: "A few tasty shots (replace later with your official photos).",

    location_title: "Location",
    location_subtitle: "Find us in Al Wakair, Qatar — tap the button for directions.",
    open_maps: "Open in Google Maps",

    footer_note: "Authentic Iraqi Shawarma • Fresh daily • Easy ordering",

    btn_order: "Order Now",
    btn_whatsapp: "WhatsApp",
    btn_call: "Call",

    modal_title: "Choose how to order",
    modal_note: "Pick your preferred option. We'll open it instantly.",

    wa_message: "Hi, I would like to order shawarma from ALQAS AL IRAQI"
  }
};

// ------------------------------------------------------------

let currentLang = "ar";

function buildWhatsAppLink(message){
  const digits = WHATSAPP_QATAR.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function getWhatsAppMessage(){
  return I18N[currentLang]?.wa_message || I18N.ar.wa_message;
}

function openOrder(key){
  const val = ORDER_LINKS[key];
  if (!val) return;

  const url = (typeof val === "function")
    ? (key === "whatsapp" ? val(getWhatsAppMessage()) : val())
    : val;

  if (url.startsWith("tel:") || url.includes("wa.me")) {
    window.location.href = url;
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function applyTranslations(){
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict && dict[k] !== undefined) el.textContent = dict[k];
  });
}

function markActiveLangButtons(lang){
  const all = [
    document.getElementById("langAR"),
    document.getElementById("langEN"),
    document.getElementById("langARMobile"),
    document.getElementById("langENMobile"),
  ].filter(Boolean);

  all.forEach(btn => btn.classList.remove("is-active"));

  if (lang === "ar") {
    document.getElementById("langAR")?.classList.add("is-active");
    document.getElementById("langARMobile")?.classList.add("is-active");
  } else {
    document.getElementById("langEN")?.classList.add("is-active");
    document.getElementById("langENMobile")?.classList.add("is-active");
  }
}

function setLanguage(lang){
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem("alqas_lang", lang);

  document.documentElement.lang = (lang === "ar") ? "ar" : "en";
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.body.classList.toggle("rtl", lang === "ar");
  document.body.classList.toggle("ltr", lang === "en");

  markActiveLangButtons(lang);
  applyTranslations();
}

(function initLanguage(){
  const saved = localStorage.getItem("alqas_lang");
  if (saved && I18N[saved]) {
    setLanguage(saved);
    return;
  }
  setLanguage("ar");
})();

// Language buttons
document.getElementById("langAR")?.addEventListener("click", () => setLanguage("ar"));
document.getElementById("langEN")?.addEventListener("click", () => setLanguage("en"));
document.getElementById("langARMobile")?.addEventListener("click", () => setLanguage("ar"));
document.getElementById("langENMobile")?.addEventListener("click", () => setLanguage("en"));

// Social links
const ig = document.getElementById("igLink");
const tt = document.getElementById("ttLink");
const sc = document.getElementById("scLink");
if (ig) ig.href = SOCIAL_LINKS.instagram;
if (tt) tt.href = SOCIAL_LINKS.tiktok;
if (sc) sc.href = SOCIAL_LINKS.snapchat;

// Maps link
document.querySelectorAll("#mapsLink, #mapsLinkHero").forEach((a) => {
  if (a) a.href = MAPS_LINK;
});
// Quick buttons (direct)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-order]");
  if (btn) {
    e.preventDefault();
    openOrder(btn.getAttribute("data-order"));
    return;
  }

  const quick = e.target.closest("[data-quick]");
  if (quick) {
    e.preventDefault();
    openOrder(quick.getAttribute("data-quick"));
  }
});

// Hamburger drawer
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("mobileMenu");
const backdrop = document.getElementById("backdrop");
const drawerClose = document.getElementById("drawerClose");

function openDrawer(){
  if (!drawer || !backdrop || !hamburger) return;
  drawer.hidden = false;
  backdrop.hidden = false;
  requestAnimationFrame(() => drawer.classList.add("is-open"));
  hamburger.setAttribute("aria-expanded", "true");
  document.body.classList.add("noScroll");
}

function closeDrawer(){
  if (!drawer || !backdrop || !hamburger) return;
  drawer.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("noScroll");
  setTimeout(() => { drawer.hidden = true; backdrop.hidden = true; }, 220);
}

hamburger?.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  isOpen ? closeDrawer() : openDrawer();
});
backdrop?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);
drawer?.addEventListener("click", (e) => { if (e.target.closest("a")) closeDrawer(); });

// Scroll reveal
const revealEls = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.14 }
);
revealEls.forEach((el) => io.observe(el));

// Hide mobile bar when drawer open
const mobileBar = document.getElementById("mobileBar");
const obs = new MutationObserver(() => {
  const open = hamburger?.getAttribute("aria-expanded") === "true";
  if (mobileBar) mobileBar.style.transform = open ? "translateY(120%)" : "translateY(0)";
});
if (hamburger) obs.observe(hamburger, { attributes: true, attributeFilter: ["aria-expanded"] });

// ------------------------------------------------------------
// Order Modal (requested): EVERY "Order Now" opens this popup

const orderModal = document.getElementById("orderModal");
const orderModalClose = document.getElementById("orderModalClose");

function openOrderModal(){
  if (!orderModal) return;
  orderModal.hidden = false;
  requestAnimationFrame(() => orderModal.classList.add("is-open"));
  document.body.classList.add("noScroll");
}

function closeOrderModal(){
  if (!orderModal) return;
  orderModal.classList.remove("is-open");
  document.body.classList.remove("noScroll");
  setTimeout(() => { orderModal.hidden = true; }, 180);
}

// Open modal
document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open-order-modal]");
  if (opener) {
    e.preventDefault();
    openOrderModal();
    return;
  }

  const pick = e.target.closest("[data-modal-order]");
  if (pick) {
    e.preventDefault();
    const key = pick.getAttribute("data-modal-order");
    closeOrderModal();
    openOrder(key);
    return;
  }
});

orderModalClose?.addEventListener("click", closeOrderModal);
orderModal?.addEventListener("click", (e) => { if (e.target === orderModal) closeOrderModal(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeOrderModal();
    closeDrawer();
  }
});


// ===== Menu Modal (Menu image preview) =====
const menuModal = document.getElementById("menuModal");
const menuModalClose = document.getElementById("menuModalClose");
const menuPreviewImg = document.getElementById("menuPreviewImg");
const menuModalImg = document.getElementById("menuModalImg");

// Fallbacks in case file name changes later
const MENU_IMAGE_CANDIDATES = [
  "assets/menu-eng.jpg",
  "assets/Menu%20Eng.jpg",
  "assets/Menu%20Eng.png",
  "assets/menu-eng.png",
  "assets/menu-eng.svg",
];

function setMenuImage(){
  if (!menuPreviewImg || !menuModalImg) return;
  // try first candidate
  menuPreviewImg.src = MENU_IMAGE_CANDIDATES[0];
  menuModalImg.src = MENU_IMAGE_CANDIDATES[0];

  // if load fails, try next
  let idx = 0;
  const tryNext = () => {
    idx += 1;
    if (idx >= MENU_IMAGE_CANDIDATES.length) return;
    menuPreviewImg.src = MENU_IMAGE_CANDIDATES[idx];
    menuModalImg.src = MENU_IMAGE_CANDIDATES[idx];
  };
  menuPreviewImg.onerror = tryNext;
  menuModalImg.onerror = tryNext;
}
setMenuImage();

function openMenuModal(){
  if (!menuModal) return;
  menuModal.hidden = false;
  requestAnimationFrame(() => menuModal.classList.add("is-open"));
  document.body.classList.add("noScroll");
}

function closeMenuModal(){
  if (!menuModal) return;
  menuModal.classList.remove("is-open");
  document.body.classList.remove("noScroll");
  setTimeout(() => { menuModal.hidden = true; }, 180);
}

document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open-menu-modal]");
  if (opener) {
    e.preventDefault();
    openMenuModal();
    return;
  }
});

menuModalClose?.addEventListener("click", closeMenuModal);
menuModal?.addEventListener("click", (e) => {
  if (e.target === menuModal) closeMenuModal();
});


// ===== Hero Carousel (auto + dots + arrows + swipe) =====
function setupHeroCarousel(){
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".carousel__img"));
  const dotsWrap = carousel.querySelector(".carousel__dots");
  let dots = Array.from(carousel.querySelectorAll(".dot"));
  const prev = carousel.querySelector(".carousel__nav.prev");
  const next = carousel.querySelector(".carousel__nav.next");

  // Remove any broken images safely
  slides.forEach((img, i) => {
    img.addEventListener("error", () => {
      img.remove();
      if (dots[i]) dots[i].remove();
      dots = Array.from(carousel.querySelectorAll(".dot"));
    });
  });

  let idx = 0;
  let timer = null;

  function setActive(i){
    const imgs = Array.from(carousel.querySelectorAll(".carousel__img"));
    dots = Array.from(carousel.querySelectorAll(".dot"));
    if (!imgs.length) return;

    idx = (i + imgs.length) % imgs.length;
    imgs.forEach((el, k) => el.classList.toggle("is-active", k === idx));
    dots.forEach((d, k) => d.classList.toggle("is-active", k === idx));
  }

  function start(){
    if (timer) clearInterval(timer);
    timer = setInterval(() => setActive(idx + 1), 4500);
  }

  function stop(){
    if (timer) clearInterval(timer);
    timer = null;
  }

  // Dots click
  dotsWrap?.addEventListener("click", (e) => {
    const d = e.target.closest(".dot");
    if (!d) return;
    const all = Array.from(dotsWrap.querySelectorAll(".dot"));
    const i = all.indexOf(d);
    if (i >= 0) setActive(i);
    start();
  });

  prev?.addEventListener("click", () => { setActive(idx - 1); start(); });
  next?.addEventListener("click", () => { setActive(idx + 1); start(); });

  // Swipe support
  let x0 = null;
  carousel.addEventListener("touchstart", (e) => {
    x0 = e.touches?.[0]?.clientX ?? null;
    stop();
  }, { passive: true });

  carousel.addEventListener("touchend", (e) => {
    const x1 = e.changedTouches?.[0]?.clientX ?? null;
    if (x0 != null && x1 != null){
      const dx = x1 - x0;
      if (Math.abs(dx) > 36){
        dx > 0 ? setActive(idx - 1) : setActive(idx + 1);
      }
    }
    x0 = null;
    start();
  }, { passive: true });

  // Pause when tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  setActive(0);
  start();
}
setupHeroCarousel();
