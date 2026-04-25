import "../styles/main.css";
import { mountLayout } from "./layout";

mountLayout();

// Cookie consent (simple, dismissible)
(() => {
  if (typeof window === "undefined") return;
  const KEY = "ods-cookie-ok";
  if (localStorage.getItem(KEY)) return;
  const el = document.createElement("div");
  el.innerHTML = `
    <div class="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-50 card-warm fade-up">
      <div class="text-sm text-canal-800 mb-3">Wij gebruiken alleen functionele en analytische cookies om de site te verbeteren. Geen tracking voor derden.</div>
      <div class="flex gap-2">
        <button data-cookie-ok class="btn-primary text-xs py-2 px-4">OK</button>
        <a href="/pages/contact.html" class="btn-ghost text-xs">Meer info</a>
      </div>
    </div>
  `;
  document.body.appendChild(el);
  el.querySelector("[data-cookie-ok]")?.addEventListener("click", () => {
    localStorage.setItem(KEY, "1");
    el.remove();
  });
})();

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("fade-up");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

// Contact form (mailto fallback)
const form = document.querySelector("[data-contact-form]") as HTMLFormElement | null;
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Aanmelding/vraag — ${data.get("naam")}`);
    const body = encodeURIComponent(
      `Naam: ${data.get("naam")}\n` +
      `Email: ${data.get("email")}\n` +
      `Telefoon: ${data.get("telefoon") ?? "—"}\n` +
      `Locatie voorkeur: ${data.get("locatie") ?? "—"}\n` +
      `Leeftijd kind: ${data.get("leeftijd") ?? "—"}\n\n` +
      `Bericht:\n${data.get("bericht")}`
    );
    window.location.href = `mailto:info@oranjedijkschool.com?subject=${subject}&body=${body}`;
  });
}
