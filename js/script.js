let slideIndex = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');

document.querySelector('.next').addEventListener('click', () => {
  moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  moveToPrevSlide();
});

function moveToNextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateCarousel();
}

function moveToPrevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function currentSlide(index) {
  slideIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const offset = -slideIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;

  // Atualizar os indicadores
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === slideIndex);
  });
}

// Alternar automaticamente a cada 3 segundos
setInterval(() => {
  moveToNextSlide();
}, 3000);

// Iniciar o carousel com o primeiro slide ativo
updateCarousel();

// Fim do carousel



// Início do carrinho

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Verificar se o produto já existe no carrinho
  let produtoExistente = carrinho.find(produto => produto.nome === nomeProduto);
  if (produtoExistente) {
      produtoExistente.quantidade++;
  } else {
      carrinho.push({
          nome: nomeProduto,
          preco: precoProduto,
          quantidade: 1
      });
  }

  // Atualizar o carrinho no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  atualizarCarrinho();
}

// Função para atualizar o carrinho 
function atualizarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let totalItens = carrinho.reduce((acc, produto) => acc + produto.quantidade, 0);
  document.querySelector('.Cart span').textContent = totalItens;
}