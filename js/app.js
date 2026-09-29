/**
 * Soluciones VC - Vanina Cabrera Soluciones Digitales
 * Lógica interactiva de catálogo, cotizador, modal y WhatsApp
 */

// Teléfono de contacto oficial y correo de Vanina Cabrera
const WHATSAPP_PHONE = "5491134352310"; // 11 3435-2310
const CONTACT_EMAIL = "sistemapospro1@gmail.com";

// Base de datos de productos y soluciones digitales
const PRODUCTS_DATA = [
  {
    id: "tienda-online",
    name: "Tienda Online (E-Commerce)",
    shortDesc: "Tu propio ecommerce completo, fácil de usar y administrar. Vendé más todos los días.",
    category: "ecommerce",
    badge: "Más Vendido",
    icon: "fa-shopping-cart",
    gradient: "from-indigo-600 to-purple-600",
    flyerImage: "assets/img/volante-tienda-online.jpg",
    demoUrl: "https://tienda-online-loreley.vercel.app",
    demoName: "Tienda Loreley (Moda & Ropa)",
    features: [
      "Catálogo con fotos, descripciones, precios, talles, colores y stock",
      "Carrito de compras ágil y fácil de usar para el cliente",
      "Panel de Administrador intuitivo para gestionar productos y pedidos",
      "Control de inventario con variantes completas",
      "Generador de ofertas especiales y cupones de descuento",
      "Pedidos directo al WhatsApp del negocio para cerrar ventas",
      "100% adaptada a celular, rápida, moderna y segura"
    ],
    highlights: ["Adaptada a celular", "Segura y confiable", "Rápida y optimizada", "Diseño personalizado"],
    whatsappText: "¡Hola Vanina! Me interesa consultar por la Tienda Online para mi negocio. ¿Me mostrás una demo sin compromiso?"
  },
  {
    id: "control-stock",
    name: "Control de Stock & Inventario",
    shortDesc: "Simple • Rápido • Eficiente. Tené el control total de tus productos y compras.",
    category: "gestion",
    badge: "Alta Demanda",
    icon: "fa-boxes-stacked",
    gradient: "from-blue-600 to-indigo-700",
    flyerImage: "assets/img/volante-control-stock.jpg",
    features: [
      "Gestión de productos con códigos, categorías, precios y proveedores",
      "Control de stock en tiempo real desde PC, tablet o celular",
      "Alertas automáticas de stock bajo y sin stock para no perder ventas",
      "Registro de movimientos: entradas, salidas y ajustes de mercadería",
      "Módulo de compras y proveedores centralizado",
      "Reportes y estadísticas para analizar ganancias y tomar mejores decisiones",
      "Menos pérdidas por faltantes o vencimientos y ahorro de horas de conteo"
    ],
    highlights: ["Menos pérdidas", "Ahorrá tiempo", "Compras inteligentes", "Reportes claros"],
    whatsappText: "¡Hola Vanina! Me gustaría conocer más sobre el Sistema de Control de Stock. ¿Me mostrás una demo de cómo funciona?"
  },
  {
    id: "app-turnos",
    name: "App para Turnos y Reservas",
    shortDesc: "Especial para peluquerías, salones de belleza, barberías y estética. En la palma de tu mano.",
    category: "turnos",
    badge: "Favorito Salones",
    icon: "fa-calendar-check",
    gradient: "from-pink-500 to-rose-600",
    flyerImage: "assets/img/volante-turnos-peluqueria.jpg",
    demoUrl: "https://cabreraventasvvc-cyber.github.io/estilo-belleza/index.html",
    demoName: "Estilo & Belleza (Peluquería)",
    features: [
      "Reservas online 24/7 sin llamadas ni mensajes molestos a cualquier hora",
      "Los clientes eligen servicio, profesional, día y horario disponible",
      "Gestión de servicios con precios y tiempos de duración",
      "Gestión de agenda por cada profesional de tu equipo",
      "Recordatorios automáticos por WhatsApp: ¡menos ausencias y olvidos!",
      "Agenda inteligente con vista diaria, semanal y mensual ordenada",
      "Clientes felices y negocio mucho más organizado"
    ],
    highlights: ["Reservas 24/7", "Recordatorios automáticos", "Menos llamadas", "Fidelizá clientes"],
    whatsappText: "¡Hola Vanina! Vi el volante de la App para Turnos y Reservas de peluquerías y salones. ¿Podemos coordinar una demo?"
  },
  {
    id: "apps-comercios",
    name: "Apps para Comercios (PWA)",
    shortDesc: "Aplicaciones web ligeras para verdulerías, showrooms, almacenes y emprendimientos.",
    category: "ecommerce",
    badge: "Ágil & Liviana",
    icon: "fa-mobile-screen-button",
    gradient: "from-emerald-600 to-teal-700",
    flyerImage: "assets/img/volante-soluciones-digitales.jpg",
    demoUrl: "https://cabreraventasvvc-cyber.github.io/verduleria/",
    demoName: "Verdulería Don José (PWA)",
    features: [
      "Catálogo interactivo con ofertas del día y precios actualizados",
      "Carrito express ideal para compras rápidas cotidianas",
      "Recepción directa del pedido listo en tu WhatsApp",
      "Se puede instalar en el celular del cliente como una app nativa",
      "Sin cobros de comisiones excesivas por cada venta"
    ],
    highlights: ["Instalable en celular", "Sin comisiones", "Pedidos por WhatsApp", "Super rápida"],
    whatsappText: "¡Hola Vanina! Me gustaría consultar por una App para mi comercio o emprendimiento. ¿Podrías darme más detalles?"
  },
  {
    id: "pos-pro",
    name: "Sistema POS Pro (Punto de Venta)",
    shortDesc: "Ventas rápidas en mostrador, apertura/cierre de caja, tickets y control comercial.",
    category: "gestion",
    badge: "Comercial",
    icon: "fa-cash-register",
    gradient: "from-cyan-600 to-blue-700",
    flyerImage: "assets/img/volante-soluciones-digitales.jpg",
    demoUrl: "https://nocerabirra.vercel.app/",
    demoName: "Nocera Birra (Distribuidora)",
    features: [
      "Ventas ágiles de mostrador para atender clientes sin demoras",
      "Control estricto de caja, arqueos y cierres de turno",
      "Emisión e impresión de tickets de venta para tus clientes",
      "Control de clientes y cuentas corrientes",
      "Historial completo de ventas y reportes de facturación diarios"
    ],
    highlights: ["Ventas rápidas", "Caja y cierres", "Tickets de venta", "Estadísticas"],
    whatsappText: "¡Hola Vanina! Quiero información y asesoramiento sobre el Sistema POS Pro para punto de venta y caja."
  },
  {
    id: "diseno-web",
    name: "Diseño Web & Landing Pages",
    shortDesc: "Páginas web modernas, veloces y adaptadas a celular para comercios y profesionales.",
    category: "diseno",
    badge: "A Medida",
    icon: "fa-globe",
    gradient: "from-purple-600 to-indigo-800",
    flyerImage: "assets/img/volante-soluciones-digitales.jpg",
    demoUrl: "https://tribu-de-viajeras.vercel.app/",
    demoName: "Rutas del Alma (Turismo & CRM)",
    features: [
      "Sitios institucionales y landing pages enfocadas en generar consultas y ventas",
      "Diseño responsive impecable para celulares, tablets y computadoras",
      "Optimización SEO y velocidad de carga ultra rápida",
      "Botones de acción directa a WhatsApp y redes sociales",
      "Transmite confianza y profesionalismo a nuevos clientes"
    ],
    highlights: ["100% a medida", "Ultra rápida", "Botones WhatsApp", "Diseño moderno"],
    whatsappText: "¡Hola Vanina! Necesito una página web o landing page profesional para mi proyecto. ¿Me pasás opciones?"
  },
  {
    id: "formularios-auto",
    name: "Formularios y Automatizaciones",
    shortDesc: "Respuestas automáticas, registros de clientes y generación automática de PDFs.",
    category: "diseno",
    badge: "Productividad",
    icon: "fa-file-signature",
    gradient: "from-amber-600 to-orange-600",
    flyerImage: "assets/img/volante-soluciones-digitales.jpg",
    features: [
      "Formularios personalizados para presupuestos, pedidos o reclamos",
      "Envío automático de confirmaciones y correos al instante",
      "Generación automática de presupuestos o comprobantes en PDF",
      "Integración con bases de datos y hojas de cálculo",
      "Ahorro de horas de trabajo administrativo repetitivo"
    ],
    highlights: ["Generación de PDF", "Automatización", "Ahorro de tiempo", "Cero errores"],
    whatsappText: "¡Hola Vanina! Me interesa automatizar procesos de mi negocio con formularios y PDFs automáticos. ¿Cómo trabajamos?"
  },
  {
    id: "diseno-folleteria",
    name: "Diseño Digital & Folletería",
    shortDesc: "Flyers, folletos publicitarios, catálogos digitales interactivos y piezas para redes.",
    category: "diseno",
    badge: "Creativo",
    icon: "fa-palette",
    gradient: "from-rose-500 to-purple-600",
    flyerImage: "assets/img/volante-soluciones-digitales.jpg",
    features: [
      "Flyers y folletos publicitarios digitales e impresos de alto impacto",
      "Catálogos digitales en PDF listos para enviar por WhatsApp",
      "Piezas gráficas para Instagram, historias y banners publicitarios",
      "Tarjetas de presentación digitales y físicas",
      "Diseños profesionales que comunican el valor real de tu negocio"
    ],
    highlights: ["Catálogos PDF", "Flyers para redes", "Calidad imprenta", "Identidad visual"],
    whatsappText: "¡Hola Vanina! Quisiera consultar por diseño de volantes, catálogos digitales o contenido gráfico para mi marca."
  }
];

// Base de datos de Demos en Vivo diseñadas por Vanina Cabrera
const DEMOS_DATA = [
  {
    id: "demo-loreley",
    title: "LORELEY Indumentaria",
    subtitle: "Tienda Online E-Commerce & Moda",
    category: "ecommerce",
    badge: "E-Commerce",
    url: "https://tienda-online-loreley.vercel.app",
    displayUrl: "tienda-online-loreley.vercel.app",
    icon: "fa-bag-shopping",
    gradient: "from-zinc-900 via-stone-800 to-amber-700",
    description: "Tienda de indumentaria completa: catálogo dinámico con fotos y precios, filtros de talles y colores, carrito de compras, pedidos directos por WhatsApp y acceso a panel administrador.",
    tags: ["Carrito WhatsApp", "Variantes Talle/Color", "Panel Admin", "100% Celular"],
    whatsappText: "¡Hola Vanina! Estuve viendo la demo de *LORELEY Indumentaria* (https://tienda-online-loreley.vercel.app) y me gustaría una tienda online así para mi negocio. ¿Podemos coordinar?"
  },
  {
    id: "demo-turnos",
    title: "Estilo & Belleza",
    subtitle: "App para Turnos y Reservas Online",
    category: "turnos",
    badge: "Turnos 24/7",
    url: "https://cabreraventasvvc-cyber.github.io/estilo-belleza/index.html",
    displayUrl: "estilo-belleza.app",
    icon: "fa-calendar-check",
    gradient: "from-pink-600 via-rose-600 to-purple-700",
    description: "Sistema de reservas y agenda online 24/7 para salones y peluquerías: selección de servicio, profesional estilista, fecha/hora disponible en calendario y panel de administración.",
    tags: ["Reservas 24/7", "Por Profesional", "Sin Llamadas", "Panel Admin"],
    whatsappText: "¡Hola Vanina! Vi la demo de *Estilo & Belleza* para turnos online (https://cabreraventasvvc-cyber.github.io/estilo-belleza/index.html) y me interesa implementarlo en mi salón. ¿Cómo hacemos?"
  },
  {
    id: "demo-verduleria",
    title: "Verdulería Don José",
    subtitle: "Web App PWA para Comercios",
    category: "ecommerce",
    badge: "App Instalable",
    url: "https://cabreraventasvvc-cyber.github.io/verduleria/",
    displayUrl: "verduleria-donjose.pwa",
    icon: "fa-carrot",
    gradient: "from-emerald-600 via-teal-600 to-green-700",
    description: "Web App progresiva e instalable en celular para comercios de barrio y cercanía: catálogo con ofertas del día, carrito express y envío automático de pedidos detallados a WhatsApp.",
    tags: ["Instalable PWA", "Ofertas del Día", "Cero Comisiones", "Pedidos WhatsApp"],
    whatsappText: "¡Hola Vanina! Probé la demo de *Verdulería Don José* (https://cabreraventasvvc-cyber.github.io/verduleria/) y quiero una app web rápida como esa para mi comercio."
  },
  {
    id: "demo-nocera",
    title: "Nocera Birra & Distribuidora",
    subtitle: "Plataforma Mayorista & Minorista",
    category: "gestion",
    badge: "Distribuidora & Birra",
    url: "https://nocerabirra.vercel.app/",
    displayUrl: "nocerabirra.vercel.app",
    icon: "fa-beer-mug-empty",
    gradient: "from-amber-600 via-orange-600 to-red-700",
    description: "Plataforma comercial para cervecería artesanal y distribuidora: catálogo con lista de precios oficial, módulo de pedido rápido, recarga de growlers y solicitud de franquicias.",
    tags: ["Pedido Rápido", "Catálogo Mayorista", "Franquicias", "Conectado a Base"],
    whatsappText: "¡Hola Vanina! Me encantó la plataforma de *Nocera Birra & Distribuidora* (https://nocerabirra.vercel.app/). Me gustaría cotizar un sistema similar para mi distribuidora / local."
  },
  {
    id: "demo-viajes",
    title: "Rutas del Alma Viajes",
    subtitle: "Agencia de Viajes Boutique & CRM",
    category: "diseno",
    badge: "Turismo & CRM",
    url: "https://tribu-de-viajeras.vercel.app/",
    displayUrl: "tribu-de-viajeras.vercel.app",
    icon: "fa-compass",
    gradient: "from-indigo-600 via-sky-600 to-teal-600",
    description: "Sitio web de viajes boutique de diseño de alto nivel: catálogo de paquetes y salidas grupales, itinerarios cuidados, formulario de reservas y panel administrador CRM de leads y consultas.",
    tags: ["Catálogo de Viajes", "Panel CRM Turístico", "Formularios", "Diseño Premium"],
    whatsappText: "¡Hola Vanina! Vi tu desarrollo para *Rutas del Alma Viajes* (https://tribu-de-viajeras.vercel.app/) y me parece excelente. Quisiera consultar por una web profesional para mi agencia o servicio."
  }
];

// Opciones del cotizador interactivo
const CALCULATOR_SERVICES = [
  { id: "calc-tienda", name: "Tienda Online con Carrito & Pedidos WhatsApp", cat: "Ecommerce" },
  { id: "calc-stock", name: "Sistema de Control de Stock & Proveedores", cat: "Gestión" },
  { id: "calc-turnos", name: "App para Turnos y Reservas Online 24/7", cat: "Servicios" },
  { id: "calc-pos", name: "Sistema POS Pro (Ventas de Mostrador & Caja)", cat: "Gestión" },
  { id: "calc-web", name: "Página Web / Landing Page Institucional", cat: "Diseño Web" },
  { id: "calc-auto", name: "Automatizaciones & Generación de PDF", cat: "Productividad" },
  { id: "calc-grafica", name: "Diseño de Flyers, Folletería o Catálogo Digital", cat: "Gráfica" }
];

// Función utilitaria para generar links de WhatsApp
function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  initFilterTabs();
  renderDemos("all");
  initDemoFilterTabs();
  renderCalculatorItems();
  initCalculatorLogic();
  initMobileMenu();
  initFaqAccordion();
});

// Renderizar tarjetas de productos
function renderProducts(category) {
  const container = document.getElementById("products-container");
  if (!container) return;

  const filtered = category === "all" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === category);

  container.innerHTML = "";

  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card p-6 flex flex-col justify-between animate-fade-in";
    
    // Lista de highlights (bullets principales)
    const highlightsHtml = prod.features.slice(0, 4).map(f => `
      <li class="flex items-start gap-2.5 text-sm text-slate-600 mb-2">
        <i class="fa-solid fa-circle-check text-indigo-600 mt-0.5 text-xs"></i>
        <span>${f}</span>
      </li>
    `).join("");

    const waLink = buildWhatsAppUrl(prod.whatsappText);

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${prod.gradient} text-white flex items-center justify-center text-xl shadow-md">
            <i class="fa-solid ${prod.icon}"></i>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
            ${prod.badge}
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 mb-2">${prod.name}</h3>
        <p class="text-sm text-slate-500 mb-4 leading-relaxed">${prod.shortDesc}</p>

        ${prod.demoUrl ? `
          <div class="mb-4">
            <a 
              href="${prod.demoUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full py-2 px-3 rounded-xl bg-indigo-50/80 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 font-bold text-xs flex items-center justify-center gap-1.5 transition group">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Probar Demo: <strong>${prod.demoName}</strong></span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 transition"></i>
            </a>
          </div>
        ` : ''}

        <div class="border-t border-slate-100 pt-3 mb-5">
          <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Incluye:</p>
          <ul class="space-y-1">
            ${highlightsHtml}
          </ul>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch gap-2.5">
        <button 
          onclick="openProductModal('${prod.id}')" 
          class="btn-secondary px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 flex-1">
          <i class="fa-solid fa-eye"></i> Ver Detalle & Volante
        </button>
        <a 
          href="${waLink}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn-whatsapp px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 flex-1 text-center">
          <i class="fa-brands fa-whatsapp text-sm"></i> Consultar Demo
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Configurar pestañas de filtrado para productos
function initFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const cat = tab.getAttribute("data-filter");
      renderProducts(cat);
    });
  });
}

// Renderizar tarjetas de Demos en Vivo
function renderDemos(category) {
  const container = document.getElementById("demos-container");
  if (!container) return;

  const filtered = category === "all" 
    ? DEMOS_DATA 
    : DEMOS_DATA.filter(d => d.category === category);

  container.innerHTML = "";

  filtered.forEach(demo => {
    const card = document.createElement("div");
    card.className = "demo-card shadow-sm hover:shadow-2xl animate-fade-in";

    const tagsHtml = demo.tags.map(t => `
      <span class="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-semibold flex items-center gap-1">
        <i class="fa-solid fa-check text-emerald-500 text-[10px]"></i> ${t}
      </span>
    `).join("");

    const waLink = buildWhatsAppUrl(demo.whatsappText);

    card.innerHTML = `
      <!-- Simulación de barra de navegador / Mockup Header -->
      <div class="browser-header">
        <div class="browser-dots">
          <div class="browser-dot bg-rose-500"></div>
          <div class="browser-dot bg-amber-400"></div>
          <div class="browser-dot bg-emerald-400"></div>
        </div>
        <div class="browser-address">
          <i class="fa-solid fa-lock text-[10px] text-emerald-400 mr-1"></i> https://${demo.displayUrl}
        </div>
        <span class="flex items-center gap-1 text-[10px] text-emerald-400 font-bold tracking-wider">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> EN VIVO
        </span>
      </div>

      <!-- Contenido de la Tarjeta Demo -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${demo.gradient} text-white flex items-center justify-center text-xl shadow-md">
              <i class="fa-solid ${demo.icon}"></i>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              ${demo.badge}
            </span>
          </div>

          <h3 class="text-xl font-extrabold text-slate-900 mb-1">${demo.title}</h3>
          <p class="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3">${demo.subtitle}</p>
          <p class="text-xs text-slate-500 mb-4 leading-relaxed">${demo.description}</p>

          <div class="flex flex-wrap gap-1.5 mb-5">
            ${tagsHtml}
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="pt-4 border-t border-slate-100 space-y-2">
          <a 
            href="${demo.url}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-primary w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition text-center">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Abrir Demo en Vivo</span>
          </a>

          <div class="grid grid-cols-2 gap-2">
            <a 
              href="${waLink}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-whatsapp py-2.5 px-3 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 text-center">
              <i class="fa-brands fa-whatsapp text-sm"></i> Quiero una así
            </a>
            <button 
              onclick="copyDemoLink('${demo.url}', '${demo.title}')"
              class="btn-secondary py-2.5 px-3 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 hover:bg-slate-100 text-slate-700 transition"
              title="Copiar enlace directo de este demo">
              <i class="fa-solid fa-copy text-indigo-600"></i> Copiar Link
            </button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Filtro de pestañas para Demos
function initDemoFilterTabs() {
  const tabs = document.querySelectorAll(".demo-filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const cat = tab.getAttribute("data-filter");
      renderDemos(cat);
    });
  });
}

// Función para copiar enlace al portapapeles y mostrar toast
function copyDemoLink(url, title) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToastNotification(`¡Link copiado! Demo de ${title}: ${url}`);
    }).catch(() => {
      prompt("Copiá este enlace para enviar el demo:", url);
    });
  } else {
    prompt("Copiá este enlace para enviar el demo:", url);
  }
}

function showToastNotification(message) {
  const toast = document.getElementById("toast-notification");
  const textEl = document.getElementById("toast-notification-text");
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Modal de detalle de producto con imagen del volante
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");
  if (!modal || !modalBody) return;

  const waLink = buildWhatsAppUrl(product.whatsappText);

  const featuresList = product.features.map(f => `
    <li class="flex items-start gap-3 text-slate-700 mb-3 text-sm">
      <span class="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">✓</span>
      <span class="leading-snug">${f}</span>
    </li>
  `).join("");

  const highlightsBadges = product.highlights.map(h => `
    <span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">
      ✨ ${h}
    </span>
  `).join("");

  modalBody.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Columna Volante Original / Preview -->
      <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
        <div class="relative group rounded-xl overflow-hidden shadow-md">
          <img src="${product.flyerImage}" alt="Volante ${product.name}" class="w-full h-auto object-cover rounded-xl transition duration-300 group-hover:scale-105">
          <a href="${product.flyerImage}" target="_blank" class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-semibold gap-2">
            <i class="fa-solid fa-magnifying-glass-plus text-lg"></i> Clic para ver en tamaño completo
          </a>
        </div>
        <p class="text-xs text-slate-400 mt-2 italic">Volante oficial y especificaciones de Vanina Cabrera</p>
      </div>

      <!-- Columna Información Detallada -->
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 mb-3">
            <i class="fa-solid ${product.icon}"></i> ${product.badge}
          </div>
          <h2 class="text-2xl font-black text-slate-900 mb-2">${product.name}</h2>
          <p class="text-slate-600 text-sm mb-4 leading-relaxed">${product.shortDesc}</p>

          ${product.demoUrl ? `
            <div class="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white p-4 rounded-2xl mb-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500 text-white inline-block mb-1">🟢 Demo en Vivo Activa</span>
                <h4 class="font-bold text-sm text-white">¿Querés probar este sistema ahora mismo?</h4>
                <p class="text-xs text-indigo-200">Podés navegar la web real de ejemplo: <strong>${product.demoName}</strong></p>
              </div>
              <a href="${product.demoUrl}" target="_blank" rel="noopener noreferrer" class="bg-white hover:bg-indigo-50 text-indigo-950 px-4 py-2.5 rounded-xl font-extrabold text-xs whitespace-nowrap shadow-md flex items-center gap-1.5 hover:scale-105 transition">
                <span>Probar Demo en Vivo</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          ` : ''}

          <div class="flex flex-wrap gap-2 mb-6">
            ${highlightsBadges}
          </div>

          <h4 class="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider text-indigo-900">
            Todas las características incluidas:
          </h4>
          <ul class="space-y-1 mb-6">
            ${featuresList}
          </ul>
        </div>

        <div class="bg-indigo-50/70 p-4 rounded-xl border border-indigo-100 mb-6">
          <p class="text-xs font-semibold text-indigo-950 flex items-center gap-2 mb-1">
            <i class="fa-solid fa-heart text-pink-500"></i> ¿Querés ver una demostración en vivo personalizada?
          </p>
          <p class="text-xs text-indigo-700">Te muestro cómo funciona el panel y la experiencia para tus clientes sin ningún compromiso.</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp py-3 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 flex-1 shadow-lg">
            <i class="fa-brands fa-whatsapp text-lg"></i> Pedir Demo por WhatsApp
          </a>
          <button onclick="closeProductModal()" class="py-3 px-5 rounded-xl border border-slate-300 font-semibold text-sm text-slate-600 hover:bg-slate-100 transition">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Lightbox para ver volantes en grande desde la sección de galería
function openFlyerLightbox(imgSrc, title) {
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("modal-body-content");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="text-center">
      <h3 class="text-xl font-bold text-slate-900 mb-3">${title}</h3>
      <div class="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-200 mb-5">
        <img src="${imgSrc}" alt="${title}" class="w-full h-auto">
      </div>
      <div class="flex justify-center gap-3">
        <a href="${buildWhatsAppUrl('Hola Vanina! Estuve viendo el volante de ' + title + ' y quiero más información.')}" target="_blank" class="btn-whatsapp py-2.5 px-6 rounded-xl font-semibold text-sm flex items-center gap-2">
          <i class="fa-brands fa-whatsapp text-base"></i> Consultar por este producto
        </a>
        <button onclick="closeProductModal()" class="py-2.5 px-6 rounded-xl bg-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-300">
          Cerrar
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// Renderizar lista de cotizador
function renderCalculatorItems() {
  const container = document.getElementById("calculator-items-container");
  if (!container) return;

  container.innerHTML = CALCULATOR_SERVICES.map(s => `
    <label class="calculator-item flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white">
      <div class="flex items-center gap-3">
        <input type="checkbox" value="${s.name}" class="quote-checkbox" data-name="${s.name}" onchange="updateCalculator()">
        <div>
          <p class="font-bold text-slate-800 text-sm leading-tight">${s.name}</p>
          <span class="text-xs text-indigo-600 font-medium">${s.cat}</span>
        </div>
      </div>
      <span class="text-xs text-slate-400 font-semibold">Incluir</span>
    </label>
  `).join("");
}

// Lógica de cálculo y envío de presupuesto personalizado
function updateCalculator() {
  const checkboxes = document.querySelectorAll(".quote-checkbox:checked");
  const countBadge = document.getElementById("selected-services-count");
  const sendBtn = document.getElementById("send-quote-btn");
  const previewBox = document.getElementById("quote-summary-preview");

  const selectedNames = Array.from(checkboxes).map(cb => cb.getAttribute("data-name"));

  if (countBadge) {
    countBadge.innerText = selectedNames.length.toString();
  }

  // Actualizar estilos visuales del label padre
  document.querySelectorAll(".quote-checkbox").forEach(cb => {
    const parent = cb.closest(".calculator-item");
    if (parent) {
      if (cb.checked) {
        parent.classList.add("selected");
      } else {
        parent.classList.remove("selected");
      }
    }
  });

  if (selectedNames.length === 0) {
    if (previewBox) {
      previewBox.innerHTML = `
        <p class="text-slate-400 text-xs italic text-center py-4">
          Seleccioná una o más soluciones arriba para armar tu propuesta a medida.
        </p>
      `;
    }
    if (sendBtn) {
      sendBtn.classList.add("opacity-50", "pointer-events-none");
    }
  } else {
    if (previewBox) {
      previewBox.innerHTML = `
        <div class="space-y-1.5 mb-2">
          ${selectedNames.map(name => `
            <div class="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <i class="fa-solid fa-check text-emerald-500"></i> ${name}
            </div>
          `).join("")}
        </div>
      `;
    }
    if (sendBtn) {
      sendBtn.classList.remove("opacity-50", "pointer-events-none");
    }
  }
}

function initCalculatorLogic() {
  const sendBtn = document.getElementById("send-quote-btn");
  if (!sendBtn) return;

  sendBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".quote-checkbox:checked");
    const businessNameInput = document.getElementById("quote-business-name");
    const businessTypeInput = document.getElementById("quote-business-type");

    const businessName = businessNameInput && businessNameInput.value.trim() ? businessNameInput.value.trim() : "Mi Negocio";
    const businessType = businessTypeInput && businessTypeInput.value ? businessTypeInput.value : "Comercio / Emprendimiento";

    const selectedServices = Array.from(checkboxes).map(cb => `• ${cb.getAttribute("data-name")}`).join("\n");

    if (!selectedServices) {
      alert("Por favor seleccioná al menos una solución digital.");
      return;
    }

    const message = `¡Hola Vanina! Estuve armando un paquete a medida en tu web:\n\n` +
      `🏢 *Negocio:* ${businessName}\n` +
      `🏷️ *Rubro:* ${businessType}\n\n` +
      `✨ *Soluciones seleccionadas:*\n${selectedServices}\n\n` +
      `¿Podrías enviarme una cotización y comentarme cómo empezar? ¡Muchas gracias!`;

    window.open(buildWhatsAppUrl(message), "_blank");
  });
}

// Menú mobile
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });

  // Cerrar al hacer click en cualquier link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    });
  });
}

// Acordeón FAQ
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isClosed = answer.classList.contains("hidden");
        
        // Cerrar todos los demás
        document.querySelectorAll(".faq-answer").forEach(a => a.classList.add("hidden"));
        document.querySelectorAll(".faq-icon").forEach(i => i.classList.remove("rotate-180"));

        if (isClosed) {
          answer.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        }
      });
    }
  });
}

// Cerrar modal con tecla Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
  }
});

// Función para copiar el correo electrónico al portapapeles
function copyEmailToClipboard() {
  navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
    const textSpan = document.getElementById("copy-email-text");
    if (textSpan) {
      const original = textSpan.innerText;
      textSpan.innerText = "¡Copiado!";
      textSpan.classList.add("text-emerald-600");
      setTimeout(() => {
        textSpan.innerText = original;
        textSpan.classList.remove("text-emerald-600");
      }, 2500);
    }
  }).catch(err => {
    prompt("Copiá este correo:", CONTACT_EMAIL);
  });
}

// Manejar envío del formulario de contacto
function handleContactFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const phone = document.getElementById("contact-phone").value.trim();
  const business = document.getElementById("contact-business").value.trim() || "No especificado";
  const service = document.getElementById("contact-service").value;
  const message = document.getElementById("contact-message").value.trim();

  const subject = `Nueva Consulta Web: ${service} - ${name}`;
  const body = `Hola Vanina,\n\nTe envío mi consulta desde el sitio web de Soluciones VC:\n\n` +
    `• Nombre: ${name}\n` +
    `• Email de contacto: ${email}\n` +
    `• WhatsApp / Teléfono: ${phone}\n` +
    `• Negocio / Rubro: ${business}\n` +
    `• Solución de interés: ${service}\n\n` +
    `Consulta:\n${message}\n\n` +
    `¡Quedo a la espera de tu respuesta!`;

  // Mostrar mensaje de éxito en la página
  const successBox = document.getElementById("contact-form-success");
  if (successBox) {
    successBox.classList.remove("hidden");
    successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Abrir cliente de correo con mailto
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}

// Enviar los datos del formulario directamente por WhatsApp
function sendContactFormViaWhatsApp() {
  const nameInput = document.getElementById("contact-name");
  const phoneInput = document.getElementById("contact-phone");
  const messageInput = document.getElementById("contact-message");

  const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Un cliente";
  const email = document.getElementById("contact-email")?.value.trim() || "No especificado";
  const phone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : "No especificado";
  const business = document.getElementById("contact-business")?.value.trim() || "Emprendimiento";
  const service = document.getElementById("contact-service")?.value || "Solución Digital";
  const userMessage = messageInput && messageInput.value.trim() ? messageInput.value.trim() : "Quiero solicitar más información sobre esta solución.";

  const text = `¡Hola Vanina! Te contacto desde el formulario de tu página web:\n\n` +
    `👤 *Nombre:* ${name}\n` +
    `📧 *Email:* ${email}\n` +
    `📱 *Teléfono:* ${phone}\n` +
    `🏢 *Negocio:* ${business}\n` +
    `✨ *Interés:* ${service}\n\n` +
    `💬 *Mensaje:*\n${userMessage}`;

  window.open(buildWhatsAppUrl(text), "_blank");
}

