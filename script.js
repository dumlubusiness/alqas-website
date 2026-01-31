/* =========================================================
   ALQAS Landing (fixed + rebuilt)
   - Working buttons (drawer, order modal, view menu, lightbox)
   - Responsive (mobile + desktop)
   - No broken iframe (uses Google Maps query embed)
   - Optional AR support with i18n
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // EDIT THESE LINKS
  // -------------------------
  const LINKS = {
    talabat: "https://www.talabat.com/qatar",
    snoonu: "https://snoonu.com/",
    whatsapp: "https://wa.me/97455026741",
    call: "tel:+97455026741",
    maps: "https://goo.gl/maps/q8jZ2XQYp1T2", // replace with your exact pin link
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
    snapchat: "https://www.snapchat.com/"
  };

  // -------------------------
  // SELECTORS
  // -------------------------
  const body = document.body;

  const drawer = document.getElementById("drawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const openDrawerBtn = document.getElementById("openDrawer");
  const closeDrawerBtn = document.getElementById("closeDrawer");

  const orderModal = document.getElementById("orderModal");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  const menuModal = document.getElementById("menuModal");
  const menuImg = document.getElementById("menuImg");
  const menuModalImg = document.getElementById("menuModalImg");

  // Hero (photo / slider)
  const heroPhoto = document.querySelector(".hero-photo");
  const heroSlide = document.getElementById("heroSlide");

  // Order modal links
  const linkTalabat = document.getElementById("linkTalabat");
  const linkSnoonu = document.getElementById("linkSnoonu");
  const linkWhatsApp = document.getElementById("linkWhatsApp");
  const linkCall = document.getElementById("linkCall");

  // -------------------------
  // UTILITIES
  // -------------------------
  const lockScroll = (locked) => {
    body.style.overflow = locked ? "hidden" : "";
  };

  const setHidden = (el, hidden) => {
    if (!el) return;
    el.hidden = hidden;
    el.setAttribute("aria-hidden", hidden ? "true" : "false");
  };

  const closeAll = () => {
    // Drawer
    if (drawer) drawer.classList.remove("is-open");
    if (drawerBackdrop) drawerBackdrop.hidden = true;
    if (openDrawerBtn) openDrawerBtn.setAttribute("aria-expanded", "false");

    // Modals
    setHidden(orderModal, true);
    setHidden(lightbox, true);
    setHidden(menuModal, true);

    lockScroll(false);
  };

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // -------------------------
  // DRAWER
  // -------------------------
  const openDrawer = () => {
    closeAll();
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.add("is-open");
    drawerBackdrop.hidden = false;
    if (openDrawerBtn) openDrawerBtn.setAttribute("aria-expanded", "true");
    lockScroll(true);
  };

  if (openDrawerBtn) openDrawerBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeAll);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeAll);

  document.querySelectorAll(".js-close-drawer").forEach((a) => {
    a.addEventListener("click", () => {
      // allow anchor to scroll, then close
      setTimeout(closeAll, 0);
    });
  });

  // -------------------------
  // ORDER MODAL
  // -------------------------
  const openOrder = (e) => {
    if (e) e.preventDefault();
    closeAll();
    setHidden(orderModal, false);
    lockScroll(true);
  };

  document.querySelectorAll(".js-open-order").forEach((btn) => {
    btn.addEventListener("click", openOrder);
  });
  document.querySelectorAll(".js-close-all").forEach((btn) => {
    btn.addEventListener("click", closeAll);
  });

  // fill order modal links
  if (linkTalabat) linkTalabat.href = LINKS.talabat;
  if (linkSnoonu) linkSnoonu.href = LINKS.snoonu;
  if (linkWhatsApp) linkWhatsApp.href = LINKS.whatsapp;
  if (linkCall) linkCall.href = LINKS.call;

  // Maps button
  document.querySelectorAll(".js-open-maps").forEach((btn) => {
    btn.addEventListener("click", () => window.open(LINKS.maps, "_blank"));
  });

  // Social buttons (in Location section)
  const socialButtons = document.querySelectorAll(".social-btn");
  if (socialButtons.length >= 3) {
    socialButtons[0].href = LINKS.instagram;
    socialButtons[1].href = LINKS.tiktok;
    socialButtons[2].href = LINKS.snapchat;
  }

  // -------------------------
  // VIEW MENU BUTTON
  // -------------------------
  const scrollMenuBtn = document.querySelector(".js-scroll-menu");
  if (scrollMenuBtn) {
    scrollMenuBtn.addEventListener("click", () => {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // -------------------------
  // MENU FULLSCREEN
  // -------------------------
  const openMenuModal = () => {
    if (!menuImg || !menuModalImg) return;
    // load same image
    menuModalImg.src = menuImg.src;
    setHidden(menuModal, false);
    lockScroll(true);
  };

  document.querySelectorAll(".js-menu-modal").forEach((btn) => {
    btn.addEventListener("click", openMenuModal);
  });

  document.querySelectorAll(".js-close-menu").forEach((btn) => {
    btn.addEventListener("click", closeAll);
  });

  // -------------------------
  // LIGHTBOX FOR OFFERS/GALLERY
  // -------------------------
  const openLightbox = (imgSrc) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    setHidden(lightbox, false);
    lockScroll(true);
  };

  document.querySelectorAll(".js-lightbox").forEach((el) => {
    el.addEventListener("click", () => {
      const imgSrc = el.getAttribute("data-img");
      if (imgSrc) openLightbox(imgSrc);
    });
  });

  document.querySelectorAll(".js-close-lightbox").forEach((btn) => {
    btn.addEventListener("click", closeAll);
  });

  // -------------------------
  // CONTACT FORM (WhatsApp message)
  // -------------------------
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const msg = String(fd.get("message") || "").trim();

      const text = `ALQAS Contact فرم\nالاسم: ${name}\nالهاتف: ${phone}\nالرسالة: ${msg}`;
      const url = LINKS.whatsapp + "?text=" + encodeURIComponent(text);
      window.open(url, "_blank");
      contactForm.reset();
    });
  }

  // -------------------------
  // YEAR
  // -------------------------
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // -------------------------
  // i18n (EN/AR)
  // -------------------------
  const i18n = {
    en: {
      tagline: "Premium Iraqi Shawarma",
      navMenu: "Menu",
      navOffers: "Offers",
      navGallery: "Gallery",
      navLocation: "Location",
      navContact: "Contact",
      pill: "Fresh • Fast • Authentic",
      heroTitle: "Authentic Iraqi Flavor — Made Fresh Daily.",
      heroDesc: "The legendary shawarma of Al Wakra. Premium ingredients, generous portions, and fast delivery.",
      btnOrderNow: "Order Now",
      btnOrderDelivery: "Order Delivery",
      btnViewMenu: "View Menu",
      trust: "Open daily • 12:00 PM – 02:00 AM",
      stat1v: "Fast delivery",
      stat1k: "Talabat • Snoonu • WhatsApp",
      stat2v: "Made fresh",
      stat2k: "Daily prep • consistent taste",
      stat3v: "Family-friendly",
      stat3k: "Takeaway • dine-in vibes",
      offersTitle: "Today’s Offers",
      offersDesc: "Tap an offer to view it bigger.",
      offer1t: "Combo Deals",
      offer1d: "Best value meals for lunch & late night.",
      offer2t: "Family Box",
      offer2d: "Perfect for sharing — quick and filling.",
      offer3t: "Weekend Special",
      offer3d: "Limited-time promos — don’t miss out.",
      menuTitle: "Menu",
      menuDesc: "Zoom in to read easily.",
      menuHint: "Tap to open full-screen",
      galleryTitle: "Gallery",
      galleryDesc: "Real photos from our kitchen & customers.",
      locationTitle: "Visit Our Branch",
      locationDesc: "Al Wakra Main Street • Qatar",
      addrLabel: "Address",
      addrValue: "Al Wakra Main Street, Qatar",
      hoursLabel: "Hours",
      hoursValue: "12:00 PM – 02:00 AM",
      btnDirections: "Get Directions",
      socialHint: "Tip: edit social links inside script.js.",
      contactTitle: "Contact",
      contactDesc: "Fast reply on WhatsApp.",
      contactQuick: "Quick Actions",
      btnWhatsApp: "WhatsApp",
      btnCall: "Call",
      contactNote: "Delivery platforms are available from the Order popup.",
      contactFormTitle: "Send a message",
      fName: "Name",
      fPhone: "Phone",
      fMsg: "Message",
      btnSend: "Send",
      formHint: "This form opens WhatsApp with your message (no backend needed).",
      fab: "Order",
      orderTitle: "Order Delivery",
      orderDesc: "Choose your favorite platform.",
      backTop: "Back to top"
    },
    ar: {
      tagline: "شاورما عراقية بريميوم",
      navMenu: "المنيو",
      navOffers: "العروض",
      navGallery: "الصور",
      navLocation: "الموقع",
      navContact: "تواصل",
      pill: "طازج • سريع • أصيل",
      heroTitle: "نكهة عراقية أصيلة — تحضير يومي.",
      heroDesc: "شاورما الوكرة الأسطورية. مكونات ممتازة، كمية مشبعة، وتوصيل سريع.",
      btnOrderNow: "اطلب الآن",
      btnOrderDelivery: "طلب توصيل",
      btnViewMenu: "عرض المنيو",
      trust: "مفتوح يومياً • 12:00 ظهراً – 02:00 صباحاً",
      stat1v: "توصيل سريع",
      stat1k: "طلبات • سنونو • واتساب",
      stat2v: "طازج يومياً",
      stat2k: "تحضير يومي • طعم ثابت",
      stat3v: "مناسب للعائلة",
      stat3k: "سفري • أجواء مريحة",
      offersTitle: "عروض اليوم",
      offersDesc: "اضغط على العرض للتكبير.",
      offer1t: "كومبو",
      offer1d: "أفضل قيمة لوجبات الغداء والليل.",
      offer2t: "بوكس عائلي",
      offer2d: "مناسب للمشاركة — سريع ومشبع.",
      offer3t: "عرض نهاية الأسبوع",
      offer3d: "عروض محدودة — لا تفوتها.",
      menuTitle: "المنيو",
      menuDesc: "كبّر الصورة للقراءة بسهولة.",
      menuHint: "اضغط للعرض بملء الشاشة",
      galleryTitle: "الصور",
      galleryDesc: "صور حقيقية من مطبخنا والعملاء.",
      locationTitle: "زوروا الفرع",
      locationDesc: "شارع الوكرة الرئيسي • قطر",
      addrLabel: "العنوان",
      addrValue: "شارع الوكرة الرئيسي، قطر",
      hoursLabel: "ساعات العمل",
      hoursValue: "12:00 ظهراً – 02:00 صباحاً",
      btnDirections: "الاتجاهات",
      socialHint: "ملاحظة: عدّل روابط السوشيال في script.js.",
      contactTitle: "تواصل معنا",
      contactDesc: "رد سريع على واتساب.",
      contactQuick: "إجراءات سريعة",
      btnWhatsApp: "واتساب",
      btnCall: "اتصال",
      contactNote: "منصات التوصيل متاحة من نافذة الطلب.",
      contactFormTitle: "أرسل رسالة",
      fName: "الاسم",
      fPhone: "رقم الهاتف",
      fMsg: "الرسالة",
      btnSend: "إرسال",
      formHint: "هذا النموذج يفتح واتساب برسالتك (بدون سيرفر).",
      fab: "اطلب",
      orderTitle: "طلب توصيل",
      orderDesc: "اختر منصة الطلب.",
      backTop: "أعلى الصفحة"
    }
  };

  const btnEN = document.getElementById("langEN");
  const btnAR = document.getElementById("langAR");

  const applyLang = (lang) => {
    const dict = i18n[lang] || i18n.en;

    // dir
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    // active state
    if (btnEN) btnEN.classList.toggle("is-active", lang === "en");
    if (btnAR) btnAR.classList.toggle("is-active", lang === "ar");

    // replace text
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // menu image swap (optional)
    if (menuImg) {
      const desired = (lang === "ar") ? "assets/menu-ar.jpg" : "assets/menu-eng.jpg";
      menuImg.src = desired;

      // if menu-ar.jpg doesn't exist, fallback to english
      menuImg.onerror = () => {
        menuImg.src = "assets/menu-eng.jpg";
      };
    }
  };

  if (btnEN) btnEN.addEventListener("click", () => applyLang("en"));
  if (btnAR) btnAR.addEventListener("click", () => applyLang("ar"));

  // default language
  applyLang("en");

  // -------------------------
  // Mobile polish: hide the floating Order button until user scrolls
  // -------------------------
  const fab = document.querySelector(".fab");
  const updateFab = () => {
    if (!fab) return;
    const isMobile = window.matchMedia("(max-width: 780px)").matches;
    if (!isMobile) {
      fab.classList.remove("is-hidden");
      return;
    }
    const show = window.scrollY > 260;
    fab.classList.toggle("is-hidden", !show);
  };

  window.addEventListener("scroll", updateFab, { passive: true });
  window.addEventListener("resize", updateFab);
  updateFab();

  // -------------------------
  // Hero image (keep it simple + stable on all mobiles)
  // Replace the file below with your best product photo.
  // -------------------------
  if (heroSlide) {
    heroSlide.src = "assets/hero-3.jpg";

    // OPTIONAL: turn it into a slider by using an array + interval.
    // const heroImages = ["assets/hero-3.jpg","assets/hero-2.jpg","assets/hero-4.jpg"]; 
    // (Ask me and I'll enable the slider cleanly.)
  }

  // -------------------------
  // Reveal on scroll
  // -------------------------
  const revealItems = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-in");
    });
  }, { threshold: 0.12 });

  revealItems.forEach((el) => io.observe(el));

  // -------------------------
  // Ripple effect
  // -------------------------
  const addRipple = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 560);
  };

  document.querySelectorAll("[data-ripple]").forEach((el) => {
    el.addEventListener("click", addRipple);
  });
});
