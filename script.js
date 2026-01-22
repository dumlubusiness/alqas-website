document.documentElement.classList.add('js');
/* ALQAS website - clean, responsive, and stable
   - Default language: EN (user requested "default language 1")
   - Replace these links later with your real store links (Talabat/Snoonu/Keeta)
*/

const MAPS_LINK = "https://maps.app.goo.gl/EytJS5FhABcwX12D8";
const PHONE_QATAR = "+97455026741"; // <-- replace if needed

const STORE_LINKS = {
  talabat: "https://www.talabat.com/qatar",
  snoonu: "https://snoonu.com/",
  keeta: "https://www.keeta.com/"
};

const I18N = {
  en: {
    brandTitle: "ALQAS AL IRAQI",
    brandSub: "Authentic Iraqi Shawarma in Qatar",
    navMenu: "Menu",
    navPromotions: "Promotions",
    navBestsellers: "Bestsellers",
    navGallery: "Gallery",
    navLocation: "Location",

    heroTitle: "Authentic Iraqi Shawarma — Fresh & Fast",
    heroDesc: "Real Iraqi flavor in Qatar. Order in seconds via apps, WhatsApp, or a quick call — or tap directions on Google Maps.",
    chipFresh: "Fresh daily",
    chipDelivery: "Fast delivery",
    chipQuality: "Consistent quality",

    btnOrderNow: "Order Now",
    btnViewMenu: "View Menu",
    btnPromotions: "Promotions",
    btnFindUs: "Find Us",
    btnOpenMaps: "Open in Google Maps",

    menuPromotionsTitle: "Menu & Promotions",
    menuPromotionsHint: "You can replace items later (photos + names + prices).",

    promoTag1: "Limited time",
    promoTitle1: "Combo Offer",
    promoDesc1: "Add fries + drink with a special price. Replace details later.",
    promoTag2: "New",
    promoTitle2: "Family Meal",
    promoDesc2: "Perfect for sharing. Add real items and pricing later.",
    promoTag3: "Best value",
    promoTitle3: "Lunch Deal",
    promoDesc3: "Quick + affordable. Update the offer when ready.",

    bestsellersTitle: "Bestsellers",
    bestsellersHint: "Customer favorites people reorder again and again.",
    best1Title: "Signature Beef Shawarma",
    best1Desc: "Perfect for bold-flavor lovers.",
    best2Title: "Chicken Shawarma",
    best2Desc: "Light, delicious, and popular.",
    best3Title: "Combo Meal",
    best3Desc: "Best value when you’re hungry.",

    galleryTitle: "Gallery",
    galleryHint: "A few favorites — replace with your real photos anytime.",

    locationTitle: "Location",
    locationHint: "Tap the button to open directions on Google Maps.",
    mapPreviewText: "Open Google Maps to view the exact location.",

    followUs: "Follow us",
    socialSoon: "Social pages coming soon.",

    footerTagline: "Authentic Iraqi Shawarma • Fresh daily • Easy ordering",

    orderTitle: "Choose how to order",
    orderTalabat: "Talabat",
    orderSnoonu: "Snoonu",
    orderKeeta: "Keeta",
    orderWhatsApp: "WhatsApp",
    orderCall: "Call",
    orderSoon: "Link will be added soon",

    menuTitle: "Menu",
  },
  ar: {
    brandTitle: "شاورما قص العراقي",
    brandSub: "شاورما عراقية أصلية في قطر",
    navMenu: "القائمة",
    navPromotions: "العروض",
    navBestsellers: "الأكثر طلباً",
    navGallery: "الصور",
    navLocation: "الموقع",

    heroTitle: "شاورما عراقية أصيلة — طازجة وسريعة",
    heroDesc: "نكهة عراقية حقيقية في قطر. اطلب خلال ثوانٍ عبر التطبيقات أو واتساب أو اتصال سريع — أو افتح الاتجاهات على خرائط Google.",
    chipFresh: "طازج يومياً",
    chipDelivery: "توصيل سريع",
    chipQuality: "جودة ثابتة",

    btnOrderNow: "اطلب الآن",
    btnViewMenu: "عرض القائمة",
    btnPromotions: "العروض",
    btnFindUs: "اعثر علينا",
    btnOpenMaps: "افتح في خرائط Google",

    menuPromotionsTitle: "القائمة والعروض",
    menuPromotionsHint: "يمكنك استبدال العناصر لاحقاً (صور + أسماء + أسعار).",

    promoTag1: "لفترة محدودة",
    promoTitle1: "عرض كومبو",
    promoDesc1: "أضف بطاطس + مشروب بسعر خاص. عدّل التفاصيل لاحقاً.",
    promoTag2: "جديد",
    promoTitle2: "وجبة عائلية",
    promoDesc2: "مناسبة للمشاركة. أضف العناصر والأسعار الحقيقية لاحقاً.",
    promoTag3: "أفضل قيمة",
    promoTitle3: "عرض الغداء",
    promoDesc3: "سريع وسعر مناسب. حدّث العرض عند الجاهزية.",

    bestsellersTitle: "الأكثر طلباً",
    bestsellersHint: "الأصناف المفضلة التي يطلبها الزبائن باستمرار.",
    best1Title: "شاورما لحم سيجنتشر",
    best1Desc: "مناسبة لمحبي النكهة القوية.",
    best2Title: "شاورما دجاج",
    best2Desc: "خفيفة ولذيذة ومحبوبة.",
    best3Title: "وجبة كومبو",
    best3Desc: "أفضل قيمة عندما تكون جائعاً.",

    galleryTitle: "الصور",
    galleryHint: "بعض الصور — يمكنك استبدالها بصورك الحقيقية في أي وقت.",

    locationTitle: "الموقع",
    locationHint: "اضغط على الزر لفتح الاتجاهات في خرائط Google.",
    mapPreviewText: "افتح خرائط Google لمشاهدة الموقع بدقة.",

    followUs: "تابعنا",
    socialSoon: "حسابات التواصل الاجتماعي قريباً.",

    footerTagline: "شاورما عراقية أصيلة • طازج يومياً • طلب سهل",

    orderTitle: "اختر طريقة الطلب",
    orderTalabat: "طلبات",
    orderSnoonu: "سنوونو",
    orderKeeta: "كيتا",
    orderWhatsApp: "واتساب",
    orderCall: "اتصال",
    orderSoon: "سيتم إضافة الرابط قريباً",

    menuTitle: "القائمة",
  }
};

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function showToast(message){
  const toast = $("#toast");
  if(!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=>{ toast.hidden = true; }, 2200);
}

function setMapsLinks(){
  $all(".js-open-maps").forEach(a=>{
    a.href = MAPS_LINK;
  });
}

function setOrderLinks(){
  const tal = $("#orderTalabat");
  const sno = $("#orderSnoonu");
  const kee = $("#orderKeeta");
  const wa = $("#orderWhatsApp");
  const call = $("#orderCall");
  const waNum = $("#waNumber");
  const callNum = $("#callNumber");

  if(tal) tal.href = STORE_LINKS.talabat;
  if(sno) sno.href = STORE_LINKS.snoonu;
  if(kee) kee.href = STORE_LINKS.keeta;
  if(wa) wa.href = `https://wa.me/${PHONE_QATAR.replace("+","")}`;
  if(call) call.href = `tel:${PHONE_QATAR}`;

  if(waNum) waNum.textContent = PHONE_QATAR;
  if(callNum) callNum.textContent = PHONE_QATAR;
}

function applyLanguage(lang){
  const dict = I18N[lang] || I18N.en;
  $all("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key] != null) el.innerHTML = dict[key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // Active state on all language buttons
  const isEn = lang === "en";
  ["#langEN", "#langENMobile"].forEach(sel => { const el = $(sel); if(el) el.classList.toggle("is-active", isEn); });
  ["#langAR", "#langARMobile"].forEach(sel => { const el = $(sel); if(el) el.classList.toggle("is-active", !isEn); });

  localStorage.setItem("alqas_lang", lang);
}

function initLanguage(){
  const stored = localStorage.getItem("alqas_lang");
  const defaultLang = stored || "en"; // user requested default EN
  applyLanguage(defaultLang);

  const bind = (id, lang) => {
    const el = $(id);
    if(!el) return;
    el.addEventListener("click", ()=> applyLanguage(lang));
  };
  bind("#langEN", "en");
  bind("#langAR", "ar");
  bind("#langENMobile", "en");
  bind("#langARMobile", "ar");
}

function openModal(modalId, overlayId){
  const modal = $(modalId);
  const overlay = $(overlayId);
  if(!modal || !overlay) return;
  overlay.hidden = false;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal(modalId, overlayId){
  const modal = $(modalId);
  const overlay = $(overlayId);
  if(!modal || !overlay) return;
  overlay.hidden = true;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function initModals(){
  // Order modal
  $all(".js-order-now").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      openModal("#orderModal", "#orderOverlay");
    });
  });
  const closeOrder = ()=> closeModal("#orderModal", "#orderOverlay");
  $("#orderClose")?.addEventListener("click", closeOrder);
  $("#orderOverlay")?.addEventListener("click", closeOrder);

  // Menu modal
  $all(".js-open-menu").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      openModal("#menuModal", "#menuOverlay");
    });
  });
  const closeMenu = ()=> closeModal("#menuModal", "#menuOverlay");
  $("#menuClose")?.addEventListener("click", closeMenu);
  $("#menuOverlay")?.addEventListener("click", closeMenu);

  // ESC closes
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
      closeOrder();
      closeMenu();
      closeDrawer();
    }
  });
}

function openDrawer(){
  const overlay = $("#drawerOverlay");
  const drawer = $("#drawer");
  const btn = $("#hamburgerBtn");
  if(!overlay || !drawer || !btn) return;
  overlay.hidden = false;
  document.body.classList.add("drawer-open");
  drawer.setAttribute("aria-hidden","false");
  btn.setAttribute("aria-expanded","true");
}

function closeDrawer(){
  const overlay = $("#drawerOverlay");
  const drawer = $("#drawer");
  const btn = $("#hamburgerBtn");
  if(!overlay || !drawer || !btn) return;
  overlay.hidden = true;
  document.body.classList.remove("drawer-open");
  drawer.setAttribute("aria-hidden","true");
  btn.setAttribute("aria-expanded","false");
}

function initDrawer(){
  $("#hamburgerBtn")?.addEventListener("click", openDrawer);
  $("#drawerClose")?.addEventListener("click", closeDrawer);
  $("#drawerOverlay")?.addEventListener("click", closeDrawer);

  // Close drawer when resizing to desktop (prevents desktop weird overlay)
  window.addEventListener("resize", ()=>{
    if(window.innerWidth > 980){
      closeDrawer();
    }
  });
}

function initSmoothScroll(){
  const go = (target)=>{
    const el = document.querySelector(target);
    if(el){
      el.scrollIntoView({behavior:"smooth", block:"start"});
      closeDrawer();
    }
  };

  // elements with data-scroll
  $all(".js-scroll").forEach(el=>{
    el.addEventListener("click", (e)=>{
      const ds = el.getAttribute("data-scroll");
      const href = el.getAttribute("href");
      const target = ds || href;
      if(target && target.startsWith("#")){
        e.preventDefault();
        go(target);
      }
    });
  });
}


function initRipple(){
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (btn.matches('[disabled], .is-disabled')) return;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const cx = (e.clientX ?? (rect.left + rect.width/2));
      const cy = (e.clientY ?? (rect.top + rect.height/2));
      const x = cx - rect.left - size/2;
      const y = cy - rect.top - size/2;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      btn.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 700);
    }, { passive: true });
  });
}

function initReveal(){
  document.querySelectorAll('section, .card').forEach(el => el.classList.add('reveal'));
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


function initSocial(){
  $all(".js-social").forEach(a=>{
    a.addEventListener("click", (e)=>{
      e.preventDefault();
      showToast(document.documentElement.lang === "ar" ? "قريباً" : "Coming soon");
    });
  });
}

function initCarousel(){
  const slides = $all("#heroCarousel .hero-slide");
  const dotsWrap = $("#heroDots");
  if(slides.length === 0 || !dotsWrap) return;

  let idx = 0;
  const dots = slides.map((_, i)=>{
    const b = document.createElement("button");
    b.type = "button";
    b.className = "hero-dot" + (i===0 ? " is-active" : "");
    b.addEventListener("click", ()=>{ set(i); restart(); });
    dotsWrap.appendChild(b);
    return b;
  });

  function set(i){
    idx = (i + slides.length) % slides.length;
    slides.forEach((s, k)=> s.classList.toggle("is-active", k===idx));
    dots.forEach((d, k)=> d.classList.toggle("is-active", k===idx));
  }

  $("#heroPrev")?.addEventListener("click", ()=>{ set(idx-1); restart(); });
  $("#heroNext")?.addEventListener("click", ()=>{ set(idx+1); restart(); });

  let t = null;
  function start(){
    t = setInterval(()=> set(idx+1), 5500);
  }
  function restart(){
    clearInterval(t);
    start();
  }
  start();
}

function init(){
  setMapsLinks();
  setOrderLinks();
  initLanguage();
  initDrawer();
  initSmoothScroll();
  initModals();
  initSocial();
  initCarousel();
  initRipple();
  initReveal();
  // page opening animation
  requestAnimationFrame(() => document.documentElement.classList.add('is-loaded'));

}

document.addEventListener("DOMContentLoaded", init);

window.addEventListener('load', () => document.documentElement.classList.add('is-loaded'));
