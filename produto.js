'use strict';

/* ============================================================
   DADOS DOS PRODUTOS (espelho de script.js)
============================================================ */
const produtos = [
  { id: 1,  nome: 'Buquê Romântico de Rosas',    categoria: 'buques',    categoriaLabel: 'Buquê',          preco: 89.90,  icon: '🌹', cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)', descricao: '12 rosas vermelhas cuidadosamente selecionadas, embrulhadas em papel especial com laço de fita.', destaque: true },
  { id: 2,  nome: 'Buquê Delicado de Lírios',    categoria: 'buques',    categoriaLabel: 'Buquê',          preco: 75.00,  icon: '🌸', cor: 'linear-gradient(135deg, #f3e5f5, #ce93d8)', descricao: 'Buquê sofisticado com lírios brancos e rosas cor-de-rosa, perfeito para momentos especiais e únicos.', destaque: true },
  { id: 3,  nome: 'Buquê Premium Misto',         categoria: 'buques',    categoriaLabel: 'Buquê',          preco: 159.90, icon: '💐', cor: 'linear-gradient(135deg, #fce4ec, #ef9a9a)', descricao: 'Arranjo luxuoso com rosas, gérberas, alstroemérias e folhagens exóticas. Um presente inesquecível.', destaque: true },
  { id: 4,  nome: 'Buquê Girassóis Alegres',     categoria: 'buques',    categoriaLabel: 'Buquê',          preco: 65.00,  icon: '🌻', cor: 'linear-gradient(135deg, #fff9c4, #ffe082)', descricao: '7 girassóis vibrantes com folhagens verdes, transmitindo alegria e positividade em cada pétala.', destaque: false },
  { id: 5,  nome: 'Buquê Lavanda & Rosas',       categoria: 'buques',    categoriaLabel: 'Buquê',          preco: 110.00, icon: '💜', cor: 'linear-gradient(135deg, #ede7f6, #b39ddb)', descricao: 'Combinação aromática e sofisticada de lavanda provençal com rosas cor-de-rosa delicadas.', destaque: false },
  { id: 6,  nome: 'Buquê Noiva Eterno',          categoria: 'buques',    categoriaLabel: 'Buquê',          preco: 220.00, icon: '🤍', cor: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)', descricao: 'Buquê nupcial com rosas brancas, peônias e eucalipto aromático. Elegância e pureza para o seu grande dia.', destaque: false },
  { id: 7,  nome: 'Rosa Vermelha (Unidade)',      categoria: 'flores',    categoriaLabel: 'Flor Avulsa',    preco: 9.90,   icon: '🌹', cor: 'linear-gradient(135deg, #ffebee, #ef9a9a)', descricao: 'Rosa vermelha premium, fresca e perfumada. O símbolo eterno do amor e da paixão.', destaque: false },
  { id: 8,  nome: 'Lírio Branco (Unidade)',       categoria: 'flores',    categoriaLabel: 'Flor Avulsa',    preco: 12.90,  icon: '🌷', cor: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)', descricao: 'Lírio branco de elegância inigualável, ideal para ocasiões especiais e arranjos sofisticados.', destaque: false },
  { id: 9,  nome: 'Gérbera Colorida (Unidade)',   categoria: 'flores',    categoriaLabel: 'Flor Avulsa',    preco: 7.90,   icon: '🌼', cor: 'linear-gradient(135deg, #fff3e0, #ffcc80)', descricao: 'Gérbera vibrante em diversas cores: laranja, vermelho, pink e amarelo. Escolha a sua favorita!', destaque: false },
  { id: 10, nome: 'Tulipa Importada (Unidade)',   categoria: 'flores',    categoriaLabel: 'Flor Avulsa',    preco: 14.90,  icon: '🌷', cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)', descricao: 'Tulipa importada em cores variadas: branca, rosa, roxa e vermelha. Elegância e delicadeza em cada pétala.', destaque: false },
  { id: 11, nome: 'Cesta Amor em Flores',         categoria: 'cestas',    categoriaLabel: 'Cesta Especial', preco: 189.90, icon: '🧺', cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)', descricao: 'Cesta rústica com 20 rosas, chocolates Ferrero Rocher, vinho rosé e cartão personalizado.', destaque: true },
  { id: 12, nome: 'Cesta Feliz Aniversário',      categoria: 'cestas',    categoriaLabel: 'Cesta Especial', preco: 149.90, icon: '🎂', cor: 'linear-gradient(135deg, #fff9c4, #ffe082)', descricao: 'Cesta festiva com flores coloridas, balões, chocolates sortidos e mensagem especial da sua escolha.', destaque: false },
  { id: 13, nome: 'Cesta Chá Branco',             categoria: 'cestas',    categoriaLabel: 'Cesta Especial', preco: 229.90, icon: '☕', cor: 'linear-gradient(135deg, #e8f5e9, #a5d6a7)', descricao: 'Cesta delicada com flores brancas e rosas, chás premium, mel artesanal e biscoitos importados finos.', destaque: false },
  { id: 14, nome: 'Cesta Dia das Mães',           categoria: 'cestas',    categoriaLabel: 'Cesta Especial', preco: 249.90, icon: '💝', cor: 'linear-gradient(135deg, #fce4ec, #ce93d8)', descricao: 'Cesta especial com mix de flores, chocolates belgas, sabonetes aromáticos e uma mensagem inesquecível.', destaque: false },
  { id: 15, nome: 'Kit Flores & Spa',             categoria: 'presentes', categoriaLabel: 'Presente',       preco: 179.90, icon: '🧴', cor: 'linear-gradient(135deg, #e1f5fe, #81d4fa)', descricao: 'Mini buquê com 6 rosas + kit spa com velas aromáticas, sais de banho e creme hidratante artesanal.', destaque: true },
  { id: 16, nome: 'Caixinha Romântica',           categoria: 'presentes', categoriaLabel: 'Presente',       preco: 139.90, icon: '📦', cor: 'linear-gradient(135deg, #fce4ec, #f48fb1)', descricao: 'Caixa luxuosa com 9 rosas dispostas artisticamente, chocolates belgas e cartão especial personalizado.', destaque: false },
  { id: 17, nome: 'Buquê & Pelúcia',              categoria: 'presentes', categoriaLabel: 'Presente',       preco: 120.00, icon: '🧸', cor: 'linear-gradient(135deg, #fff3e0, #ffcc80)', descricao: 'Buquê de flores mistas com ursinho de pelúcia tamanho médio e envelope com mensagem personalizada.', destaque: false },
];

/* ============================================================
   AVALIAÇÕES POR PRODUTO (simuladas)
============================================================ */
const avaliacoesPorProduto = {
  default: [
    { nome: 'Marina Souza',    avatar: 'M', estrelas: 5, data: 'Março 2024',    texto: 'Ficou lindo demais! As flores eram super frescas e a embalagem impecável. Com certeza vou pedir sempre aqui!' },
    { nome: 'Carla Ferreira',  avatar: 'C', estrelas: 5, data: 'Fevereiro 2024', texto: 'Presenteei minha mãe e ela amou! Entrega rápida e o produto chegou exatamente como na foto. Recomendo muito!' },
    { nome: 'Juliana Alves',   avatar: 'J', estrelas: 5, data: 'Janeiro 2024',   texto: 'Serviço impecável! Pedi pelo WhatsApp e em menos de 2 horas chegou. As flores eram as mais bonitas que já vi!' },
    { nome: 'Patricia Lima',   avatar: 'P', estrelas: 4, data: 'Dezembro 2023',  texto: 'Muito bonito, superou minhas expectativas. Só achei que poderia ter mais folhagens, mas no geral adorei!' },
  ],
  1: [
    { nome: 'Ana Beatriz',     avatar: 'A', estrelas: 5, data: 'Abril 2024',     texto: 'As rosas chegaram maravilhosas! Presenteei meu marido e ele ficou encantado. Vou pedir sempre aqui!' },
    { nome: 'Fernanda Costa',  avatar: 'F', estrelas: 5, data: 'Março 2024',     texto: '12 rosas lindíssimas e perfumadas! Embalagem sofisticada com laço dourado. Simplesmente perfeito!' },
    { nome: 'Roberta Dias',    avatar: 'R', estrelas: 5, data: 'Fevereiro 2024', texto: 'Flores frescas e bonitas. A entrega foi pontual e o cartão personalizado foi um toque especial.' },
    { nome: 'Camila Torres',   avatar: 'C', estrelas: 4, data: 'Janeiro 2024',   texto: 'Ótimo custo-benefício! As rosas estavam em ótimo estado e duraram mais de uma semana.' },
  ],
  3: [
    { nome: 'Giovanna Silva',  avatar: 'G', estrelas: 5, data: 'Abril 2024',     texto: 'O buquê premium é de outro nível! Mix de flores lindo com folhagens exóticas. Minha namorada ficou sem palavras!' },
    { nome: 'Letícia Ramos',   avatar: 'L', estrelas: 5, data: 'Março 2024',     texto: 'Vale cada centavo. Presente mais bonito que já dei. A caixa de presente veio super bem embalada.' },
    { nome: 'Beatriz Moura',   avatar: 'B', estrelas: 5, data: 'Fevereiro 2024', texto: 'Pedi para aniversário e foi um sucesso! As flores eram frescas e o arranjo muito bem feito. Recomendo!' },
    { nome: 'Vanessa Nunes',   avatar: 'V', estrelas: 4, data: 'Janeiro 2024',   texto: 'Produto excelente! Entrega no prazo e flores lindas. Com certeza voltarei a comprar.' },
  ],
  11: [
    { nome: 'Renata Oliveira', avatar: 'R', estrelas: 5, data: 'Abril 2024',     texto: 'A cesta Amor em Flores é incrível! Vinho, chocolates e flores num presente só. Meu noivo ficou emocionado!' },
    { nome: 'Daniela Castro',  avatar: 'D', estrelas: 5, data: 'Março 2024',     texto: 'Presenteei minha melhor amiga e ela chorou de emoção. A cesta veio belíssima e os itens de ótima qualidade!' },
    { nome: 'Isabela Mendes',  avatar: 'I', estrelas: 5, data: 'Fevereiro 2024', texto: 'Compra impecável! Tudo fresquinho, embalagem caprichada. Os chocolates Ferrero Rocher foram um luxo!' },
    { nome: 'Samara Ribeiro',  avatar: 'S', estrelas: 5, data: 'Janeiro 2024',   texto: 'Melhor presente de aniversário que já dei! A floristanaweb sabe como encantar as pessoas. Super recomendo!' },
  ],
};


/* ============================================================
   UTILITÁRIOS
============================================================ */
let carrinho = [];

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function parcelarPreco(preco) {
  const parcelas = 3;
  const valorParcela = preco / parcelas;
  return `ou 3x de ${formatarPreco(valorParcela)} sem juros`;
}

function gerarStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}


/* ============================================================
   CARRINHO (reutilizado do site principal)
============================================================ */
function adicionarAoCarrinho(id, quantidade = 1) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  const existente = carrinho.find(i => i.id === id);
  if (existente) {
    existente.quantidade += quantidade;
  } else {
    carrinho.push({ ...produto, quantidade });
  }

  atualizarIconeCarrinho();
  mostrarToast(`🌸 ${produto.nome} adicionado ao carrinho!`, 'pink');
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(i => i.id !== id);
  atualizarIconeCarrinho();
  renderizarCarrinho();
}

function alterarQuantidade(id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;
  item.quantidade += delta;
  if (item.quantidade <= 0) { removerDoCarrinho(id); return; }
  atualizarIconeCarrinho();
  renderizarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  atualizarIconeCarrinho();
  renderizarCarrinho();
}

function atualizarIconeCarrinho() {
  const total = carrinho.reduce((s, i) => s + i.quantidade, 0);
  const el = document.getElementById('cartCount');
  if (el) {
    el.textContent = total;
    el.animate([{ transform: 'scale(1.4)' }, { transform: 'scale(1)' }], { duration: 300 });
  }
}

function renderizarCarrinho() {
  const body   = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const totalEl= document.getElementById('cartTotal');
  if (!body) return;

  if (carrinho.length === 0) {
    body.innerHTML = `<div class="cart-empty"><span>🌸</span><p>Seu carrinho está vazio.</p><a href="index.html#produtos" class="btn btn--outline btn--sm">Ver Produtos</a></div>`;
    if (footer) footer.hidden = true;
    return;
  }

  body.innerHTML = carrinho.map(item => `
    <div class="cart-item">
      <div class="cart-item__icon" style="background:${item.cor}"><span>${item.icon}</span></div>
      <div class="cart-item__info">
        <p class="cart-item__name" title="${item.nome}">${item.nome}</p>
        <p class="cart-item__price">${formatarPreco(item.preco * item.quantidade)}</p>
      </div>
      <div class="cart-item__controls">
        <button class="qty-btn" onclick="alterarQuantidade(${item.id},-1)">−</button>
        <span class="cart-item__qty">${item.quantidade}</span>
        <button class="qty-btn" onclick="alterarQuantidade(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const total = carrinho.reduce((s, i) => s + i.preco * i.quantidade, 0);
  if (totalEl) totalEl.textContent = formatarPreco(total);
  if (footer) footer.hidden = false;
}

function abrirCarrinho() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  renderizarCarrinho();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function fecharCarrinho() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
}

function finalizarPedido() {
  if (!carrinho.length) return;
  const total = carrinho.reduce((s, i) => s + i.preco * i.quantidade, 0);
  let msg = '🌸 *Olá! Gostaria de fazer um pedido na floristanaweb:*\n\n';
  carrinho.forEach(i => {
    msg += `• ${i.nome}\n  Qtd: ${i.quantidade}x — ${formatarPreco(i.preco)} cada\n  Subtotal: ${formatarPreco(i.preco * i.quantidade)}\n\n`;
  });
  msg += `*Total: ${formatarPreco(total)}*\n\nAguardo confirmação e informações sobre a entrega. 😊`;
  window.open(`https://wa.me/5531987654321?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

function iniciarCarrinho() {
  document.getElementById('cartBtn')?.addEventListener('click', abrirCarrinho);
  document.getElementById('cartClose')?.addEventListener('click', fecharCarrinho);
  document.getElementById('cartOverlay')?.addEventListener('click', fecharCarrinho);
  document.getElementById('clearCartBtn')?.addEventListener('click', () => { limparCarrinho(); mostrarToast('Carrinho limpo.', 'default'); });
  document.getElementById('checkoutBtn')?.addEventListener('click', finalizarPedido);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharCarrinho(); });
}


/* ============================================================
   TOAST
============================================================ */
let toastTimer = null;
function mostrarToast(msg, tipo = 'default', dur = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.remove('toast--success', 'toast--error', 'toast--pink');
  if (tipo === 'success') toast.classList.add('toast--success');
  if (tipo === 'error')   toast.classList.add('toast--error');
  if (tipo === 'pink')    toast.classList.add('toast--pink');
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), dur);
}


/* ============================================================
   MENU MOBILE
============================================================ */
function iniciarMenuMobile() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');
  const overlay   = document.getElementById('navOverlay');

  hamburger?.addEventListener('click', () => {
    const open = nav.classList.contains('is-open');
    if (open) {
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      overlay?.classList.remove('is-visible');
      document.body.style.overflow = '';
    } else {
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      nav.classList.add('is-open');
      overlay?.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    }
  });

  overlay?.addEventListener('click', () => {
    hamburger?.classList.remove('is-open');
    nav?.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  });
}


/* ============================================================
   HEADER SCROLL
============================================================ */
function iniciarScrollBehavior() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('header--scrolled', window.scrollY > 10);
  }, { passive: true });
}


/* ============================================================
   CARD DE PRODUTO RELACIONADO
============================================================ */
function criarCardRelacionado(p) {
  const badge = p.destaque ? '<span class="product-card__badge">⭐ Destaque</span>' : '';
  return `
    <article class="product-card reveal">
      <a href="produto.html?id=${p.id}" class="product-card__link-wrap" aria-label="Ver ${p.nome}">
        <div class="product-card__img" style="background:${p.cor};">
          ${badge}
          <span class="product-card__icon" aria-hidden="true">${p.icon}</span>
        </div>
      </a>
      <div class="product-card__body">
        <span class="product-card__category">${p.categoriaLabel}</span>
        <h3 class="product-card__name">${p.nome}</h3>
        <p class="product-card__desc">${p.descricao}</p>
        <div class="product-card__footer">
          <div class="product-card__price">
            <span class="product-card__price-label">A partir de</span>
            <span class="product-card__price-value">${formatarPreco(p.preco)}</span>
          </div>
          <button class="product-card__btn" onclick="adicionarAoCarrinho(${p.id})">+ Carrinho</button>
        </div>
      </div>
    </article>
  `;
}


/* ============================================================
   SCROLL REVEAL
============================================================ */
function iniciarReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('is-visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}


/* ============================================================
   RENDERIZAR AVALIAÇÕES
============================================================ */
function renderizarAvaliacoes(produtoId) {
  const lista = avaliacoesPorProduto[produtoId] || avaliacoesPorProduto.default;
  const container = document.getElementById('pdReviewsList');
  if (!container) return;

  container.innerHTML = lista.map(av => `
    <article class="pd-review-card reveal">
      <div class="pd-review-top">
        <div class="pd-review-avatar">${av.avatar}</div>
        <div class="pd-review-meta">
          <strong>${av.nome}</strong>
          <span class="pd-review-date">${av.data}</span>
        </div>
        <div class="pd-review-stars" aria-label="${av.estrelas} estrelas">
          ${gerarStars(av.estrelas)}
        </div>
      </div>
      <p class="pd-review-text">"${av.texto}"</p>
    </article>
  `).join('');
}


/* ============================================================
   PÁGINA DO PRODUTO — INICIALIZAÇÃO
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Lê ID da URL
  const params  = new URLSearchParams(window.location.search);
  const id      = parseInt(params.get('id'), 10);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    document.title = 'Produto não encontrado | floristanaweb';
    document.querySelector('.pd-section').innerHTML = `
      <div class="container" style="padding:80px 0; text-align:center;">
        <h2>Produto não encontrado 😢</h2>
        <p style="margin:16px 0 32px">Verifique o link ou volte para o catálogo.</p>
        <a href="index.html#produtos" class="btn btn--primary">Ver Todos os Produtos</a>
      </div>
    `;
    iniciarCarrinho();
    iniciarMenuMobile();
    iniciarScrollBehavior();
    return;
  }

  /* ── Atualiza <title> e meta description ── */
  document.title = `${produto.nome} | floristanaweb`;
  document.querySelector('meta[name="description"]').content =
    `${produto.nome} — ${produto.descricao} floristanaweb: floricultura premium desde 2009.`;

  /* ── Breadcrumb ── */
  document.getElementById('breadcrumbCategoria').textContent = produto.categoriaLabel;
  document.getElementById('breadcrumbNome').textContent      = produto.nome;

  /* ── Imagem principal ── */
  const imgMain = document.getElementById('pdImgMain');
  imgMain.style.background = produto.cor;
  document.getElementById('pdIcon').textContent = produto.icon;
  document.getElementById('pdThumb0Icon').textContent = produto.icon;

  const badge = document.getElementById('pdBadge');
  if (produto.destaque) badge.hidden = false;

  /* ── Info do produto ── */
  document.getElementById('pdCategoria').textContent = produto.categoriaLabel;
  document.getElementById('pdNome').textContent      = produto.nome;
  document.getElementById('pdPreco').textContent     = formatarPreco(produto.preco);
  document.getElementById('pdParcel').textContent    = parcelarPreco(produto.preco);
  document.getElementById('pdDescricao').textContent = produto.descricao;
  document.getElementById('pdDescFull').textContent  = produto.descricao;

  /* ── Número de avaliações (varia por produto) ── */
  const reviewCounts = { 1: 48, 2: 32, 3: 61, 4: 19, 5: 27, 6: 14, 7: 88, 8: 45, 9: 72, 10: 38, 11: 53, 12: 29, 13: 17, 14: 41, 15: 35, 16: 22, 17: 26 };
  const total = reviewCounts[id] || 48;
  document.getElementById('pdReviewCount').textContent  = total;
  document.getElementById('pdReviewTotal').textContent  = `${total} avaliações`;

  /* ── Controle de quantidade ── */
  let qty = 1;
  const qtyVal = document.getElementById('pdQtyVal');

  document.getElementById('pdQtyMinus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyVal.textContent = qty; }
  });
  document.getElementById('pdQtyPlus').addEventListener('click', () => {
    qty++;
    qtyVal.textContent = qty;
  });

  /* ── Botão "Adicionar ao Carrinho" ── */
  document.getElementById('pdAddCart').addEventListener('click', () => {
    adicionarAoCarrinho(produto.id, qty);
  });

  /* ── Botão "Comprar pelo WhatsApp" ── */
  document.getElementById('pdBuyNow').addEventListener('click', () => {
    const msg = `🌸 Olá! Gostaria de comprar:\n\n• *${produto.nome}*\n  Qtd: ${qty}x — ${formatarPreco(produto.preco)} cada\n  *Total: ${formatarPreco(produto.preco * qty)}*\n\nAguardo confirmação e informações sobre a entrega. 😊`;
    window.open(`https://wa.me/5531987654321?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  });

  /* ── Abas ── */
  const tabs  = document.querySelectorAll('.pd-tab');
  const panes = document.querySelectorAll('.pd-tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t  => { t.classList.remove('pd-tab--active');  t.setAttribute('aria-selected', 'false'); });
      panes.forEach(p => p.classList.remove('pd-tab-pane--active'));

      tab.classList.add('pd-tab--active');
      tab.setAttribute('aria-selected', 'true');
      const target = document.getElementById(`tab-${tab.dataset.tab}`);
      if (target) target.classList.add('pd-tab-pane--active');
    });
  });

  /* ── Miniaturas (thumb click) ── */
  document.querySelectorAll('.pd-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('pd-thumb--active'));
      thumb.classList.add('pd-thumb--active');
    });
  });

  /* ── Avaliações ── */
  renderizarAvaliacoes(produto.id);

  /* ── Produtos relacionados ── */
  const relacionados = produtos
    .filter(p => p.categoria === produto.categoria && p.id !== produto.id)
    .slice(0, 4);

  const relGrid = document.getElementById('pdRelatedGrid');
  if (relGrid) {
    if (relacionados.length) {
      relGrid.innerHTML = relacionados.map(criarCardRelacionado).join('');
    } else {
      // Se não há da mesma categoria, mostra destaques
      relGrid.innerHTML = produtos
        .filter(p => p.destaque && p.id !== produto.id)
        .slice(0, 4)
        .map(criarCardRelacionado).join('');
    }
  }

  /* ── UI ── */
  iniciarCarrinho();
  iniciarMenuMobile();
  iniciarScrollBehavior();

  // Marca elementos para reveal e inicia observer
  document.querySelectorAll('.pd-review-card, .pd-trust-item, .product-card').forEach(el => {
    el.classList.add('reveal');
  });
  iniciarReveal();

  console.log(`🌸 floristanaweb — produto carregado: ${produto.nome}`);
});
