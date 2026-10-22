/**
 * HORIZONTE MIX — ENGENHARIA LTDA
 * Interactive Controller: Hero Slider, 8-Product Catalog & Modal,
 * Work Yield Calculator (Exact Factory Yields), Direct WhatsApp Dispatcher, LGPD & ScrollTrigger.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Official WhatsApp Number: +55 93 99198-1830
  const WHATSAPP_NUMBER = '5593991981830';

  // XSS & Input Sanitization Helpers
  function escapeHTML(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function sanitizeInput(value, maxLength = 120) {
    return String(value ?? '')
      .replace(/[\u0000-\u001F\u007F<>]/g, '')
      .trim()
      .slice(0, maxLength);
  }

  // Catálogo Oficial com os 8 Produtos Disponíveis na Fábrica Horizonte Mix
  const productsData = [
    {
      id: 'paver-sextavado-30mpa',
      name: 'Paver Sextavado 30x30x8 - 30 MPa',
      alt: 'Paver Sextavado 30x30x8 cm 30 MPa de Concreto Horizonte Mix em Santarém - PA',
      category: 'pavers',
      categoryLabel: 'Pavimentação Pesada • 30 MPa',
      image: 'assets/images/paver-sextavado.jpg',
      imageWebp: 'assets/images/paver-sextavado.webp',
      shortDesc: 'Bloquete sextavado de alta resistência (30 MPa) para ruas, pátios de manobra e tráfego pesado.',
      fullDesc: 'O Paver Sextavado 30x30x8 cm de 30 MPa é produzido com concreto de alta resistência estrutural, ideal para pavimentação de ruas, avenidas, postos de combustível, pátios de carga e circulação de caminhões. Seu formato hexagonal distribui as cargas de forma uniforme e facilita a drenagem.',
      dimensions: '30 x 30 x 08 cm',
      yieldInfo: '11 unidades por m²',
      materials: 'Concreto 30 MPa',
      applications: 'Ruas, loteamentos, pátios industriais, postos de combustível e tráfego pesado.',
      benefits: 'Resistência de 30 MPa; apenas 11 peças por m² (rápido assentamento); fácil manutenção.',
      availability: 'Pronta entrega ou produção programada',
      price: 'Sob Consulta'
    },
    {
      id: 'paver-sextavado-25mpa',
      name: 'Paver Sextavado 30x30x8 - 25 MPa',
      alt: 'Paver Sextavado 30x30x8 cm 25 MPa de Concreto Horizonte Mix em Santarém - PA',
      category: 'pavers',
      categoryLabel: 'Pavimentação Externa • 25 MPa',
      image: 'assets/images/paver-sextavado.jpg',
      imageWebp: 'assets/images/paver-sextavado.webp',
      shortDesc: 'Bloquete sextavado de 25 MPa ideal para vias residenciais, condomínios, estacionamentos e pátios.',
      fullDesc: 'O Paver Sextavado 30x30x8 cm de 25 MPa oferece excelente custo-benefício e durabilidade para pavimentação de condomínios, estacionamentos comerciais, vias residenciais e garagens. Garante superfície firme, antiderrapante e ótimo conforto térmico.',
      dimensions: '30 x 30 x 08 cm',
      yieldInfo: '11 unidades por m²',
      materials: 'Concreto 25 MPa',
      applications: 'Vias de condomínios, estacionamentos, garagens, pátios comerciais e acessos.',
      benefits: 'Resistência de 25 MPa; rendimento de 11 peças por m²; excelente escoamento de água.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'paver-unistein-25mpa',
      name: 'Paver Unistein 16 Faces 11x22x08 - 25 MPa',
      alt: 'Paver Unistein 16 Faces 11x22x08 cm 25 MPa Horizonte Mix em Santarém - PA',
      category: 'pavers',
      categoryLabel: 'Piso Intertravado • 25 MPa',
      image: 'assets/images/paver-unistein.jpg',
      imageWebp: 'assets/images/paver-unistein.webp',
      shortDesc: 'Piso intertravado de 16 faces (25 MPa) com travamento firme para ruas, estacionamentos e pátios.',
      fullDesc: 'O Paver Unistein 16 Faces (11x22x08 cm) de 25 MPa proporciona intertravamento mecânico superior entre as peças, impedindo o deslocamento mesmo sob frenagem e manobra constante de veículos. Muito utilizado em ruas, condomínios, estacionamentos e acessos comerciais.',
      dimensions: '11 x 22 x 08 cm',
      yieldInfo: '42 unidades por m²',
      materials: 'Concreto 25 MPa',
      applications: 'Ruas, condomínios, estacionamentos, rampas de acesso e pátios comerciais.',
      benefits: 'Travamento firme nas 16 faces; resistência de 25 MPa; liberação imediata após assentamento.',
      availability: 'Pronta entrega ou produção programada',
      price: 'Sob Consulta'
    },
    {
      id: 'paver-unistein-15mpa',
      name: 'Paver Unistein 16 Faces 11x22x08 - 15 MPa',
      alt: 'Paver Unistein 16 Faces 11x22x08 cm 15 MPa Horizonte Mix em Santarém - PA',
      category: 'pavers',
      categoryLabel: 'Calçadas e Pátios Leves • 15 MPa',
      image: 'assets/images/paver-unistein.jpg',
      imageWebp: 'assets/images/paver-unistein.webp',
      shortDesc: 'Piso intertravado de 16 faces (15 MPa) econômico para calçadas, passeios, praças e áreas externas.',
      fullDesc: 'O Paver Unistein 16 Faces (11x22x08 cm) de 15 MPa mantém o mesmo padrão visual e encaixe perfeito da linha Unistein, sendo dimensionado com economia para locais de tráfego leve, como calçadas, áreas de lazer, praças, passeios de condomínios e garagens residenciais.',
      dimensions: '11 x 22 x 08 cm',
      yieldInfo: '42 unidades por m²',
      materials: 'Concreto 15 MPa',
      applications: 'Calçadas, passeios, praças, áreas externas residenciais e garagens leves.',
      benefits: 'Ótima relação custo-benefício; encaixe preciso de 16 faces; acabamento alinhado e antiderrapante.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'bloco-estrutural-14',
      name: 'Bloco Estrutural 14x19x39',
      alt: 'Bloco Estrutural de Concreto 14x19x39 cm Horizonte Mix em Santarém - PA',
      category: 'blocos',
      categoryLabel: 'Alvenaria Estrutural • 14 cm',
      image: 'assets/images/bloco-estrutural-14.jpg',
      imageWebp: 'assets/images/bloco-estrutural-14.webp',
      shortDesc: 'Bloco estrutural de 14 cm com dois furos amplos para paredes portantes, muros altos e galpões.',
      fullDesc: 'O Bloco Estrutural 14x19x39 cm da Horizonte Mix é fabricado com controle rigoroso de medidas e compactação. Seus dois furos verticais amplos facilitam a passagem de armaduras, grauteamento e tubulações, garantindo rapidez e solidez no levantamento de paredes estruturais e muros.',
      dimensions: '14 x 19 x 39 cm',
      yieldInfo: '12,5 unidades por m²',
      materials: 'Concreto Estrutural',
      applications: 'Alvenaria estrutural, paredes portantes, galpões, comércios e muros de grande porte.',
      benefits: 'Medidas exatas (14 cm de espessura); menor consumo de argamassa; alta produtividade na obra.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'bloco-estrutural-19',
      name: 'Bloco Estrutural 19x19x39',
      alt: 'Bloco Estrutural de Concreto 19x19x39 cm Horizonte Mix em Santarém - PA',
      category: 'blocos',
      categoryLabel: 'Alvenaria Pesada • 19 cm',
      image: 'assets/images/bloco-estrutural-19.jpg',
      imageWebp: 'assets/images/bloco-estrutural-19.webp',
      shortDesc: 'Bloco estrutural largo de 19 cm para fundações, muros de contenção, bases e obras industriais.',
      fullDesc: 'Com 19 cm de largura, o Bloco Estrutural 19x19x39 cm oferece máxima robustez e estabilidade para estruturas que exigem paredes mais espessas, muros de contenção, embasamentos, galpões industriais e reservatórios. Possui duas cavidades amplas para graute e ferragem.',
      dimensions: '19 x 19 x 39 cm',
      yieldInfo: '12,5 unidades por m²',
      materials: 'Concreto Estrutural Reforçado',
      applications: 'Muros de arrimo/contenção, fundações, embasamentos, galpões industriais e estruturas pesadas.',
      benefits: 'Espessura robusta de 19 cm; excelente isolamento térmico e acústico; alta capacidade de carga.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'bloco-vedacao-09',
      name: 'Bloco Vedação 09x19x39',
      alt: 'Bloco de Vedação de Concreto 09x19x39 cm Horizonte Mix em Santarém - PA',
      category: 'blocos',
      categoryLabel: 'Alvenaria de Vedação • 09 cm',
      image: 'assets/images/bloco-vedacao-09.jpg',
      imageWebp: 'assets/images/bloco-vedacao-09.webp',
      shortDesc: 'Bloco de concreto de 09 cm leve e padronizado para fechamento de paredes, divisórias e muros.',
      fullDesc: 'O Bloco de Vedação 09x19x39 cm é a escolha prática e econômica para fechamento de vãos em estruturas convencionais, paredes internas, divisórias e muros residenciais. Por ter faces regulares e prumo perfeito, reduz a espessura do reboco e acelera o serviço do pedreiro.',
      dimensions: '09 x 19 x 39 cm',
      yieldInfo: '12,5 unidades por m²',
      materials: 'Concreto',
      applications: 'Fechamento de paredes internas e externas, muros residenciais e divisórias em geral.',
      benefits: 'Menor peso sobre a estrutura; economia de argamassa e reboco; assentamento rápido.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'bloco-canaleta-14',
      name: 'Bloco Canaleta 14x09x39',
      alt: 'Bloco Canaleta de Concreto 14x09x39 cm Horizonte Mix em Santarém - PA',
      category: 'canaletas',
      categoryLabel: 'Cintas, Vigas e Vergas • 14 cm',
      image: 'assets/images/bloco-canaleta-14.jpg',
      imageWebp: 'assets/images/bloco-canaleta-14.webp',
      shortDesc: 'Canaleta em U (14x09x39 cm) para cintas de amarração, vergas e contravergas sem fôrma de madeira.',
      fullDesc: 'O Bloco Canaleta 14x09x39 cm funciona como fôrma pronta para a concretagem de cintas de amarração de muros, vergas e contravergas de portas e janelas. Elimina o gasto com tábuas e desforma, mantendo o alinhamento perfeito com os blocos de 14 cm.',
      dimensions: '14 x 09 x 39 cm',
      yieldInfo: '2,5 unidades por metro linear',
      materials: 'Concreto',
      applications: 'Cintas de amarração horizontais, vergas, contravergas e vigas de respaldo.',
      benefits: 'Dispensa caixaria de madeira; 2,5 peças por metro linear; encaixe limpo e rápido na alvenaria.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    }
  ];

  /* ------------------------------------------------------------------------
     1. Hero Slider Controller
     ------------------------------------------------------------------------ */
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const indicatorsContainer = document.querySelector('.slider-indicators');
  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 6500;

  if (slides.length > 0 && indicatorsContainer) {
    indicatorsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.classList.add('indicator-dot');
      if (idx === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Ir para o slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetAutoSlide();
      });
      indicatorsContainer.appendChild(dot);
    });

    const dots = indicatorsContainer.querySelectorAll('.indicator-dot');

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, slideDuration);
    }

    function resetAutoSlide() {
      clearInterval(slideInterval);
      startAutoSlide();
    }

    const sliderWrapper = document.querySelector('.hero-slider-section');
    if (sliderWrapper) {
      sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
      sliderWrapper.addEventListener('mouseleave', () => startAutoSlide());
    }

    startAutoSlide();
  }

  /* ------------------------------------------------------------------------
     2. Product Catalog Cards & Category Filter (8 Produtos)
     ------------------------------------------------------------------------ */
  const productsGrid = document.getElementById('productsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderProducts(filterCategory = 'all') {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    const filtered = filterCategory === 'all'
      ? productsData
      : productsData.filter(p => p.category === filterCategory);

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-id', product.id);
      card.setAttribute('data-category', product.category);

      card.innerHTML = `
        <div class="product-card-image">
          <picture>
            <source srcset="${escapeHTML(product.imageWebp)}" type="image/webp" />
            <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.alt)}" width="1200" height="896" loading="lazy" decoding="async" />
          </picture>
        </div>
        <div class="product-card-body">
          <span class="product-category-label">${escapeHTML(product.categoryLabel)}</span>
          <h3 class="product-card-title">${escapeHTML(product.name)}</h3>
          <p class="product-card-desc">${escapeHTML(product.shortDesc)}</p>
          
          <div class="product-card-specs-row">
            <span>Medidas</span>
            <strong>${escapeHTML(product.dimensions)}</strong>
          </div>
          <div class="product-card-specs-row">
            <span>Rendimento</span>
            <strong>${escapeHTML(product.yieldInfo)}</strong>
          </div>

          <div class="product-card-action">
            <span class="card-cta-btn">
              Ver Detalhes do Produto →
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openProductModal(product.id);
      });

      productsGrid.appendChild(card);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProducts(cat);
    });
  });

  renderProducts('all');

  /* ------------------------------------------------------------------------
     3. Product Details Modal & Navigation Tabs
     ------------------------------------------------------------------------ */
  const productModal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTabsNav = document.getElementById('modalTabsNav');
  const modalProductContent = document.getElementById('modalProductContent');

  function buildModalTabs(activeId) {
    if (!modalTabsNav) return;
    modalTabsNav.innerHTML = '';
    productsData.forEach(prod => {
      const tabBtn = document.createElement('button');
      tabBtn.type = 'button';
      tabBtn.className = `tab-nav-btn ${prod.id === activeId ? 'active' : ''}`;
      tabBtn.textContent = prod.name;
      tabBtn.addEventListener('click', () => {
        loadProductIntoModal(prod.id);
      });
      modalTabsNav.appendChild(tabBtn);
    });
  }

  function loadProductIntoModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product || !modalProductContent) return;

    const tabs = modalTabsNav.querySelectorAll('.tab-nav-btn');
    tabs.forEach((tab, index) => {
      if (productsData[index].id === productId) {
        tab.classList.add('active');
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        tab.classList.remove('active');
      }
    });

    const prefilledMessage = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para o produto: ${product.name} (${product.dimensions}). Podem me ajudar?`
    );

    modalProductContent.innerHTML = `
      <div class="modal-product-gallery">
        <div class="modal-main-img-box">
          <picture>
            <source srcset="${escapeHTML(product.imageWebp)}" type="image/webp" />
            <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.alt)}" width="1200" height="896" decoding="async" id="modalProductImage" />
          </picture>
        </div>
      </div>

      <div class="modal-product-info">
        <span class="product-category-label">${escapeHTML(product.categoryLabel)}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="modal-desc">${escapeHTML(product.fullDesc)}</p>

        <table class="modal-specs-table">
          <tbody>
            <tr>
              <td>Medidas / Dimensões</td>
              <td><strong>${escapeHTML(product.dimensions)}</strong></td>
            </tr>
            <tr>
              <td>Rendimento na Obra</td>
              <td><strong>${escapeHTML(product.yieldInfo)}</strong></td>
            </tr>
            <tr>
              <td>Material / Resistência</td>
              <td>${escapeHTML(product.materials)}</td>
            </tr>
            <tr>
              <td>Aplicações na Obra</td>
              <td>${escapeHTML(product.applications)}</td>
            </tr>
            <tr>
              <td>Diferenciais</td>
              <td>${escapeHTML(product.benefits)}</td>
            </tr>
            <tr>
              <td>Disponibilidade</td>
              <td>${escapeHTML(product.availability)}</td>
            </tr>
            <tr>
              <td>Cotação</td>
              <td><strong>${escapeHTML(product.price)} (Direto da Fábrica)</strong></td>
            </tr>
          </tbody>
        </table>

        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-top: 20px;">
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${prefilledMessage}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-lg">
            Quero Orçar Este Produto
          </a>
          <button type="button" class="btn btn-inverted btn-lg" id="closeModalInnerBtn">
            Voltar aos Produtos
          </button>
        </div>
      </div>
    `;

    const closeInnerBtn = document.getElementById('closeModalInnerBtn');
    if (closeInnerBtn) {
      closeInnerBtn.addEventListener('click', closeProductModal);
    }
  }

  function openProductModal(productId) {
    buildModalTabs(productId);
    loadProductIntoModal(productId);
    if (productModal) {
      productModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeProductModal() {
    if (productModal) {
      productModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. Calculadora de Obra (8 Produtos com Medidas e Rendimentos Exatos)
     - Paver Sextavado 30x30x8 (30 MPa e 25 MPa) = 11 unidades / m²
     - Paver Unistein 16 Faces 11x22x08 (25 MPa e 15 MPa) = 42 unidades / m²
     - Blocos 14x19x39, 19x19x39 e 09x19x39 = 12,5 unidades / m²
     - Bloco Canaleta 14x09x39 = 2,5 unidades / metro linear (m)
     ------------------------------------------------------------------------ */
  const calcPaversBtn = document.getElementById('calcPaversBtn');
  const calcBlocosBtn = document.getElementById('calcBlocosBtn');
  const paversInputs = document.getElementById('paversInputs');
  const blocosInputs = document.getElementById('blocosInputs');

  const paverAreaInput = document.getElementById('paverArea');
  const paverTypeSelect = document.getElementById('paverType');
  const blocoAreaInput = document.getElementById('blocoArea');
  const blocoTypeSelect = document.getElementById('blocoType');
  const blocoAreaLabel = document.getElementById('blocoAreaLabel');

  const paverResultNumber = document.getElementById('paverResultNumber');
  const calcResultUnit = document.getElementById('calcResultUnit');
  const paverResultDetails = document.getElementById('paverResultDetails');
  const paverWhatsAppBtn = document.getElementById('paverWhatsAppBtn');

  if (calcPaversBtn && calcBlocosBtn && paversInputs && blocosInputs) {
    calcPaversBtn.addEventListener('click', () => {
      calcPaversBtn.classList.add('active');
      calcBlocosBtn.classList.remove('active');
      paversInputs.style.display = 'flex';
      blocosInputs.style.display = 'none';
      updatePaversCalculation();
    });

    calcBlocosBtn.addEventListener('click', () => {
      calcBlocosBtn.classList.add('active');
      calcPaversBtn.classList.remove('active');
      paversInputs.style.display = 'none';
      blocosInputs.style.display = 'flex';
      updateBlocosCalculation();
    });
  }

  function updatePaversCalculation() {
    if (!paverAreaInput || !paverTypeSelect || !paverResultNumber) return;

    const rawArea = parseFloat(paverAreaInput.value);
    const area = Number.isFinite(rawArea) && rawArea > 0 ? Math.min(rawArea, 1000000) : 0;
    const paverType = paverTypeSelect.value;

    let unitsPerM2 = 42;
    let paverName = 'Paver Unistein 16 Faces 11x22x08 - 25 MPa';

    if (paverType === 'sextavado-30mpa') {
      unitsPerM2 = 11;
      paverName = 'Paver Sextavado 30x30x8 - 30 MPa';
    } else if (paverType === 'sextavado-25mpa') {
      unitsPerM2 = 11;
      paverName = 'Paver Sextavado 30x30x8 - 25 MPa';
    } else if (paverType === 'unistein-25mpa') {
      unitsPerM2 = 42;
      paverName = 'Paver Unistein 16 Faces 11x22x08 - 25 MPa';
    } else if (paverType === 'unistein-15mpa') {
      unitsPerM2 = 42;
      paverName = 'Paver Unistein 16 Faces 11x22x08 - 15 MPa';
    }

    const exactPieces = Math.ceil(area * unitsPerM2);
    const piecesWithMargin = Math.ceil(area * unitsPerM2 * 1.05);
    const sandM3 = (area * 0.04).toFixed(2);

    paverResultNumber.textContent = exactPieces.toLocaleString('pt-BR');
    if (calcResultUnit) {
      calcResultUnit.textContent = `Peças para ${area.toLocaleString('pt-BR')} m² (${unitsPerM2} un/m²)`;
    }

    if (paverResultDetails) {
      paverResultDetails.innerHTML = `
        <strong>Resumo Técnico da Pavimentação:</strong><br>
        • Produto: ${escapeHTML(paverName)}<br>
        • Área a pavimentar: <strong>${escapeHTML(area.toLocaleString('pt-BR'))} m²</strong><br>
        • Rendimento padrão: <strong>${escapeHTML(unitsPerM2)} peças por m²</strong><br>
        • Quantidade exata: <strong>${escapeHTML(exactPieces.toLocaleString('pt-BR'))} peças</strong><br>
        • Com margem de recorte (+5%): <strong>${escapeHTML(piecesWithMargin.toLocaleString('pt-BR'))} peças</strong><br>
        • Colchão de areia estimado (4 cm): ~${escapeHTML(sandM3)} m³
      `;
    }

    if (paverWhatsAppBtn) {
      const msg = encodeURIComponent(
        `Olá! Gostaria de solicitar um orçamento de ${paverName} para uma área de ${area} m² (${exactPieces} peças exatas / ${piecesWithMargin} peças com 5% de margem). Podem me ajudar?`
      );
      paverWhatsAppBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    }
  }

  if (paverAreaInput) paverAreaInput.addEventListener('input', updatePaversCalculation);
  if (paverTypeSelect) paverTypeSelect.addEventListener('change', updatePaversCalculation);

  function updateBlocosCalculation() {
    if (!blocoAreaInput || !blocoTypeSelect || !paverResultNumber) return;

    const rawMeasure = parseFloat(blocoAreaInput.value);
    const measure = Number.isFinite(rawMeasure) && rawMeasure > 0 ? Math.min(rawMeasure, 1000000) : 0;
    const blocoType = blocoTypeSelect.value;

    let unitsPerMeasure = 12.5;
    let blocoName = 'Bloco Estrutural 14x19x39 cm';
    let isLinearCanaleta = false;

    if (blocoType === 'estrutural-14') {
      unitsPerMeasure = 12.5;
      blocoName = 'Bloco Estrutural 14x19x39 cm';
    } else if (blocoType === 'estrutural-19') {
      unitsPerMeasure = 12.5;
      blocoName = 'Bloco Estrutural 19x19x39 cm';
    } else if (blocoType === 'vedacao-09') {
      unitsPerMeasure = 12.5;
      blocoName = 'Bloco Vedação 09x19x39 cm';
    } else if (blocoType === 'canaleta-14') {
      unitsPerMeasure = 2.5;
      blocoName = 'Bloco Canaleta 14x09x39 cm';
      isLinearCanaleta = true;
    }

    if (blocoAreaLabel) {
      blocoAreaLabel.textContent = isLinearCanaleta
        ? 'Comprimento de Cinta / Viga / Verga (Metros Lineares - m)'
        : 'Área de Parede ou Muro (m²)';
    }

    const exactBlocks = Math.ceil(measure * unitsPerMeasure);
    const blocksWithMargin = Math.ceil(measure * unitsPerMeasure * 1.05);

    paverResultNumber.textContent = exactBlocks.toLocaleString('pt-BR');

    if (isLinearCanaleta) {
      if (calcResultUnit) {
        calcResultUnit.textContent = `Canaletas para ${measure.toLocaleString('pt-BR')} m lineares (2,5 un/m)`;
      }
      if (paverResultDetails) {
        paverResultDetails.innerHTML = `
          <strong>Resumo Técnico de Canaletas:</strong><br>
          • Produto: ${escapeHTML(blocoName)}<br>
          • Comprimento linear: <strong>${escapeHTML(measure.toLocaleString('pt-BR'))} m</strong><br>
          • Rendimento oficial: <strong>2,5 unidades por metro linear</strong> (peça de 39 cm)<br>
          • Quantidade exata: <strong>${escapeHTML(exactBlocks.toLocaleString('pt-BR'))} unidades</strong><br>
          • Com margem de segurança (+5%): <strong>${escapeHTML(blocksWithMargin.toLocaleString('pt-BR'))} unidades</strong>
        `;
      }
      if (paverWhatsAppBtn) {
        const msg = encodeURIComponent(
          `Olá! Gostaria de solicitar um orçamento de ${blocoName} para ${measure} metros lineares (${exactBlocks} unidades exatas / ${blocksWithMargin} com 5% de margem). Podem me ajudar?`
        );
        paverWhatsAppBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
      }
    } else {
      if (calcResultUnit) {
        calcResultUnit.textContent = `Blocos para ${measure.toLocaleString('pt-BR')} m² (12,5 un/m²)`;
      }
      if (paverResultDetails) {
        paverResultDetails.innerHTML = `
          <strong>Resumo Técnico de Alvenaria:</strong><br>
          • Produto: ${escapeHTML(blocoName)}<br>
          • Área de parede/muro: <strong>${escapeHTML(measure.toLocaleString('pt-BR'))} m²</strong><br>
          • Rendimento oficial: <strong>12,5 blocos por m²</strong> (face 19x39 cm)<br>
          • Quantidade exata: <strong>${escapeHTML(exactBlocks.toLocaleString('pt-BR'))} unidades</strong><br>
          • Com margem de segurança (+5%): <strong>${escapeHTML(blocksWithMargin.toLocaleString('pt-BR'))} unidades</strong>
        `;
      }
      if (paverWhatsAppBtn) {
        const msg = encodeURIComponent(
          `Olá! Gostaria de solicitar um orçamento de ${blocoName} para ${measure} m² de parede (${exactBlocks} unidades exatas / ${blocksWithMargin} com 5% de margem). Podem me ajudar?`
        );
        paverWhatsAppBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
      }
    }
  }

  if (blocoAreaInput) blocoAreaInput.addEventListener('input', updateBlocosCalculation);
  if (blocoTypeSelect) blocoTypeSelect.addEventListener('change', updateBlocosCalculation);

  updatePaversCalculation();

  /* ------------------------------------------------------------------------
     5. Quote Form Dispatcher (with Anti-Spam Honeypot & Input Sanitization)
     ------------------------------------------------------------------------ */
  const quoteForm = document.getElementById('quoteForm');
  const toastNotification = document.getElementById('toastNotification');

  function showToast(message) {
    if (!toastNotification) return;
    toastNotification.textContent = message;
    toastNotification.classList.add('show');
    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4000);
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Anti-Spam Honeypot check
      const honeypot = document.getElementById('quoteWebsite')?.value || '';
      if (honeypot.trim() !== '') {
        return;
      }

      const name = sanitizeInput(document.getElementById('quoteName')?.value, 80) || 'Cliente';
      const phone = sanitizeInput(document.getElementById('quotePhone')?.value, 30);
      const city = sanitizeInput(document.getElementById('quoteCity')?.value, 60) || 'Santarém - PA';
      const product = sanitizeInput(document.getElementById('quoteProduct')?.value, 100) || 'Produtos em Concreto';
      const quantity = sanitizeInput(document.getElementById('quoteQty')?.value, 80) || 'A definir';
      const notes = sanitizeInput(document.getElementById('quoteNotes')?.value, 400);

      if (!phone || phone.replace(/\D/g, '').length < 8) {
        showToast('Por favor, informe um telefone ou WhatsApp válido.');
        return;
      }

      const text = [
        `Olá! Gostaria de solicitar um orçamento com a Horizonte Mix.`,
        ``,
        `*Nome/Empresa:* ${name}`,
        `*Telefone:* ${phone}`,
        `*Local da Obra:* ${city}`,
        `*Produto:* ${product}`,
        `*Quantidade:* ${quantity}`,
        notes ? `*Observações:* ${notes}` : null
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

      showToast('Abrindo atendimento no WhatsApp...');

      setTimeout(() => {
        const newWin = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWin) newWin.opener = null;
      }, 400);
    });
  }

  /* ------------------------------------------------------------------------
     6. LGPD Banner & Privacy Policy Modal
     ------------------------------------------------------------------------ */
  const lgpdBanner = document.getElementById('lgpdBanner');
  const lgpdAcceptBtn = document.getElementById('lgpdAcceptBtn');
  const privacyModal = document.getElementById('privacyModal');
  const privacyCloseBtn = document.getElementById('privacyCloseBtn');
  const privacyTriggers = document.querySelectorAll('.open-privacy-modal');

  try {
    if (lgpdBanner && localStorage.getItem('hm_lgpd_accepted') !== '1') {
      lgpdBanner.classList.add('visible');
    }
  } catch (_) {}

  if (lgpdAcceptBtn && lgpdBanner) {
    lgpdAcceptBtn.addEventListener('click', () => {
      lgpdBanner.classList.remove('visible');
      try {
        localStorage.setItem('hm_lgpd_accepted', '1');
      } catch (_) {}
    });
  }

  function openPrivacyModal(e) {
    if (e) e.preventDefault();
    if (privacyModal) {
      privacyModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePrivacyModal() {
    if (privacyModal) {
      privacyModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  privacyTriggers.forEach(trigger => {
    trigger.addEventListener('click', openPrivacyModal);
  });

  if (privacyCloseBtn) {
    privacyCloseBtn.addEventListener('click', closePrivacyModal);
  }

  if (privacyModal) {
    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) {
        closePrivacyModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (productModal && productModal.classList.contains('open')) {
        closeProductModal();
      }
      if (privacyModal && privacyModal.classList.contains('open')) {
        closePrivacyModal();
      }
    }
  });

  /* ------------------------------------------------------------------------
     7. Navigation & ScrollSpy
     ------------------------------------------------------------------------ */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        activeLink?.classList.add('active');
      } else {
        activeLink?.classList.remove('active');
      }
    });
  });

  /* ------------------------------------------------------------------------
     8. GSAP + ScrollTrigger Fluid Section Animations
     ------------------------------------------------------------------------ */
  if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const animateGroupOnScroll = (triggerSelector, targetSelector, fromVars = { y: 28, scale: 0.985 }, staggerVal = 0.08) => {
      const triggerEl = document.querySelector(triggerSelector);
      if (!triggerEl) return;

      ScrollTrigger.create({
        trigger: triggerEl,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          const targets = document.querySelectorAll(targetSelector);
          if (targets.length > 0) {
            gsap.fromTo(
              targets,
              fromVars,
              {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.65,
                stagger: staggerVal,
                ease: 'power3.out',
                clearProps: 'transform'
              }
            );
          }
        }
      });
    };

    animateGroupOnScroll('.trust-section', '.trust-item', { y: 20, scale: 0.98 }, 0.08);
    animateGroupOnScroll('.about-section', '.about-visual, .about-content > *', { y: 26, scale: 0.985 }, 0.08);
    animateGroupOnScroll('.products-section', '#produtos .section-eyebrow, #produtos .section-title, #produtos .section-subtitle, #produtos .product-filters, .product-card', { y: 28, scale: 0.985 }, 0.06);
    animateGroupOnScroll('.calculator-section', '.calculator-card', { y: 28, scale: 0.985 }, 0);
    animateGroupOnScroll('.quote-section', '.quote-info, .quote-form-card', { y: 28, scale: 0.985 }, 0.12);
    animateGroupOnScroll('.location-section', '.location-card, .map-container', { y: 28, scale: 0.985 }, 0.12);
  }
});
