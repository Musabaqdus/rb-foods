/**
 * R&B Foods (Pvt.) Ltd - Core Interactive Motion & Engine Scripts
 * Built for 60fps performance, dynamic animations, and responsive drawer navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initMetricCounters();
  initStickyHeader();
  initProductCatalog();
  initSeasonalityTable();
  initRfqCalculator();
  initVideoPlayerTabs();
  initModalListeners();
  initSmoothScroll();
  initHeroParallax();
  initWhatsAppTooltip();
});

/* ==========================================================================
   1. SCROLL REVEAL ENGINE (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. DYNAMIC LIVE METRIC COUNTERS
   ========================================================================== */
function initMetricCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  let animated = false;
  const metricsBar = document.querySelector('.hero-metrics-bar');

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      counterElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease Out Quart curve
          const easeOut = 1 - Math.pow(1 - progress, 4);
          const currentVal = Math.floor(easeOut * target);

          el.innerHTML = `${currentVal.toLocaleString()}<small>${suffix.trim()}</small>`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.innerHTML = `${target.toLocaleString()}<small>${suffix.trim()}</small>`;
          }
        }

        requestAnimationFrame(updateCounter);
      });
    }
  }, { threshold: 0.2 });

  if (metricsBar) observer.observe(metricsBar);
}

/* ==========================================================================
   3. STICKY HEADER GLASSMORPHISM ON SCROLL
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   4. MOBILE & TABLET SLIDE-OVER DRAWER NAVIGATION
   ========================================================================== */
window.openNavDrawer = function() {
  const drawer = document.getElementById('nav-drawer');
  const backdrop = document.getElementById('nav-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeNavDrawer = function() {
  const drawer = document.getElementById('nav-drawer');
  const backdrop = document.getElementById('nav-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   5. PRODUCT CATALOG & SPEC FILTERING
   ========================================================================== */
function initProductCatalog() {
  const container = document.getElementById('products-grid-container');
  const tabs = document.querySelectorAll('.tab-btn');
  if (!container) return;

  function renderProducts(category = 'all') {
    container.style.opacity = '0';
    container.style.transform = 'translateY(15px)';

    setTimeout(() => {
      container.innerHTML = '';
      const filtered = category === 'all' 
        ? RB_PRODUCTS 
        : RB_PRODUCTS.filter(p => p.category === category);

      filtered.forEach((product, idx) => {
        const card = document.createElement('article');
        card.className = `product-card reveal reveal-scale delay-${(idx % 4) * 100} is-visible`;
        card.innerHTML = `
          <div class="product-card-img-wrap">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="product-card-badge">${product.badge}</span>
          </div>
          <div class="product-card-body">
            <span class="product-card-botanical">${product.botanical}</span>
            <h3 class="product-card-title">${product.name}</h3>
            <p class="product-card-tagline">${product.tagline}</p>
            
            <div class="spec-quick-bar">
              <div class="spec-mini-item">
                <span class="spec-mini-label">BRIX</span>
                <span class="spec-mini-val">${product.specs.brix.split('|')[0].trim()}</span>
              </div>
              <div class="spec-mini-item">
                <span class="spec-mini-label">PACKAGING</span>
                <span class="spec-mini-val">215 kg Aseptic</span>
              </div>
              <div class="spec-mini-item">
                <span class="spec-mini-label">pH RANGE</span>
                <span class="spec-mini-val">${product.specs.ph}</span>
              </div>
              <div class="spec-mini-item">
                <span class="spec-mini-label">SHELF LIFE</span>
                <span class="spec-mini-val">24 Months</span>
              </div>
            </div>

            <div class="product-card-footer">
              <button type="button" class="btn-spec-view" onclick="openSpecModal('${product.id}')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:-2px;margin-right:4px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                Technical Specs
              </button>
              <button type="button" class="btn-sample-req" onclick="selectProductForRfq('${product.name}')">
                Sample RFQ
              </button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });

      container.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 150);
  }

  // Initial render
  renderProducts('all');

  // Tab listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.category);
    });
  });
}

/* ==========================================================================
   6. SPEC MODAL POPULATOR
   ========================================================================== */
window.openSpecModal = function(productId) {
  const product = RB_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('spec-modal');
  const modalContent = document.getElementById('spec-modal-body');

  modalContent.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
      <div>
        <h4 style="font-family:var(--font-display); font-size:1.6rem; color:var(--color-primary-900);">${product.name}</h4>
        <p style="font-style:italic; color:var(--color-charcoal-600);">${product.botanical}</p>
      </div>
      <span class="crop-status-tag" style="font-size:0.85rem; padding:0.4rem 0.8rem;">${product.specs.season}</span>
    </div>

    <p style="font-size:0.95rem; line-height:1.6; color:var(--color-charcoal-700); margin-bottom:1.5rem;">
      ${product.overview}
    </p>

    <h5 style="font-size:1.05rem; font-weight:700; color:var(--color-primary-800); border-bottom:2px solid var(--color-cream-300); padding-bottom:0.4rem; margin-top:1.5rem;">
      1. Physico-Chemical & Organoleptic Parameters
    </h5>
    <table class="spec-sheet-table">
      <tbody>
        <tr><th>Refractometric Brix (°Bx)</th><td>${product.specs.brix}</td></tr>
        <tr><th>Total Titratable Acidity</th><td>${product.specs.acidity}</td></tr>
        <tr><th>pH Level</th><td>${product.specs.ph}</td></tr>
        <tr><th>Bostwick Consistency</th><td>${product.specs.bostwick}</td></tr>
        <tr><th>Natural Color & Appearance</th><td>${product.specs.color}</td></tr>
        <tr><th>Aroma & Flavor Profile</th><td>${product.specs.flavor}</td></tr>
        <tr><th>Primary Industrial Applications</th><td>${product.specs.applications}</td></tr>
      </tbody>
    </table>

    <h5 style="font-size:1.05rem; font-weight:700; color:var(--color-primary-800); border-bottom:2px solid var(--color-cream-300); padding-bottom:0.4rem; margin-top:2rem;">
      2. In-House QC & Microbiological Standard (Zero Defect)
    </h5>
    <table class="spec-sheet-table">
      <tbody>
        <tr><th>Total Plate Count (TPC)</th><td>${product.microbiological.tpc}</td></tr>
        <tr><th>Yeast & Mould Count</th><td>${product.microbiological.yeastMould}</td></tr>
        <tr><th>Coliforms</th><td>${product.microbiological.coliforms}</td></tr>
        <tr><th>Pathogens (Salmonella/E. Coli)</th><td>${product.microbiological.pathogens}</td></tr>
      </tbody>
    </table>

    <h5 style="font-size:1.05rem; font-weight:700; color:var(--color-primary-800); border-bottom:2px solid var(--color-cream-300); padding-bottom:0.4rem; margin-top:2rem;">
      3. Packaging, Export & Shelf Life
    </h5>
    <table class="spec-sheet-table">
      <tbody>
        <tr><th>Export Packaging</th><td>${product.specs.packaging}</td></tr>
        <tr><th>Container Stuffing</th><td>80 Drums per 20ft FCL (17.20 Metric Tons Net)</td></tr>
        <tr><th>Shelf Life & Preservation</th><td>${product.specs.shelfLife}</td></tr>
        <tr><th>Manufacturing Origin</th><td>R&B Foods Plant, Shorkot, Punjab, Pakistan (BERTUZZI Italy Line)</td></tr>
      </tbody>
    </table>

    <div style="margin-top:2rem; display:flex; justify-content:flex-end; gap:1rem; flex-wrap:wrap;">
      <button type="button" class="btn btn-secondary" onclick="window.print()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        Print Spec Sheet
      </button>
      <button type="button" class="btn btn-gold" onclick="selectProductForRfq('${product.name}'); closeSpecModal();">
        Request Official Sample Batch
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeSpecModal = function() {
  const modal = document.getElementById('spec-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initModalListeners() {
  const modal = document.getElementById('spec-modal');
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSpecModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSpecModal();
      closeNavDrawer();
    }
  });
}

/* ==========================================================================
   7. SEASONALITY & HARVEST MATRIX
   ========================================================================== */
function initSeasonalityTable() {
  const tbody = document.getElementById('seasonality-tbody');
  if (!tbody) return;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonthIdx = new Date().getMonth() + 1; // 1 to 12

  RB_SEASONALITY.forEach(item => {
    const tr = document.createElement('tr');
    let cellsHtml = `<td><strong>${item.crop}</strong></td>`;

    for (let m = 1; m <= 12; m++) {
      const isPeak = item.peak.includes(m);
      const isActive = item.active.includes(m);
      let cls = '';
      let text = '';

      if (isPeak) {
        cls = 'month-peak';
        text = '●';
      } else if (isActive) {
        cls = 'month-active';
        text = '—';
      }

      cellsHtml += `<td class="month-cell ${cls}" title="${months[m-1]}: ${isPeak ? 'Peak Processing' : (isActive ? 'Active Processing' : 'Off-season')}">${text}</td>`;
    }

    cellsHtml += `
      <td class="season-badge-col">
        <span class="crop-status-tag">${item.status}</span>
      </td>
    `;
    tr.innerHTML = cellsHtml;
    tbody.appendChild(tr);
  });
}

/* ==========================================================================
   8. B2B RFQ & SAMPLE CALCULATOR
   ========================================================================== */
function initRfqCalculator() {
  const pureeSelect = document.getElementById('calc-puree');
  const packSelect = document.getElementById('calc-packaging');
  const volInput = document.getElementById('calc-volume');
  const volSlider = document.getElementById('calc-volume-slider');
  const portSelect = document.getElementById('calc-port');

  const outDrums = document.getElementById('out-drums');
  const outFcl = document.getElementById('out-fcl');
  const outNet = document.getElementById('out-net-weight');
  const outGross = document.getElementById('out-gross-weight');
  const outPort = document.getElementById('out-port');
  const outPuree = document.getElementById('out-puree-name');

  const waBtn = document.getElementById('btn-wa-inquiry');

  if (!volInput || !volSlider) return;

  // Populate purees into select
  if (pureeSelect) {
    pureeSelect.innerHTML = '';
    RB_PRODUCTS.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.name;
      opt.textContent = p.name;
      pureeSelect.appendChild(opt);
    });
  }

  function updateCalculations() {
    const volumeMt = parseFloat(volInput.value) || 1;
    const packType = packSelect ? packSelect.value : 'drum';
    const port = portSelect ? portSelect.value : 'Karachi Port (FOB)';
    const selectedPuree = pureeSelect ? pureeSelect.value : 'Chaunsa Mango Puree';

    let unitWeightKg = 215;
    let tareWeightKg = 18; // steel drum tare
    let unitsPerFcl = 80;  // 80 drums per 20ft container

    if (packType === 'bib') {
      unitWeightKg = 20;
      tareWeightKg = 1.2;
      unitsPerFcl = 1000;
    } else if (packType === 'pail') {
      unitWeightKg = 18;
      tareWeightKg = 1.0;
      unitsPerFcl = 1100;
    }

    const totalKg = volumeMt * 1000;
    const totalUnits = Math.ceil(totalKg / unitWeightKg);
    const fclContainers = (totalUnits / unitsPerFcl).toFixed(1);
    const grossWeightMt = ((totalKg + (totalUnits * tareWeightKg)) / 1000).toFixed(2);

    if (outDrums) outDrums.textContent = `${totalUnits.toLocaleString()} ${packType === 'drum' ? 'Drums' : (packType === 'bib' ? 'Boxes' : 'Pails')}`;
    if (outFcl) outFcl.textContent = `${fclContainers} x 20' FCL Containers`;
    if (outNet) outNet.textContent = `${volumeMt.toFixed(1)} MT (${(volumeMt * 1000).toLocaleString()} KG)`;
    if (outGross) outGross.textContent = `${grossWeightMt} Metric Tons`;
    if (outPort) outPort.textContent = port;
    if (outPuree) outPuree.textContent = selectedPuree;

    // Update WhatsApp link
    if (waBtn) {
      const waMsg = encodeURIComponent(
        `Hello R&B Foods Export Desk, I would like to request an industrial price quotation / sample batch:\n\n` +
        `• Product: ${selectedPuree}\n` +
        `• Required Volume: ${volumeMt} MT\n` +
        `• Packaging Format: ${packSelect.options[packSelect.selectedIndex].text}\n` +
        `• Estimated Units: ${totalUnits} units (~${fclContainers} FCL)\n` +
        `• Destination Port: ${port}\n\n` +
        `Please share the latest Certificate of Analysis (COA) and CIF/FOB pricing.`
      );
      waBtn.href = `https://wa.me/923000000000?text=${waMsg}`;
    }
  }

  volSlider.addEventListener('input', (e) => {
    volInput.value = e.target.value;
    updateCalculations();
  });

  volInput.addEventListener('input', (e) => {
    volSlider.value = e.target.value;
    updateCalculations();
  });

  if (pureeSelect) pureeSelect.addEventListener('change', updateCalculations);
  if (packSelect) packSelect.addEventListener('change', updateCalculations);
  if (portSelect) portSelect.addEventListener('change', updateCalculations);

  updateCalculations();
}

window.selectProductForRfq = function(productName) {
  const pureeSelect = document.getElementById('calc-puree');
  if (pureeSelect) {
    for (let i = 0; i < pureeSelect.options.length; i++) {
      if (pureeSelect.options[i].value === productName || pureeSelect.options[i].text.includes(productName)) {
        pureeSelect.selectedIndex = i;
        break;
      }
    }
  }
  const rfqSection = document.getElementById('rfq-calculator');
  if (rfqSection) {
    rfqSection.scrollIntoView({ behavior: 'smooth' });
    const ev = new Event('change');
    if (pureeSelect) pureeSelect.dispatchEvent(ev);
  }
};

/* ==========================================================================
   9. FACILITY & LAB VIDEO TABS
   ========================================================================== */
function initVideoPlayerTabs() {
  const videoPlayer = document.getElementById('lab-video-player');
  const tabs = document.querySelectorAll('.video-tab-btn');
  const videoLabel = document.getElementById('video-current-title');

  if (!videoPlayer || !tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const src = tab.dataset.videoSrc;
      const title = tab.dataset.videoTitle;

      videoPlayer.src = src;
      videoPlayer.load();
      videoPlayer.play().catch(() => {});

      if (videoLabel) videoLabel.textContent = title;
    });
  });
}

/* ==========================================================================
   10. HERO 3D MOUSE PARALLAX INTERACTION
   ========================================================================== */
function initHeroParallax() {
  const heroCard = document.getElementById('hero-card');
  if (!heroCard || window.innerWidth < 1024) return;

  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / rect.height) * 10;
    const rotY = (x / rect.width) * 10;

    heroCard.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  });

  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  });
}

/* ==========================================================================
   11. FLOATING WHATSAPP NOTIFICATION TOOLTIP
   ========================================================================== */
function initWhatsAppTooltip() {
  const tooltip = document.getElementById('whatsapp-tooltip');
  if (!tooltip || window.innerWidth < 768) return;

  setTimeout(() => {
    tooltip.classList.add('show');
  }, 2800);
}

window.dismissTooltip = function(e) {
  e.preventDefault();
  e.stopPropagation();
  const tooltip = document.getElementById('whatsapp-tooltip');
  if (tooltip) tooltip.classList.remove('show');
};

/* ==========================================================================
   12. SMOOTH SCROLL & UI HELPERS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// RFQ form submission feedback
window.handleRfqSubmit = function(e) {
  e.preventDefault();
  const alertBox = document.getElementById('rfq-success-msg');
  if (alertBox) {
    alertBox.style.display = 'block';
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 6000);
  }
  return false;
};
