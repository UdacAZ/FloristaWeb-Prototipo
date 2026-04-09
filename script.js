/* ============================================================
   floristanaweb — script.js
   Funcionalidades:
   1. Dados dos produtos
   2. Renderização de produtos
   3. Filtro por categorias (abas)
   4. Carrinho de compras (adicionar, remover, atualizar)
   5. Modal do carrinho
   6. Checkout via WhatsApp
   7. Menu mobile (hambúrguer)
   8. Navegação ativa ao rolar
   9. Header fixo com sombra ao rolar
   10. Formulário de contato com validação
   11. Toast de notificações
   12. Animações de entrada (scroll reveal)
============================================================ */

'use strict';


/* ============================================================
   1. DADOS DOS PRODUTOS
============================================================ */
const produtos = [
  // ——— BUQUÊS ———
  {
    id: 1,
    nome: 'Buquê Romântico de Rosas',
    categoria: 'buques',
    categoriaLabel: 'Buquê',
    preco: 89.90,
    icon: '🌹',

    cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)',
    descricao: '12 rosas vermelhas cuidadosamente selecionadas, embrulhadas em papel especial com laço de fita.',
    destaque: true,
  },
  {
    id: 2,
    nome: 'Buquê Delicado de Lírios',
    categoria: 'buques',
    categoriaLabel: 'Buquê',
    preco: 75.00,
    icon: '🌸',

    cor: 'linear-gradient(135deg, #f3e5f5, #ce93d8)',
    descricao: 'Buquê sofisticado com lírios brancos e rosas cor-de-rosa, perfeito para momentos especiais e únicos.',
    destaque: true,
  },
  {
    id: 3,
    nome: 'Buquê Premium Misto',
    categoria: 'buques',
    categoriaLabel: 'Buquê',
    preco: 159.90,
    icon: '💐',
    cor: 'linear-gradient(135deg, #fce4ec, #ef9a9a)',
    descricao: 'Arranjo luxuoso com rosas, gérberas, alstroemérias e folhagens exóticas. Um presente inesquecível.',
    destaque: true,
  },
  {
    id: 4,
    nome: 'Buquê Girassóis Alegres',
    categoria: 'buques',
    categoriaLabel: 'Buquê',
    preco: 65.00,
    icon: '🌻',
    cor: 'linear-gradient(135deg, #fff9c4, #ffe082)',
    descricao: '7 girassóis vibrantes com folhagens verdes, transmitindo alegria e positividade em cada pétala.',
    destaque: false,
  },
  {
    id: 5,
    nome: 'Buquê Lavanda & Rosas',
    categoria: 'buques',
    categoriaLabel: 'Buquê',
    preco: 110.00,
    icon: '💜',
    cor: 'linear-gradient(135deg, #ede7f6, #b39ddb)',
    descricao: 'Combinação aromática e sofisticada de lavanda provençal com rosas cor-de-rosa delicadas.',
    destaque: false,
  },
  {
    id: 6,
    nome: 'Buquê Noiva Eterno',
    categoria: 'buques',
    categoriaLabel: 'Buquê',
    preco: 220.00,
    icon: '🤍',
    cor: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
    descricao: 'Buquê nupcial com rosas brancas, peônias e eucalipto aromático. Elegância e pureza para o seu grande dia.',
    destaque: false,
  },

  // ——— FLORES AVULSAS ———
  {
    id: 7,
    nome: 'Rosa Vermelha (Unidade)',
    categoria: 'flores',
    categoriaLabel: 'Flor Avulsa',
    preco: 9.90,
    icon: '🌹',
    cor: 'linear-gradient(135deg, #ffebee, #ef9a9a)',
    descricao: 'Rosa vermelha premium, fresca e perfumada. O símbolo eterno do amor e da paixão.',
    destaque: false,
  },
  {
    id: 8,
    nome: 'Lírio Branco (Unidade)',
    categoria: 'flores',
    categoriaLabel: 'Flor Avulsa',
    preco: 12.90,
    icon: '🌷',
    cor: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
    descricao: 'Lírio branco de elegância inigualável, ideal para ocasiões especiais e arranjos sofisticados.',
    destaque: false,
  },
  {
    id: 9,
    nome: 'Gérbera Colorida (Unidade)',
    categoria: 'flores',
    categoriaLabel: 'Flor Avulsa',
    preco: 7.90,
    icon: '🌼',
    cor: 'linear-gradient(135deg, #fff3e0, #ffcc80)',
    descricao: 'Gérbera vibrante em diversas cores: laranja, vermelho, pink e amarelo. Escolha a sua favorita!',
    destaque: false,
  },
  {
    id: 10,
    nome: 'Tulipa Importada (Unidade)',
    categoria: 'flores',
    categoriaLabel: 'Flor Avulsa',
    preco: 14.90,
    icon: '🌷',
    cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)',
    descricao: 'Tulipa importada em cores variadas: branca, rosa, roxa e vermelha. Elegância e delicadeza em cada pétala.',
    destaque: false,
  },

  // ——— CESTAS ESPECIAIS ———
  {
    id: 11,
    nome: 'Cesta Amor em Flores',
    categoria: 'cestas',
    categoriaLabel: 'Cesta Especial',
    preco: 189.90,
    icon: '🧺',
    cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)',
    descricao: 'Cesta rústica com 20 rosas, chocolates Ferrero Rocher, vinho rosé e cartão personalizado.',
    destaque: true,
  },
  {
    id: 12,
    nome: 'Cesta Feliz Aniversário',
    categoria: 'cestas',
    categoriaLabel: 'Cesta Especial',
    preco: 149.90,
    icon: '🎂',
    cor: 'linear-gradient(135deg, #fff9c4, #ffe082)',
    descricao: 'Cesta festiva com flores coloridas, balões, chocolates sortidos e mensagem especial da sua escolha.',
    destaque: false,
  },
  {
    id: 13,
    nome: 'Cesta Chá Branco',
    categoria: 'cestas',
    categoriaLabel: 'Cesta Especial',
    preco: 229.90,
    icon: '☕',
    cor: 'linear-gradient(135deg, #e8f5e9, #a5d6a7)',
    descricao: 'Cesta delicada com flores brancas e rosas, chás premium, mel artesanal e biscoitos importados finos.',
    destaque: false,
  },
  {
    id: 14,
    nome: 'Cesta Dia das Mães',
    categoria: 'cestas',
    categoriaLabel: 'Cesta Especial',
    preco: 249.90,
    icon: '💝',
    cor: 'linear-gradient(135deg, #fce4ec, #ce93d8)',
    descricao: 'Cesta especial com mix de flores, chocolates belgas, sabonetes aromáticos e uma mensagem inesquecível.',
    destaque: false,
  },

  // ——— PRESENTES ———
  {
    id: 15,
    nome: 'Kit Flores & Spa',
    categoria: 'presentes',
    categoriaLabel: 'Presente',
    preco: 179.90,
    icon: '🧴',
    cor: 'linear-gradient(135deg, #e1f5fe, #81d4fa)',
    descricao: 'Mini buquê com 6 rosas + kit spa com velas aromáticas, sais de banho e creme hidratante artesanal.',
    destaque: true,
  },
  {
    id: 16,
    nome: 'Caixinha Romântica',
    categoria: 'presentes',
    categoriaLabel: 'Presente',
    preco: 139.90,
    icon: '📦',
    cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)',
    descricao: 'Caixa luxuosa com 9 rosas dispostas artisticamente, chocolates belgas e cartão especial personalizado.',
    destaque: false,
  },
  {
    id: 17,
    nome: 'Buquê & Pelúcia',
    categoria: 'presentes',
    categoriaLabel: 'Presente',
    preco: 120.00,
    icon: '🧸',
    cor: 'linear-gradient(135deg, #fff3e0, #ffcc80)',
    descricao: 'Buquê de flores mistas com ursinho de pelúcia tamanho médio e envelope com mensagem personalizada.',
    destaque: false,
  },
];


/* ============================================================
   2. ESTADO DO CARRINHO
============================================================ */
let carrinho = [];


/* ============================================================
   3. UTILITÁRIOS
============================================================ */

/** Formata número para moeda brasileira: 89.9 → "R$ 89,90" */
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/** Mapeia slug de categoria para nome legível */
function labelCategoria(categoria) {
  const mapa = {
    buques:    'Buquês',
    flores:    'Flores Avulsas',
    cestas:    'Cestas Especiais',
    presentes: 'Presentes',
  };
  return mapa[categoria] || categoria;
}


/* ============================================================
   4. RENDERIZAÇÃO DOS PRODUTOS
============================================================ */

/**
 * Gera o HTML de um card de produto.
 * @param {Object} produto - Objeto do produto.
 * @returns {string} HTML do card.
 */
function criarCardProduto(produto) {
  const badgeHTML = produto.destaque
    ? '<span class="product-card__badge">⭐ Destaque</span>'
    : '';

  return `
    <article class="product-card reveal" data-categoria="${produto.categoria}">
      <a href="produto.html?id=${produto.id}" class="product-card__link-wrap" aria-label="Ver detalhes de ${produto.nome}">
        <div class="product-card__img" style="background: ${produto.cor};">
          ${badgeHTML}
          <span class="product-card__icon" aria-hidden="true">${produto.icon}</span>
        </div>
      </a>
      <div class="product-card__body">
        <span class="product-card__category">${produto.categoriaLabel}</span>
        <h3 class="product-card__name">
          <a href="produto.html?id=${produto.id}" class="product-card__name-link">${produto.nome}</a>
        </h3>
        <p class="product-card__desc">${produto.descricao}</p>
        <div class="product-card__footer">
          <div class="product-card__price">
            <span class="product-card__price-label">A partir de</span>
            <span class="product-card__price-value">${formatarPreco(produto.preco)}</span>
          </div>
          <button
            class="product-card__btn"
            aria-label="Adicionar ${produto.nome} ao carrinho"
            onclick="adicionarAoCarrinho(${produto.id})"
          >
            + Carrinho
          </button>
        </div>
      </div>
    </article>
  `;
}

/** Renderiza produtos em destaque na seção "Mais Vendidos" */
function renderizarDestaques() {
  const container = document.getElementById('destaquesGrid');
  if (!container) return;

  const destaques = produtos.filter(p => p.destaque);
  container.innerHTML = destaques.map(criarCardProduto).join('');
  iniciarReveal(container.querySelectorAll('.reveal'));
}

/** Renderiza todos os produtos na seção do catálogo */
function renderizarCatalogo(filtro = 'todos') {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const lista = filtro === 'todos'
    ? produtos
    : produtos.filter(p => p.categoria === filtro);

  if (lista.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: #9d9d9d; padding: 40px 0;">Nenhum produto encontrado nesta categoria.</p>';
    return;
  }

  container.innerHTML = lista.map(criarCardProduto).join('');
  iniciarReveal(container.querySelectorAll('.reveal'));
}


/* ============================================================
   5. FILTRO POR ABAS (CATEGORIAS)
============================================================ */
function iniciarAbas() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove ativo de todos os tabs
      tabs.forEach(t => {
        t.classList.remove('tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      // Ativa o tab clicado
      tab.classList.add('tab--active');
      tab.setAttribute('aria-selected', 'true');

      const categoria = tab.dataset.category;
      renderizarCatalogo(categoria);
    });
  });
}


/* ============================================================
   6. CARRINHO — Adicionar, remover e atualizar
============================================================ */

/** Adiciona um produto ao carrinho ou incrementa a quantidade */
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  const itemExistente = carrinho.find(item => item.id === id);
  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  atualizarIconeCarrinho();
  mostrarToast(`🌸 ${produto.nome} adicionado ao carrinho!`, 'pink');
}

/** Remove um item do carrinho */
function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  atualizarIconeCarrinho();
  renderizarCarrinho();
}

/** Altera a quantidade de um item (mínimo 1) */
function alterarQuantidade(id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;

  item.quantidade += delta;
  if (item.quantidade <= 0) {
    removerDoCarrinho(id);
    return;
  }

  atualizarIconeCarrinho();
  renderizarCarrinho();
}

/** Atualiza o contador do ícone do carrinho no header */
function atualizarIconeCarrinho() {
  const total = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  const contador = document.getElementById('cartCount');
  if (contador) {
    contador.textContent = total;
    // Animação de pulso
    contador.animate([
      { transform: 'scale(1.4)' },
      { transform: 'scale(1)' },
    ], { duration: 300, easing: 'ease-out' });
  }
}

/** Esvazia o carrinho */
function limparCarrinho() {
  carrinho = [];
  atualizarIconeCarrinho();
  renderizarCarrinho();
}


/* ============================================================
   7. MODAL DO CARRINHO
============================================================ */

/** Renderiza os itens no painel do carrinho */
function renderizarCarrinho() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (!body || !footer || !totalEl) return;

  if (carrinho.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <span aria-hidden="true">🌸</span>
        <p>Seu carrinho está vazio.</p>
        <button class="btn btn--outline btn--sm" onclick="fecharCarrinho()">Ver Produtos</button>
      </div>
    `;
    footer.hidden = true;
    return;
  }

  // Renderiza itens
  body.innerHTML = carrinho.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__icon" style="background: ${item.cor};">
        <span aria-hidden="true">${item.icon}</span>
      </div>
      <div class="cart-item__info">
        <p class="cart-item__name" title="${item.nome}">${item.nome}</p>
        <p class="cart-item__price">${formatarPreco(item.preco * item.quantidade)}</p>
      </div>
      <div class="cart-item__controls">
        <button class="qty-btn" onclick="alterarQuantidade(${item.id}, -1)" aria-label="Diminuir quantidade">−</button>
        <span class="cart-item__qty" aria-label="Quantidade">${item.quantidade}</span>
        <button class="qty-btn" onclick="alterarQuantidade(${item.id}, 1)" aria-label="Aumentar quantidade">+</button>
      </div>
    </div>
  `).join('');

  // Calcula total
  const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
  totalEl.textContent = formatarPreco(total);

  footer.hidden = false;
}

/** Abre o modal do carrinho */
function abrirCarrinho() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  renderizarCarrinho();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

/** Fecha o modal do carrinho */
function fecharCarrinho() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
}

/** Inicia os eventos do modal do carrinho */
function iniciarCarrinho() {
  const cartBtn   = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  const overlay   = document.getElementById('cartOverlay');
  const clearBtn  = document.getElementById('clearCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  cartBtn?.addEventListener('click', abrirCarrinho);
  cartClose?.addEventListener('click', fecharCarrinho);
  overlay?.addEventListener('click', fecharCarrinho);
  clearBtn?.addEventListener('click', () => {
    limparCarrinho();
    mostrarToast('Carrinho limpo.', 'default');
  });
  checkoutBtn?.addEventListener('click', finalizarPedido);

  // Fechar com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      fecharCarrinho();
      fecharMenu();
    }
  });
}


/* ============================================================
   8. CHECKOUT VIA WHATSAPP
============================================================ */
function finalizarPedido() {
  if (carrinho.length === 0) return;

  const total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);

  let mensagem = '🌸 *Olá! Gostaria de fazer um pedido na floristanaweb:*\n\n';

  carrinho.forEach(item => {
    mensagem += `• ${item.nome}\n`;
    mensagem += `  Qtd: ${item.quantidade}x — ${formatarPreco(item.preco)} cada\n`;
    mensagem += `  Subtotal: ${formatarPreco(item.preco * item.quantidade)}\n\n`;
  });

  mensagem += `*Total: ${formatarPreco(total)}*\n\n`;
  mensagem += 'Aguardo confirmação e informações sobre a entrega. 😊';

  const numero = '5531987654321'; // Número fictício da loja
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');

  mostrarToast('Redirecionando para o WhatsApp...', 'success');
}


/* ============================================================
   9. MENU MOBILE (HAMBÚRGUER)
============================================================ */
function iniciarMenuMobile() {
  const hamburger  = document.getElementById('hamburger');
  const nav        = document.getElementById('nav');
  const overlay    = document.getElementById('navOverlay');

  hamburger?.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    isOpen ? fecharMenu() : abrirMenu();
  });

  overlay?.addEventListener('click', fecharMenu);

  // Fechar ao clicar em um link do menu
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', fecharMenu);
  });
}

function abrirMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');
  const overlay   = document.getElementById('navOverlay');

  hamburger?.classList.add('is-open');
  hamburger?.setAttribute('aria-expanded', 'true');
  nav?.classList.add('is-open');
  overlay?.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
}

function fecharMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');
  const overlay   = document.getElementById('navOverlay');

  hamburger?.classList.remove('is-open');
  hamburger?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  overlay?.classList.remove('is-visible');
  document.body.style.overflow = '';
}


/* ============================================================
   10. NAVEGAÇÃO ATIVA AO ROLAR + HEADER COM SOMBRA
============================================================ */
function iniciarScrollBehavior() {
  const header    = document.getElementById('header');
  const navLinks  = document.querySelectorAll('.nav__link');
  const sections  = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header com sombra após rolar 10px
    if (header) {
      header.classList.toggle('header--scrolled', scrollY > 10);
    }

    // Detecta qual seção está visível e ativa o link correspondente
    let secaoAtiva = '';
    sections.forEach(section => {
      const topo = section.offsetTop - 100;
      if (scrollY >= topo) {
        secaoAtiva = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${secaoAtiva}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}


/* ============================================================
   11. FORMULÁRIO DE CONTATO — Validação e feedback
============================================================ */
function iniciarFormulario() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validarFormulario()) {
      simularEnvio();
    }
  });

  // Limpa erro ao digitar
  ['name', 'email', 'message'].forEach(campo => {
    document.getElementById(campo)?.addEventListener('input', () => {
      limparErroCampo(campo);
    });
  });
}

/** Valida os campos do formulário e exibe mensagens de erro */
function validarFormulario() {
  let valido = true;

  const nome     = document.getElementById('name');
  const email    = document.getElementById('email');
  const mensagem = document.getElementById('message');

  // Valida nome
  if (!nome.value.trim() || nome.value.trim().length < 2) {
    exibirErroCampo('name', 'Por favor, informe seu nome completo.');
    valido = false;
  } else {
    limparErroCampo('name');
  }

  // Valida email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !regexEmail.test(email.value.trim())) {
    exibirErroCampo('email', 'Por favor, informe um e-mail válido.');
    valido = false;
  } else {
    limparErroCampo('email');
  }

  // Valida mensagem
  if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
    exibirErroCampo('message', 'Por favor, escreva uma mensagem com ao menos 10 caracteres.');
    valido = false;
  } else {
    limparErroCampo('message');
  }

  return valido;
}

/** Exibe mensagem de erro em um campo */
function exibirErroCampo(campo, mensagem) {
  const input = document.getElementById(campo);
  const erro  = document.getElementById(`${campo}Error`);
  input?.classList.add('error');
  if (erro) erro.textContent = mensagem;
}

/** Remove erro de um campo */
function limparErroCampo(campo) {
  const input = document.getElementById(campo);
  const erro  = document.getElementById(`${campo}Error`);
  input?.classList.remove('error');
  if (erro) erro.textContent = '';
}

/** Simula o envio do formulário com feedback visual */
function simularEnvio() {
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const form    = document.getElementById('contactForm');

  // Estado de loading no botão
  if (btn) {
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
  }

  // Simula delay de requisição (1.5s)
  setTimeout(() => {
    // Reseta botão
    if (btn) {
      btn.textContent = 'Enviar Mensagem';
      btn.disabled = false;
      btn.style.opacity = '1';
    }

    // Mostra mensagem de sucesso
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Limpa o formulário
    form?.reset();

    // Oculta mensagem de sucesso após 6 segundos
    setTimeout(() => {
      if (success) success.hidden = true;
    }, 6000);

    mostrarToast('✅ Mensagem enviada com sucesso!', 'success');
  }, 1500);
}


/* ============================================================
   12. TOAST — Notificações flutuantes
============================================================ */
let toastTimer = null;

/**
 * Exibe uma mensagem toast temporária.
 * @param {string} mensagem - Texto a exibir.
 * @param {'default'|'success'|'error'|'pink'} tipo - Estilo visual.
 * @param {number} duracao - Duração em ms (padrão: 3000).
 */
function mostrarToast(mensagem, tipo = 'default', duracao = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  // Remove classes de tipo anteriores
  toast.classList.remove('toast--success', 'toast--error', 'toast--pink');

  if (tipo === 'success') toast.classList.add('toast--success');
  if (tipo === 'error')   toast.classList.add('toast--error');
  if (tipo === 'pink')    toast.classList.add('toast--pink');

  toast.textContent = mensagem;
  toast.classList.add('show');

  // Cancela timer anterior se existir
  if (toastTimer) clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, duracao);
}


/* ============================================================
   13. SCROLL REVEAL — Animação de entrada ao rolar
============================================================ */
function iniciarReveal(elementos) {
  const alvo = elementos || document.querySelectorAll('.reveal');
  if (!alvo.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Delay escalonado para elementos em grid
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  alvo.forEach(el => observer.observe(el));
}

/** Adiciona classe .reveal a elementos que devem animar ao entrar na tela */
function marcarElementosReveal() {
  const seletores = [
    '.feature-card',
    '.testimonial-card',
    '.mvv-card',
    '.contact-item',
    '.about__visual',
    '.about__content',
  ];
  document.querySelectorAll(seletores.join(', ')).forEach(el => {
    el.classList.add('reveal');
  });
}


/* ============================================================
   14. SMOOTH SCROLL — Para navegadores que não suportam CSS
============================================================ */
function iniciarSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const destino = document.querySelector(href);
      if (!destino) return;

      e.preventDefault();
      const offsetTopo = destino.getBoundingClientRect().top + window.scrollY;
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;

      window.scrollTo({
        top: offsetTopo - headerH,
        behavior: 'smooth',
      });
    });
  });
}


/* ============================================================
   15. INICIALIZAÇÃO — Ponto de entrada principal
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Renderiza produtos
  renderizarDestaques();
  renderizarCatalogo();

  // Inicializa componentes de UI
  iniciarAbas();
  iniciarCarrinho();
  iniciarMenuMobile();
  iniciarScrollBehavior();
  iniciarFormulario();
  iniciarSmoothScroll();

  // Marca elementos para animação e inicia o observer
  marcarElementosReveal();
  iniciarReveal();

  console.log('🌸 floristanaweb — site carregado com sucesso!');
});
