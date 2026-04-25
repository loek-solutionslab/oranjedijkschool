/**
 * Renders the shared announcement bar, nav and footer.
 * Each page mounts: <div data-layout-top></div> at top and <footer data-layout-footer></footer> at bottom.
 */

const LOGO = "https://static.wixstatic.com/media/f693eb_08dc3ad67a2c43b09f5db3c0a22611cd~mv2.jpg/v1/fill/w_194,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_OranjeDijkschool.jpg";

const NAV = [
  { label: "Onze school", href: "/pages/onze-school.html" },
  { label: "Docenten", href: "/pages/docenten.html" },
  { label: "Lesinhoud", href: "/pages/lesinhoud.html" },
  { label: "Locaties", href: "/pages/locaties.html" },
  { label: "Voor ouders", href: "/pages/voor-ouders.html" },
  { label: "Contact", href: "/pages/contact.html" },
];

function announcementBar(): string {
  return `
    <a href="/pages/solutionslab.html" class="block bg-black text-white text-center text-[13px] sm:text-sm py-2.5 px-4 hover:bg-zinc-900 transition group" style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; letter-spacing: -0.01em;">
      <span class="inline-flex items-center gap-2 flex-wrap justify-center">
        <span class="text-white/80">This is a demo site built by</span>
        <span class="inline-flex items-center gap-1.5 font-semibold">
          <span class="w-2 h-2 rounded-full bg-[#FFD500]"></span>
          <span class="lowercase">solutions lab</span>
        </span>
        <span class="text-[#FFD500] group-hover:translate-x-1 transition inline-block">→ see the full analysis</span>
      </span>
    </a>
  `;
}

function navHTML(currentPath: string): string {
  const isHome = currentPath === "/" || currentPath.endsWith("/index.html");
  return `
    <nav class="bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80 sticky top-0 z-40 border-b border-orange-100/60" style="background-color: rgba(255, 248, 240, 0.92);">
      <div class="container-page flex items-center justify-between h-20">
        <a href="/" class="flex items-center gap-3 group" aria-label="Oranje-Dijkschool home">
          <img src="${LOGO}" alt="Oranje-Dijkschool" class="h-11 w-auto rounded-md" />
          <div class="hidden sm:block leading-tight">
            <div class="font-display font-bold text-canal-900 text-base">Oranje-Dijkschool</div>
            <div class="text-[11px] uppercase tracking-[0.16em] text-orange-700 font-semibold">Nederlands in Catalunya</div>
          </div>
        </a>

        <div class="hidden lg:flex items-center gap-7">
          ${NAV.map(n => `
            <a href="${n.href}" class="text-[15px] font-medium text-canal-800 hover:text-orange-600 transition relative group">
              ${n.label}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all"></span>
            </a>
          `).join("")}
        </div>

        <div class="flex items-center gap-3">
          <a href="/pages/voor-ouders.html#aanmelden" class="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5">
            Meld uw kind aan
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg hover:bg-orange-100 transition" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="hidden lg:hidden border-t border-orange-100 bg-cream">
        <div class="container-page py-4 flex flex-col gap-1">
          ${NAV.map(n => `
            <a href="${n.href}" class="py-3 px-3 rounded-lg text-canal-900 font-medium hover:bg-orange-100 transition">${n.label}</a>
          `).join("")}
          <a href="/pages/voor-ouders.html#aanmelden" class="mt-3 btn-primary justify-center">Meld uw kind aan</a>
        </div>
      </div>
    </nav>
    ${!isHome ? '' : ''}
  `;
}

function footerHTML(): string {
  return `
    <footer class="bg-canal-900 text-white relative overflow-hidden">
      <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-tulip-500/10 blur-3xl"></div>

      <div class="container-page py-20 relative">
        <div class="tulip-divider mb-14 opacity-70"></div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div class="lg:col-span-2 max-w-md">
            <div class="flex items-center gap-3 mb-5">
              <img src="${LOGO}" alt="" class="h-12 rounded-md bg-white/95 p-1" />
              <div class="leading-tight">
                <div class="font-display font-bold text-lg">Oranje-Dijkschool</div>
                <div class="text-xs uppercase tracking-[0.16em] text-orange-300">Sinds 1992 · 30 jaar</div>
              </div>
            </div>
            <p class="text-canal-100/80 leading-relaxed mb-6">
              Een stukje Nederlandse en Vlaamse cultuur in Catalunya. Naschools NTC-onderwijs voor kinderen van 4 tot 18 jaar in Barcelona, Sant Cugat en Castelldefels.
            </p>
            <div class="flex gap-3">
              <a href="https://www.facebook.com/oranjedijkschool" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg>
              </a>
              <a href="https://instagram.com/oranjedijkschool" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.7.9 1 1.5.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.5-.5.5-.9.7-1.5 1-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-.9-.5-.5-.7-.9-1-1.5-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.5.5-.5.9-.7 1.5-1 .4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1Zm0 2c-3.2 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.5-.1-4.7-.1Zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.6-2.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-display font-bold mb-4 text-orange-300 uppercase text-xs tracking-[0.16em]">Navigatie</h4>
            <ul class="space-y-2.5">
              ${NAV.map(n => `<li><a href="${n.href}" class="text-canal-100/80 hover:text-orange-300 transition text-sm">${n.label}</a></li>`).join("")}
            </ul>
          </div>

          <div>
            <h4 class="font-display font-bold mb-4 text-orange-300 uppercase text-xs tracking-[0.16em]">Contact</h4>
            <ul class="space-y-3 text-sm text-canal-100/80">
              <li><a href="mailto:info@oranjedijkschool.com" class="hover:text-orange-300 transition flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m4 4 8 8 8-8"/></svg>
                info@oranjedijkschool.com
              </a></li>
              <li><a href="tel:+34660178675" class="hover:text-orange-300 transition flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +34 660 178 675
              </a></li>
              <li class="pt-2">
                <span class="text-canal-100/60 text-xs">Schoolleider:</span><br>
                <span class="font-medium text-white">Monique Verwoert</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center text-xs text-canal-100/50">
          <div>© 2026 Stichting Nederlandse Taal en Cultuur · Oranje-Dijkschool</div>
          <div class="flex gap-5 items-center">
            <span>Onder toezicht NL Onderwijsinspectie</span>
            <span class="hidden sm:inline">·</span>
            <span>Geaccrediteerd door NOB</span>
            <span class="hidden sm:inline">·</span>
            <a href="/pages/solutionslab.html" class="hover:text-orange-300 transition">Site analyse door Solutions Lab</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function mountLayout(): void {
  const top = document.querySelector("[data-layout-top]");
  const footer = document.querySelector("[data-layout-footer]");
  const path = window.location.pathname;
  const isSL = path.endsWith("solutionslab.html");

  if (top && !isSL) {
    top.innerHTML = announcementBar() + navHTML(path);
  } else if (top && isSL) {
    // SL page only gets a slim header — no announcement bar (we are the bar)
    top.innerHTML = `
      <header class="bg-[#0B0E1A] border-b border-white/5">
        <div class="container-page py-5 flex items-center justify-between">
          <a href="/pages/solutionslab.html" class="flex items-center gap-2 sl-bricolage text-white text-lg lowercase font-semibold">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FFD500]"></span>
            solutions lab
          </a>
          <a href="/" class="text-xs text-white/60 hover:text-white transition flex items-center gap-2">
            ← back to oranjedijkschool.com
          </a>
        </div>
      </header>
    `;
  }

  if (footer && !isSL) {
    footer.innerHTML = footerHTML();
  } else if (footer && isSL) {
    footer.innerHTML = `
      <footer class="bg-[#0B0E1A] border-t border-white/5 py-10">
        <div class="container-page flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-white/40 sl-bricolage">
          <div>● solutions lab — solutionslab.nl</div>
          <a href="mailto:loek@solutionslab.nl" class="hover:text-[#FFD500] transition">loek@solutionslab.nl</a>
        </div>
      </footer>
    `;
  }

  // Mobile menu toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  }
}
