/* ===========================================
   SCRIPT PRINCIPAL - ONG Amigos dos Animais
   (Entrega 3: SPA, Templates e Validação)
   =========================================== */

/* ====== MÓDULO 1: UI BASICO (Menu e Toast) ====== */

function toggleMenu() {
  const nav = document.querySelector('.menu-mobile'); 
  nav.classList.toggle('active'); 
}

function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove(); // Remove toast anterior se houver
  
  const toast = document.createElement('div');
  toast.className = `toast show ${type}`; // classes do CSS
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

/* ====== MÓDULO 2: DADOS E TEMPLATES JS (Requisito: Templates JavaScript) ====== */

// 1. Dados dos Projetos
const projectData = [
  { 
    id: 1, 
    title: "Projeto Resgate Feliz", 
    image: "imagens/caes-e-gatos.jpg", 
    tag: "Ação Rápida", 
    tagClass: "badge-resgate",
    description: "Resgatamos cães e gatos abandonados nas ruas, oferecendo abrigo, alimentação, cuidados veterinários e muito carinho. Cada animal recebe uma nova chance de viver com dignidade e amor."
  },
  { 
    id: 2, 
    title: "Lar Temporário", 
    image: "imagens/lar.jpg", 
    tag: "Voluntariado", 
    tagClass: "badge-apoio",
    description: "Criamos uma rede de lares temporários para acolher os animais enquanto esperam por adoção. Assim, garantimos que cada um tenha um espaço seguro e cheio de amor até encontrar uma família definitiva."
  },
  { 
    id: 3, 
    title: "Educação e Conscientização", 
    image: "imagens/ensino.jpg", 
    tag: "Conscientização", 
    tagClass: "badge-educacao",
    description: "Promovemos palestras e campanhas em escolas e comunidades para conscientizar sobre o respeito, a adoção responsável e os cuidados com os animais. A mudança começa pela educação."
  },
];

// 2. Template do Card de Projeto
const projectCardTemplate = (project) => `
    <div class="card">
      <img src="${project.image}" alt="${project.title}">
      <div class="card-content">
        <h2>${project.title}</h2>
        <span class="badge ${project.tagClass}">${project.tag}</span>
        <p>${project.description}</p>
        <a href="#" class="botao">Saiba Mais</a>
      </div>
    </div>
`;

// 3. Função que gera o HTML da página de projetos usando o Template
const renderProjects = () => {
    const cardsHtml = projectData.map(projectCardTemplate).join('');
    return `
        <h1>Nossos Projetos</h1>
        <p class="intro">Conheça alguns dos nossos projetos que fazem a diferença na vida de centenas de animais resgatados. Trabalhamos com amor, responsabilidade e o desejo de transformar o futuro dos nossos amigos de quatro patas.</p>
        <div class="projetos">${cardsHtml}</div>
    `;
};


/* ====== MÓDULO 3: CONTEÚDO DAS PÁGINAS (HTML como Strings) ====== */

const homeContent = `
    <h1>Quem Somos</h1>
    <p>
      A <strong>ONG Amigos dos Animais</strong> é uma instituição sem fins lucrativos que nasceu com o propósito de
      resgatar, cuidar e encontrar um lar amoroso para cães e gatos abandonados.
      Trabalhamos com dedicação para promover a conscientização sobre adoção responsável e o respeito aos animais.
    </p>

    <section class="adocao">
      <h2>Adote um Amigo ❤️</h2>
      <p>
        Cada animal que resgatamos tem uma história única — e você pode fazer parte do novo capítulo dela.
        Nossos cães e gatos estão vacinados, castrados e prontos para receber amor de uma nova família.
        Transforme uma vida: adote, não compre!
      </p>
      <a href="#" onclick="loadPage('cadastro'); return false;" class="botao">Quero Adotar</a>
    </section>
`;

const cadastroContent = `
    <h1>Cadastro</h1>
    <form id="cadastroForm">
      <label for="nome">Nome Completo</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" required>

      <label for="cpf">CPF</label>
      <input type="text" id="cpf" name="cpf" maxlength="14" required>

      <label for="telefone">Telefone</label>
      <input type="text" id="telefone" name="telefone" maxlength="15" required>

      <label for="dataNascimento">Data de Nascimento</label>
      <input type="date" id="dataNascimento" name="dataNascimento" required>

      <label for="endereco">Endereço</label>
      <input type="text" id="endereco" name="endereco" required>

      <label for="cep">CEP</label>
      <input type="text" id="cep" name="cep" maxlength="9" required>

      <label for="cidade">Cidade</label>
      <input type="text" id="cidade" name="cidade" required>

      <label for="estado">Estado</label>
      <select id="estado" name="estado" required>
        <option value="">Selecione</option>
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AP">AP</option>
        <option value="AM">AM</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MT">MT</option>
        <option value="MS">MS</option>
        <option value="MG">MG</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PR">PR</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="RS">RS</option>
        <option value="RO">RO</option>
        <option value="RR">RR</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
        <option value="SE">SE</option>
        <option value="TO">TO</option>
      </select>

      <button type="submit" class="botao">Enviar Cadastro</button>
    </form>
`;


/* ====== MÓDULO 4: LÓGICA SPA (Requisito: SPA Básico) ====== */

function loadPage(pageName) {
    const main = document.querySelector('main');
    let content = '';
    let pageTitle = 'ONG Amigos dos Animais - SPA';

    // 1. Define o conteúdo a ser injetado e o título da página
    switch (pageName) {
        case 'home':
            content = homeContent; 
            pageTitle = 'Início - ONG Amigos dos Animais';
            break;
        case 'projetos':
            content = renderProjects(); // Usa o Template JS!
            pageTitle = 'Projetos - ONG Amigos dos Animais';
            break;
        case 'cadastro':
            content = cadastroContent; 
            pageTitle = 'Cadastro - ONG Amigos dos Animais';
            break;
        default:
            content = '<h1>Página Não Encontrada</h1>';
    }

    // 2. Injeta o novo conteúdo e atualiza o título
    main.innerHTML = content;
    document.title = pageTitle;

    // 3. Atualiza o estado visual do menu
    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    document.querySelector(`[onclick*="loadPage('${pageName}')"]`).classList.add('active');

    // 4. Re-inicializa scripts específicos da página (máscaras e formulário)
    initializePageScripts(pageName); 
}

// Intercepta o carregamento inicial da página
document.addEventListener('DOMContentLoaded', function() {
    // Intercepta cliques nos links (apenas para garantir)
    document.querySelectorAll('.menu a').forEach(link => {
        // Se o link tiver um onclick de loadPage, ele já está sendo tratado. 
        // Esta parte garante que links externos ou outros links não recarreguem a página.
        if (!link.getAttribute('onclick')) {
             link.addEventListener('click', function(e) {
                 if (link.getAttribute('href') === '#') e.preventDefault();
             });
        }
    });

    // Carrega a página inicial por padrão
    loadPage('home');
});


/* ====== MÓDULO 5: FORMULÁRIO E VALIDAÇÃO (Requisito: Validação de Consistência) ====== */

// 5.1 Funções de Máscara (Reaproveitadas do código anterior)
function maskCPF(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return value;
}
function maskTelefone(value) {
  value = value.replace(/\D/g, '');
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  }
  return value;
}
function maskCEP(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  return value;
}

// 5.2 Funções de Validação de Consistência
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(String(email).toLowerCase());
}

function isValidCPF(cpf) {
    return cpf.replace(/\D/g, '').length === 11; // Verifica se tem 11 dígitos
}

function validateForm(form) {
    let isValid = true;
    
    // Resetar estilos
    form.querySelectorAll('input, select').forEach(input => input.style.border = '1px solid #ccc');

    // 1. Validação de Campos Obrigatórios
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(input => {
        if (input.value.trim() === '' || (input.type === 'email' && !isValidEmail(input.value))) {
            input.style.border = '2px solid var(--color-danger)';
            isValid = false;
        }
    });

    // 2. Validação de Consistência Específica (com aviso ao usuário)
    const email = form.querySelector('#email');
    if (email.value.trim() !== '' && !isValidEmail(email.value)) {
        showToast('⚠️ O e-mail informado é inválido.', 'warning');
        email.style.border = '2px solid var(--color-danger)';
        isValid = false;
    }

    const cpf = form.querySelector('#cpf');
    if (cpf.value.trim() !== '' && !isValidCPF(cpf.value)) {
        showToast('⚠️ O CPF deve conter 11 dígitos.', 'warning');
        cpf.style.border = '2px solid var(--color-danger)';
        isValid = false;
    }
    
    if (form.querySelector('#estado').value === '') {
        form.querySelector('#estado').style.border = '2px solid var(--color-danger)';
        isValid = false;
    }

    if (!isValid) {
      showToast('❌ Falha no envio. Corrija os campos em destaque.', 'danger');
    }

    return isValid;
}


// 5.3 Função de Inicialização do Formulário (Chamada após o conteúdo ser injetado)
function setupCadastroForm() {
    const form = document.getElementById('cadastroForm');
    if (!form) return;

    // Aplica as máscaras aos campos (após serem injetados no DOM)
    form.querySelector('#cpf').addEventListener('input', function() { this.value = maskCPF(this.value); });
    form.querySelector('#telefone').addEventListener('input', function() { this.value = maskTelefone(this.value); });
    form.querySelector('#cep').addEventListener('input', function() { this.value = maskCEP(this.value); });
    
    // Evento de submissão
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm(form)) {
            showToast('✅ Cadastro enviado com sucesso! Agradecemos o seu interesse.', 'success');
            form.reset();
        }
    });
}

// 5.4 Inicializador de Páginas
function initializePageScripts(pageName) {
    // Configura o formulário apenas quando a página de cadastro é carregada
    if (pageName === 'cadastro') {
        // Pequeno atraso para garantir que o DOM do formulário está pronto
        setTimeout(setupCadastroForm, 10); 
    }
}