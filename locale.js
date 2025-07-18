const translations = {
  ar: {
    hero_title: "مرحبا بكم في ورشة إلكترونيك مدنين",
    hero_text: "نقدم خدمات إصلاح وبيع قطع إلكترونية عالية الجودة ومناسبة لكلّ مشروع.",
    btn_services: "خدماتنا",
    btn_whatsapp: "واتساب",
    our_services: "خدماتنا",
    srv_repair: "إصلاح الأجهزة",
    srv_repair_text: "تشخيص دقيق وسريع لجميع أنواع الأجهزة.",
    srv_sales: "بيع قطع الغيار",
    srv_sales_text: "قطع ذات جودة عالية وبأسعار مناسبة.",
    srv_embedded: "أنظمة مضمنة",
    srv_embedded_text: "تصميم متكامل لمشاريعك الإلكترونية."
  },
  en: {
    hero_title: "Welcome to Atelier Électronique Medenine",
    hero_text: "We offer repair services & sale of high‑quality electronic parts.",
    btn_services: "Our Services",
    btn_whatsapp: "WhatsApp",
    our_services: "Our Services",
    srv_repair: "Device Repair",
    srv_repair_text: "Quick and accurate diagnosis for all devices.",
    srv_sales: "Spare Parts",
    srv_sales_text: "Quality parts at affordable prices.",
    srv_embedded: "Embedded Systems",
    srv_embedded_text: "Integrated design for your electronic projects."
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("lang-toggle");
  const userLang = localStorage.getItem("lang") || navigator.language.split("-")[0] || "ar";
  const t = (key) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => el.textContent = translations[lang][key]);
  };
  let lang = userLang in translations ? userLang : "ar";
  Object.keys(translations[lang]).forEach(t);
  btn.textContent = lang === "ar" ? "EN" : "AR";
  btn.onclick = () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("lang", lang);
    Object.keys(translations[lang]).forEach(t);
    btn.textContent = lang === "ar" ? "EN" : "AR";
  }
});
