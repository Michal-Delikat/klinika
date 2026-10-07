class TopBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="bg-blue-700 text-white py-2 px-4">
                <div class="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <div class="flex flex-wrap gap-x-4 gap-y-1">
                        <span class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (13) 433 23 00
                        </span>
                        <span class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            537 277 266
                        </span>
                    </div>
                    <div class="hidden md:block">
                        Poniedziałek - Piątek: 8:00 - 18:00
                    </div>
                </div>
            </div>
        `;
    }
}

class MainNav extends HTMLElement {
    connectedCallback() {
        // Detect if we are in a subdirectory to adjust links
        const isSubdir = window.location.pathname.includes('/specjalnosci/');
        const rootPrefix = isSubdir ? '../' : '';
        
        this.innerHTML = `
            <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-4">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <a href="${rootPrefix}index.html" class="flex items-center gap-3">
                            <img src="${rootPrefix}assets/images/logo.png" alt="MT Medic Logo" class="h-16 w-auto">
                            <span class="font-light text-2xl tracking-tighter text-slate-900 scale-y-110 origin-bottom">MT Medic</span>
                        </a>
                    </div>
                    <div class="hidden lg:flex items-center gap-6 font-medium text-slate-600">
                        <a href="${rootPrefix}onas.html" class="hover:text-premium-accent transition">O nas</a>
                        <a href="${rootPrefix}index.html#specjalnosci-list" class="hover:text-premium-accent transition">Specjalności</a>
                        <a href="${rootPrefix}index.html#wyroby" class="hover:text-premium-accent transition">Wyroby Medyczne</a>
                        <a href="${rootPrefix}index.html#stomatologia" class="hover:text-premium-accent transition">Stomatologia</a>
                        <a href="https://www.wyniki-dilab.com.pl/" target="_blank" class="hover:text-premium-accent transition">Punkt pobrań</a>
                        <a href="${rootPrefix}index.html#kontakt" class="bg-premium-accent text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition">Kontakt</a>
                    </div>
                    <button id="mobile-menu-button" class="lg:hidden p-2 text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 font-medium text-slate-600 shadow-xl">
                    <a href="${rootPrefix}onas.html" class="hover:text-premium-accent transition">O nas</a>
                    <a href="${rootPrefix}index.html#specjalnosci-list" class="hover:text-premium-accent transition">Specjalności</a>
                    <a href="${rootPrefix}index.html#wyroby" class="hover:text-premium-accent transition">Wyroby Medyczne</a>
                    <a href="${rootPrefix}index.html#stomatologia" class="hover:text-premium-accent transition">Stomatologia</a>
                    <a href="https://www.wyniki-dilab.com.pl/" target="_blank" class="hover:text-premium-accent transition">Punkt pobrań</a>
                    <a href="${rootPrefix}index.html#kontakt" class="bg-premium-accent text-white px-4 py-2 rounded-full text-center hover:bg-opacity-90 transition">Kontakt</a>
                </div>
            </nav>
        `;

        const btn = this.querySelector('#mobile-menu-button');
        const menu = this.querySelector('#mobile-menu');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

customElements.define('top-bar', TopBar);
customElements.define('main-nav', MainNav);

class MainFooter extends HTMLElement {
    connectedCallback() {
        const isSubdir = window.location.pathname.includes('/specjalnosci/');
        const rootPrefix = isSubdir ? '../' : '';
        
        this.innerHTML = `
            <footer id="kontakt" class="bg-premium-dark text-white lg:pt-24 lg:pb-12 px-4 py-12">
                <div class="max-w-7xl mx-auto">
                    <div class="grid md:grid-cols-3 gap-12 mb-16">
                        <div>
                            <h4 class="text-lg font-bold mb-6">Kontakt</h4>
                            <ul class="space-y-4 text-slate-400">
                                <li class="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-premium-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    ul. Korczyńska 43, 38-400 Krosno
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-premium-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    (13) 433 23 00 / 537 277 266
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-premium-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    kontakt@mtmedic.pl
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold mb-6">Szybkie linki</h4>
                            <ul class="space-y-4 text-slate-400">
                                <li><a href="#" class="hover:text-white transition">Polityka prywatności</a></li>
                                <li><a href="#" class="hover:text-white transition">Standardy ochrony dzieci</a></li>
                                <li><a href="#" class="hover:text-white transition">Odbiór wyników badań</a></li>
                                <li><a href="${rootPrefix}index.html#wyroby" class="hover:text-white transition">Wyroby medyczne</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold mb-6">Zewnętrzne linki</h4>
                            <ul class="space-y-4 text-slate-400">
                                <li><a href="#" class="hover:text-white transition">Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <p>© 2026 MT MEDIC. Wszelkie prawa zastrzeżone. Kopiowanie treści zabronione.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('main-footer', MainFooter);

class DoctorCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name');
        const specialty = this.getAttribute('specialty');
        const image = this.getAttribute('image');

        this.innerHTML = `
            <div class="bg-white p-3 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition flex items-center gap-6">
                <div class="w-32 h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-100 flex items-center justify-center relative">
                    <img src="${image}" alt="${name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <span class="absolute inset-0 hidden items-center justify-center text-slate-400 font-medium italic">Zdjęcie</span>
                </div>
                <div>
                    <h3 class="text-lg font-medium text-slate-900">${name}</h3>
                    <p class="text-premium-accent font-medium">${specialty}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('doctor-card', DoctorCard);

