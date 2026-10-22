/**
 * HORIZONTE MIX — ENGENHARIA LTDA
 * Interactive Controller: Hero Slider, Product Catalog & Modal,
 * Work Yield Calculator, Direct WhatsApp Dispatcher & ScrollTrigger Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Official WhatsApp Number: +55 93 99198-1830
  const WHATSAPP_NUMBER = '5593991981830';

  // Products Catalog (Faithful to Horizonte Mix Briefing — No HM codes or round badges)
  const productsData = [
    {
      id: 'bloco-estrutura-vedacao',
      name: 'Bloco de Estrutura e Vedação',
      category: 'blocos',
      categoryLabel: 'Alvenaria e Construção',
      image: 'assets/images/bloco-estrutura-vedacao.jpg',
      shortDesc: 'Bloco de concreto resistente e padronizado para levantamento de paredes, muros e estruturas.',
      fullDesc: 'Produzido em nossa fábrica em Santarém com rigoroso padrão de medidas, o Bloco de Estrutura e Vedação garante paredes alinhadas, menor gasto de argamassa no assentamento e excelente resistência para obras residenciais, comerciais e muros.',
      dimensions: '09 x 19 x 39 cm',
      materials: 'Concreto',
      applications: 'Levantamento de paredes, muros, galpões e construções residenciais ou comerciais.',
      benefits: 'Alta resistência e durabilidade; medidas padronizadas que economizam massa e agilizam a obra.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'meio-bloco-vedacao',
      name: 'Meio Bloco de Estrutura e Vedação',
      category: 'blocos',
      categoryLabel: 'Alvenaria e Acabamento',
      image: 'assets/images/meio-bloco-vedacao.jpg',
      shortDesc: 'Peça pronta para acabamento de cantos, vãos de portas e janelas sem precisar quebrar blocos na obra.',
      fullDesc: 'O Meio Bloco de Concreto facilita o trabalho do pedreiro na amarração das fiadas e no fechamento de vãos de portas e janelas. Evita cortes e quebras manuais no canteiro de obras, reduzindo o desperdício de material e deixando a alvenaria mais limpa.',
      dimensions: '09 x 19 x 39 cm (Meio Bloco)',
      materials: 'Concreto',
      applications: 'Amarração de cantos, encontros de paredes e acabamento em vãos de portas e janelas.',
      benefits: 'Mais praticidade e rapidez no assentamento; evita quebras e desperdício de blocos inteiros.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'canaleta-lisa',
      name: 'Canaleta Lisa de Concreto',
      category: 'canaletas',
      categoryLabel: 'Vigas, Cintas e Escoamento',
      image: 'assets/images/canaleta-lisa.jpg',
      shortDesc: 'Canaleta de concreto prática para execução de cintas de amarração, vergas e escoamento de água.',
      fullDesc: 'A Canaleta Lisa Horizonte Mix traz rapidez e economia para a obra. Utilizada na execução de vigas, cintas de amarração, vergas de portas e janelas ou escoamento de água, dispensa o uso de fôrmas de madeira e entrega um acabamento firme e uniforme.',
      dimensions: '14 x 19 x 39 cm',
      materials: 'Concreto',
      applications: 'Cintas de amarração, vergas, contravergas e condução ou escoamento superficial.',
      benefits: 'Dispensa caixarias de madeira; reduz o tempo de mão de obra; ótimo encaixe e acabamento.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'paver-unistein',
      name: 'Paver Unistein 18 Faces',
      category: 'pavers',
      categoryLabel: 'Pavimentação Intertravada',
      image: 'assets/images/paver-unistein.jpg',
      shortDesc: 'Piso intertravado de 18 faces com encaixe firme, ideal para ruas, pátios de manobra e tráfego pesado.',
      fullDesc: 'O Paver Unistein 18 faces de 8 cm de altura oferece travamento superior entre as peças, suportando tráfego constante de veículos leves e pesados sem deslocar. É a solução ideal para pavimentação de ruas, condomínios, postos de combustível, estacionamentos e pátios industriais.',
      dimensions: '08 cm de altura',
      materials: 'Concreto de alta resistência',
      applications: 'Ruas, condomínios, pátios de carga, postos de combustível, estacionamentos e acessos.',
      benefits: 'Travamento firme nas 18 faces; suporta tráfego pesado; fácil manutenção e liberação rápida do piso.',
      availability: 'Pronta entrega ou produção programada',
      price: 'Sob Consulta'
    },
    {
      id: 'paver-sextavado',
      name: 'Paver Sextavado',
      category: 'pavers',
      categoryLabel: 'Pavimentação Externa',
      image: 'assets/images/paver-sextavado.jpg',
      shortDesc: 'Bloquete sextavado resistente para pavimentação de vias, pátios, estacionamentos e áreas externas.',
      fullDesc: 'O Paver Sextavado Horizonte Mix é fabricado em três opções de medidas para atender desde garagens e áreas externas até vias de circulação. Garante um piso firme, antiderrapante, durável e de fácil manutenção para o clima da nossa região.',
      dimensions: '30 x 08 cm | 25 x 08 cm | 25 x 06 cm',
      materials: 'Concreto',
      applications: 'Ruas, loteamentos, garagens, pátios comerciais, praças e calçadas.',
      benefits: 'Grande resistência e firmeza; três opções de medidas; excelente escoamento da água da chuva.',
      availability: 'Pronta entrega ou sob encomenda',
      price: 'Sob Consulta'
    },
    {
      id: 'paver-retangular',
      name: 'Paver Retangular',
      category: 'pavers',
      categoryLabel: 'Calçadas e Áreas Externas',
      image: 'assets/images/paver-retangular.jpg',
      shortDesc: 'Paver retangular versátil com excelente acabamento para calçadas, garagens, praças e condomínios.',
      fullDesc: 'O Paver Retangular (10 x 20 cm) combina resistência e ótimo visual para calçadas, passeios, garagens e áreas de convivência. Disponível nas espessuras de 6 cm e 8 cm, permite diferentes desenhos de assentamento e valoriza qualquer projeto.',
      dimensions: '10 x 20 x 08 cm | 10 x 20 x 06 cm',
      materials: 'Concreto',
      applications: 'Calçadas, passeios públicos, garagens residenciais, áreas de lazer e condomínios.',
      benefits: 'Acabamento alinhado e bonito; fácil instalação; disponível para tráfego leve (6 cm) e pesado (8 cm).',
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
      dot.classList.add('indicator-dot');
      if (idx === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
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
     2. Product Catalog Cards & Category Filter
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
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="product-card-body">
          <span class="product-category-label">${product.categoryLabel}</span>
          <h3 class="product-card-title">${product.name}</h3>
          <p class="product-card-desc">${product.shortDesc}</p>
          
          <div class="product-card-specs-row">
            <span>Medidas</span>
            <strong>${product.dimensions}</strong>
          </div>
          <div class="product-card-specs-row">
            <span>Material</span>
            <strong>${product.materials}</strong>
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
          <img src="${product.image}" alt="${product.name}" id="modalProductImage" />
        </div>
      </div>

      <div class="modal-product-info">
        <span class="product-category-label">${product.categoryLabel}</span>
        <h3>${product.name}</h3>
        <p class="modal-desc">${product.fullDesc}</p>

        <table class="modal-specs-table">
          <tbody>
            <tr>
              <td>Medidas / Dimensões</td>
              <td><strong>${product.dimensions}</strong></td>
            </tr>
            <tr>
              <td>Material</td>
              <td>${product.materials}</td>
            </tr>
            <tr>
              <td>Aplicações na Obra</td>
              <td>${product.applications}</td>
            </tr>
            <tr>
              <td>Diferenciais</td>
              <td>${product.benefits}</td>
            </tr>
            <tr>
              <td>Disponibilidade</td>
              <td>${product.availability}</td>
            </tr>
            <tr>
              <td>Valor</td>
              <td><strong>${product.price} (Direto da Fábrica)</strong></td>
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

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && productModal.classList.contains('open')) {
      closeProductModal();
    }
  });

  /* ------------------------------------------------------------------------
     4. Calculadora de Obra (Pavers & Blocos)
     ------------------------------------------------------------------------ */
  const calcPaversBtn = document.getElementById('calcPaversBtn');
  const calcBlocosBtn = document.getElementById('calcBlocosBtn');
  const paversInputs = document.getElementById('paversInputs');
  const blocosInputs = document.getElementById('blocosInputs');

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

  const paverAreaInput = document.getElementById('paverArea');
  const paverTypeSelect = document.getElementById('paverType');
  const paverResultNumber = document.getElementById('paverResultNumber');
  const paverResultDetails = document.getElementById('paverResultDetails');
  const paverWhatsAppBtn = document.getElementById('paverWhatsAppBtn');

  function updatePaversCalculation() {
    if (!paverAreaInput || !paverTypeSelect || !paverResultNumber) return;

    const area = parseFloat(paverAreaInput.value) || 0;
    const paverType = paverTypeSelect.value;

    let unitsPerM2 = 39;
    let paverName = 'Paver Unistein 18 faces';

    if (paverType === 'sextavado-30') {
      unitsPerM2 = 16;
      paverName = 'Paver Sextavado (30 cm)';
    } else if (paverType === 'sextavado-25') {
      unitsPerM2 = 25;
      paverName = 'Paver Sextavado (25 cm)';
    } else if (paverType === 'retangular') {
      unitsPerM2 = 50;
      paverName = 'Paver Retangular (10 x 20 cm)';
    }

    const margin = 1.05;
    const totalPieces = Math.ceil(area * unitsPerM2 * margin);
    const sandM3 = (area * 0.04).toFixed(2);

    paverResultNumber.textContent = totalPieces.toLocaleString('pt-BR');

    if (paverResultDetails) {
      paverResultDetails.innerHTML = `
        <strong>Resumo do Cálculo:</strong><br>
        • Área informada: ${area} m²<br>
        • Produto: ${paverName} (~${unitsPerM2} peças/m²)<br>
        • Margem de segurança: +5% para recortes<br>
        • Colchão de areia estimado (4 cm): ~${sandM3} m³
      `;
    }

    if (paverWhatsAppBtn) {
      const msg = encodeURIComponent(
        `Olá! Gostaria de solicitar um orçamento para ${totalPieces} unidades de ${paverName} (área de ${area} m²). Podem me ajudar?`
      );
      paverWhatsAppBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    }
  }

  if (paverAreaInput) paverAreaInput.addEventListener('input', updatePaversCalculation);
  if (paverTypeSelect) paverTypeSelect.addEventListener('change', updatePaversCalculation);

  const blocoAreaInput = document.getElementById('blocoArea');
  const blocoTypeSelect = document.getElementById('blocoType');

  function updateBlocosCalculation() {
    if (!blocoAreaInput || !blocoTypeSelect || !paverResultNumber) return;

    const area = parseFloat(blocoAreaInput.value) || 0;
    const unitsPerM2 = 12.5;
    const margin = 1.05;
    const totalBlocks = Math.ceil(area * unitsPerM2 * margin);
    const estimatedMeios = Math.ceil(area * 1.5);

    paverResultNumber.textContent = totalBlocks.toLocaleString('pt-BR');

    if (paverResultDetails) {
      paverResultDetails.innerHTML = `
        <strong>Resumo de Alvenaria:</strong><br>
        • Área de parede/muro: ${area} m²<br>
        • Rendimento médio: 12,5 blocos por m²<br>
        • Sugestão de meio-blocos (cantos/vãos): ~${estimatedMeios} un<br>
        • Margem de segurança: +5% incluída
      `;
    }

    if (paverWhatsAppBtn) {
      const msg = encodeURIComponent(
        `Olá! Gostaria de solicitar um orçamento para ${totalBlocks} Blocos de Estrutura e Vedação (09x19x39 cm) para ${area} m² de parede. Podem me ajudar?`
      );
      paverWhatsAppBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    }
  }

  if (blocoAreaInput) blocoAreaInput.addEventListener('input', updateBlocosCalculation);
  if (blocoTypeSelect) blocoTypeSelect.addEventListener('change', updateBlocosCalculation);

  updatePaversCalculation();

  /* ------------------------------------------------------------------------
     5. Quote Form Dispatcher
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

      const name = document.getElementById('quoteName')?.value.trim() || 'Cliente';
      const phone = document.getElementById('quotePhone')?.value.trim() || '';
      const city = document.getElementById('quoteCity')?.value.trim() || 'Santarém - PA';
      const product = document.getElementById('quoteProduct')?.value || 'Produtos em Concreto';
      const quantity = document.getElementById('quoteQty')?.value.trim() || 'A definir';
      const notes = document.getElementById('quoteNotes')?.value.trim() || '';

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
        window.open(url, '_blank');
      }, 400);
    });
  }

  /* ------------------------------------------------------------------------
     6. Navigation & ScrollSpy
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
     7. GSAP + ScrollTrigger Fluid Section Animations
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
    animateGroupOnScroll('.products-section', '#produtos .section-eyebrow, #produtos .section-title, #produtos .section-subtitle, #produtos .product-filters, .product-card', { y: 28, scale: 0.985 }, 0.07);
    animateGroupOnScroll('.calculator-section', '.calculator-card', { y: 28, scale: 0.985 }, 0);
    animateGroupOnScroll('.quote-section', '.quote-info, .quote-form-card', { y: 28, scale: 0.985 }, 0.12);
    animateGroupOnScroll('.location-section', '.location-card, .map-container', { y: 28, scale: 0.985 }, 0.12);
  }
});
