/*
  ALQAS AL IRAQI - Simple JS (Beginner-friendly)
  ------------------------------------------------
  ✅ Quick setup:
  - Replace the links below with your real restaurant links.
  - Replace PHONE and WHATSAPP numbers.
  - This file also supports AR/EN language switching.
*/

// 1) UPDATE THESE 🔥
const PHONE_QATAR = "+97455026741";
const WHATSAPP_QATAR = "+97455026741";

// 2) Replace these with YOUR restaurant pages on each app
const ORDER_LINKS = {
  talabat: "https://www.talabat.com/qatar", // Put your restaurant link on Talabat
  snoonu: "https://snoonu.com/",            // Put your restaurant link on Snoonu
  keeta: "https://www.keeta.com/",          // Put your restaurant link on Keeta (if available)
  call: () => `tel:${PHONE_QATAR}`,
  whatsapp: (message) => buildWhatsAppLink(message),
};

const MAPS_LINK = "https://www.google.com/maps"; // Put your Google Maps location link here

// 3) Social media links (optional)
// Replace these with your real pages when ready
const SOCIAL_LINKS = {
  instagram: "https://instagram.com/",
  tiktok: "https://www.tiktok.com/",
  snapchat: "https://www.snapchat.com/"
};

// ------------------------------------------------------------
// Language (AR/EN) content
// Tip: You can edit EN easily without touching Arabic.

const I18N = {
  ar: {
    brand_tag: "شاورما عراقية أصلية في قطر",

    nav_menu: "المنيو",
    nav_best: "الأكثر طلباً",
    nav_gallery: "صور",
    nav_location: "الموقع",
    nav_order_now: "اطلب الآن",
    drawer_title: "القائمة",
    drawer_lang: "اللغة",

    hero_title: "شاورما عراقية أصلية... طازجة وسريعة",
    hero_subtitle: "طعم عراقي حقيقي في قطر. اطلب خلال ثواني عبر Talabat أو Snoonu أو Keeta أو واتساب أو اتصال مباشر.",
    trust_fresh: "✅ طازج يومياً",
    trust_fast: "⚡ توصيل سريع",
    trust_quality: "🔥 جودة ثابتة",
    cta_talabat: "اطلب من Talabat",
    cta_snoonu: "اطلب من Snoonu",
    cta_keeta: "اطلب من Keeta",
    cta_whatsapp: "واتساب سريع",
    cta_call: "اتصال مباشر",
    hero_micro: "* المنيو الكامل سيتم إضافته قريباً. حالياً: اعرض المنتجات واطلب بسهولة.",

    benefits_title: "ليش الناس تختار ALQAS AL IRAQI؟",
    benefits_subtitle: "لأنك تبي طعم ثابت، خدمة سريعة، وطلب سهل بدون تعقيد.",
    benefit_1_title: "طعم عراقي أصيل",
    benefit_1_desc: "تتبيلة متوازنة، شاورما مشوية صح، ونكهة “تردك العراق”.",
    benefit_2_title: "سريع ومريح",
    benefit_2_desc: "اطلب بضغطه: Talabat / Snoonu / Keeta أو واتساب أو اتصال.",
    benefit_3_title: "جودة ثابتة",
    benefit_3_desc: "مكونات موثوقة وتحضير يومي لنتيجة ترضيك كل مرة.",

    menu_title: "المنيو",
    menu_subtitle: "تقدر تبدّل/تضيف الأصناف لاحقاً بسهولة (صور + أسماء + أسعار).",
    item_1_title: "شاورما لحم (سيغنتشر)",
    item_1_desc: "مذاق قوي وتتبيلة عراقية.",
    item_1_price: "QAR —",
    item_2_title: "شاورما دجاج",
    item_2_desc: "طريّة ولذيذة ومناسبة للجميع.",
    item_2_price: "QAR —",
    item_3_title: "كومبو",
    item_3_desc: "شاورما + بطاطس + مشروب.",
    item_3_price: "QAR —",
    menu_cta: "ابي أطلب بسرعة على واتساب",

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

    proof_title: "آراء العملاء",
    proof_subtitle: "حطّوا هنا تقييماتكم من Google أو Talabat لاحقاً.",
    t1: "\"الطعم ممتاز والتوصيل سريع، أنصح فيه!\"",
    t1_by: "— عميل من قطر",
    t2: "\"أفضل شاورما عراقية جربتها.. جودة ثابتة.\"",
    t2_by: "— زبون دائم",
    t3: "\"طلب سهل وخدمة ممتازة.\"",
    t3_by: "— تقييم 5 نجوم",
    trust_1: "⭐ تقييمات العملاء (أضفها لاحقاً)",
    trust_2: "🔒 طلب آمن عبر التطبيقات",
    trust_3: "📞 دعم سريع عبر الاتصال/واتساب",

    gallery_title: "صور",
    gallery_subtitle: "أضف صور منتجات أكثر لاحقاً.",

    location_title: "الموقع",
    location_subtitle: "اضغط لفتح Google Maps.",
    open_maps: "افتح الموقع على Google Maps",

    footer_note: "شاورما عراقية أصلية • طازجة يومياً • اطلب بسهولة",

    follow_us: "تابعنا",

    btn_order: "اطلب الآن",
    btn_whatsapp: "واتساب",
    btn_call: "اتصال",

    bar_talabat: "Talabat",
    bar_snoonu: "Snoonu",
    bar_keeta: "Keeta",
    bar_whatsapp: "WhatsApp",
    bar_call: "Call",

    // WhatsApp message in Arabic
    wa_message: "السلام عليكم، أريد طلب شاورما من ALQAS AL IRAQI"
  },

  en: {
    brand_tag: "Authentic Iraqi Shawarma in Qatar",

    nav_menu: "Menu",
    nav_best: "Bestsellers",
    nav_gallery: "Gallery",
    nav_location: "Location",
    nav_order_now: "Order Now",
    drawer_title: "Menu",
    drawer_lang: "Language",

    hero_title: "Authentic Iraqi Shawarma — Fresh & Fast",
    hero_subtitle: "Real Iraqi flavor in Qatar. Order in seconds via Talabat, Snoonu, Keeta, WhatsApp, or direct call.",
    trust_fresh: "✅ Fresh daily",
    trust_fast: "⚡ Fast delivery",
    trust_quality: "🔥 Consistent quality",
    cta_talabat: "Order on Talabat",
    cta_snoonu: "Order on Snoonu",
    cta_keeta: "Order on Keeta",
    cta_whatsapp: "Quick WhatsApp",
    cta_call: "Direct Call",
    hero_micro: "* Full menu will be added soon. For now: preview items and order easily.",

    benefits_title: "Why people choose ALQAS AL IRAQI",
    benefits_subtitle: "Because you want consistent taste, fast service, and easy ordering.",
    benefit_1_title: "Authentic Iraqi taste",
    benefit_1_desc: "Balanced seasoning, perfectly grilled shawarma, and real flavor.",
    benefit_2_title: "Fast & convenient",
    benefit_2_desc: "One tap order: Talabat / Snoonu / Keeta, or WhatsApp / Call.",
    benefit_3_title: "Consistent quality",
    benefit_3_desc: "Trusted ingredients and fresh prep every day.",

    menu_title: "Menu",
    menu_subtitle: "You can easily update items later (images + names + prices).",
    item_1_title: "Beef Shawarma (Signature)",
    item_1_desc: "Bold flavor with Iraqi seasoning.",
    item_1_price: "QAR —",
    item_2_title: "Chicken Shawarma",
    item_2_desc: "Tender, tasty, and loved by everyone.",
    item_2_price: "QAR —",
    item_3_title: "Combo Meal",
    item_3_desc: "Shawarma + fries + drink.",
    item_3_price: "QAR —",
    menu_cta: "Order fast on WhatsApp",

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

    proof_title: "What customers say",
    proof_subtitle: "Add your real reviews from Google or Talabat later.",
    t1: "\"Amazing taste and fast delivery. Highly recommended!\"",
    t1_by: "— Customer in Qatar",
    t2: "\"Best Iraqi shawarma I’ve tried — consistent quality.\"",
    t2_by: "— Returning customer",
    t3: "\"Easy ordering and great service.\"",
    t3_by: "— 5-star review",
    trust_1: "⭐ Customer reviews (add later)",
    trust_2: "🔒 Secure ordering via apps",
    trust_3: "📞 Quick support by call/WhatsApp",

    gallery_title: "Gallery",
    gallery_subtitle: "Add more product photos later.",

    location_title: "Location",
    location_subtitle: "Tap to open Google Maps.",
    open_maps: "Open in Google Maps",

    footer_note: "Authentic Iraqi Shawarma • Fresh daily • Easy ordering",

    follow_us: "Follow us",

    btn_order: "Order Now",
    btn_whatsapp: "WhatsApp",
    btn_call: "Call",

    bar_talabat: "Talabat",
    bar_snoonu: "Snoonu",
    bar_keeta: "Keeta",
    bar_whatsapp: "WhatsApp",
    bar_call: "Call",

    // WhatsApp message in English
    wa_message: "Hi, I would like to order shawarma from ALQAS AL IRAQI"
  }
};

// ------------------------------------------------------------
// Helpers

function buildWhatsAppLink(message){
  const digits = WHATSAPP_QATAR.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function openOrder(key){
  const val = ORDER_LINKS[key];
  if (!val) return;

  // Resolve function or string
  const url = (typeof val === "function")
    ? (key === "whatsapp" ? val(getWhatsAppMessage()) : val())
    : val;

  // tel: and wa.me should open in the same tab
  if (url.startsWith("tel:") || url.includes("wa.me")) {
    window.location.href = url;
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

// ------------------------------------------------------------
// Language switching

let currentLang = "ar";

function setLanguage(lang){
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem("alqas_lang", lang);

  // Direction + language
  document.documentElement.lang = (lang === "ar") ? "ar" : "en";
  document.documentElement.dir  = (lang === "ar") ? "rtl" : "ltr";

  document.body.classList.toggle("rtl", lang === "ar");
  document.body.classList.toggle("ltr", lang === "en");

  // Buttons active state
  markActiveLangButtons(lang);

  // Apply translations
  applyTranslations();
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

function applyTranslations(){
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
}

function getWhatsAppMessage(){
  return I18N[currentLang]?.wa_message || I18N.ar.wa_message;
}

// Load preferred language
(function initLanguage(){
  const saved = localStorage.getItem("alqas_lang");
  if (saved && I18N[saved]) {
    setLanguage(saved);
    return;
  }
  // Default Arabic (target in Qatar), but you can change to "en" if you want
  setLanguage("ar");
})();

// Language button clicks
document.getElementById("langAR")?.addEventListener("click", () => setLanguage("ar"));
document.getElementById("langEN")?.addEventListener("click", () => setLanguage("en"));
document.getElementById("langARMobile")?.addEventListener("click", () => setLanguage("ar"));
document.getElementById("langENMobile")?.addEventListener("click", () => setLanguage("en"));

// ------------------------------------------------------------
// Quick buttons (hero + order cards + mobile bar)
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

// Update Maps link dynamically
const mapsLink = document.getElementById("mapsLink");
if (mapsLink) mapsLink.href = MAPS_LINK;

// Update social links dynamically (optional)
const igLink = document.getElementById("igLink");
const ttLink = document.getElementById("ttLink");
const scLink = document.getElementById("scLink");

if (igLink) igLink.href = SOCIAL_LINKS.instagram;
if (ttLink) ttLink.href = SOCIAL_LINKS.tiktok;
if (scLink) scLink.href = SOCIAL_LINKS.snapchat;


// ------------------------------------------------------------
// Hamburger / Drawer
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

  setTimeout(() => {
    drawer.hidden = true;
    backdrop.hidden = true;
  }, 220);
}

hamburger?.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  isOpen ? closeDrawer() : openDrawer();
});
backdrop?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

drawer?.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (link) closeDrawer();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

// ------------------------------------------------------------
// Scroll reveal (simple trendy animation)
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

// Optional: hide mobile bar when drawer is open
const mobileBar = document.getElementById("mobileBar");
const obs = new MutationObserver(() => {
  const open = hamburger?.getAttribute("aria-expanded") === "true";
  if (mobileBar) mobileBar.style.transform = open ? "translateY(120%)" : "translateY(0)";
});
if (hamburger) obs.observe(hamburger, { attributes: true, attributeFilter: ["aria-expanded"] });
