/* Shared page behaviour for Damodar Academy */
(function () {
  "use strict";
  const A = window.DamodarAssets || {};
  const $ = (s, root=document) => root.querySelector(s);

  document.querySelectorAll("[data-setting='location']").forEach(el => {
    if (A.location) el.textContent = A.location;
  });
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const menu = $("#menuToggle");
  const nav = $("#navLinks");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("show");
      menu.setAttribute("aria-expanded", String(open));
      menu.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("show")));
  }

  const phoneLink = $("[data-phone-link]");
  if (phoneLink && A.phone1) phoneLink.href = "tel:" + A.phone1;

  document.querySelectorAll("[data-social]").forEach(a => {
    const url = A.social && A.social[a.dataset.social];
    if (url) { a.href = url; a.hidden = false; a.target = "_blank"; a.rel = "noopener"; }
  });

  const wm = $("[data-watermark]");
  if (wm && A.watermark && A.watermark.enabled) {
    wm.innerHTML = (A.watermark.text || "Designed by Shankar Singh Rajput") +
      " <strong>" + (A.watermark.subtext || "Under Along Digital") + "</strong>";
  } else if (wm) wm.hidden = true;

  const hero = $(".hero-visual");
  if (hero && A.photos && A.photos.hero) {
    hero.style.backgroundImage = "linear-gradient(145deg,rgba(23,43,80,.78),rgba(49,91,155,.55)),url('" + A.photos.hero + "')";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
  }

  document.querySelectorAll("[data-gallery-image]").forEach(box => {
    const key = box.dataset.galleryImage;
    const url = A.photos && A.photos[key];
    if (url) {
      box.style.backgroundImage = "url('" + url + "')";
      box.style.color = "#fff";
    }
    if (A.watermark && A.watermark.enabled && A.watermark.galleryImages) {
      const mark = document.createElement("small");
      mark.className = "image-watermark";
      mark.textContent = "Designed by Shankar Singh Rajput • Along Digital";
      box.appendChild(mark);
    }
  });

  const phone = A.phone1 || "";
  const phone2 = A.phone2 || "";
  const contactPhone = $("#contactPhone");
  if (contactPhone) contactPhone.textContent = [phone, phone2].filter(Boolean).join(" / ") || "Add your phone number";
  const contactEmail = $("#contactEmail");
  if (contactEmail) contactEmail.textContent = A.email || "Add email address";

  const waButton = $("#whatsappButton");
  if (waButton && A.whatsapp) waButton.href = "https://wa.me/" + A.whatsapp;

  const form = $("#enquiryForm");
  if (form) {
    const params = new URLSearchParams(location.search);
    const requestedCourse = params.get("course");
    const select = $("#courseSelect");
    if (requestedCourse && select) {
      const match = Array.from(select.options).find(o =>
        o.value.toLowerCase().includes(requestedCourse.toLowerCase()) ||
        requestedCourse.toLowerCase().includes(o.value.toLowerCase())
      );
      if (match) select.value = match.value;
      else if (select.querySelector('option[value="Other Enquiry"]')) select.value = "Other Enquiry";
    }
    form.addEventListener("submit", event => {
      event.preventDefault();
      const name = $("#studentName").value.trim();
      const mobile = $("#studentPhone").value.trim();
      const course = $("#courseSelect").value;
      const studentClass = $("#studentClass").value.trim();
      const message = $("#studentMessage").value.trim();
      if (!name || !mobile || !course) { alert("Please fill all required fields."); return; }
      if (!A.whatsapp) { alert("Please add the academy WhatsApp number in assets.js first."); return; }
      const text = "New Enquiry - Damodar Academy & Tuitions\n\nName: " + name +
        "\nMobile: " + mobile + "\nCourse: " + course +
        "\nCurrent Class: " + studentClass + "\nMessage: " + message;
      window.open("https://wa.me/" + A.whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    });
  }
})();