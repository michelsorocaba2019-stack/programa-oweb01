/* ===========================================
   SCRIPT PRINCIPAL - ONG Amigos dos Animais
   =========================================== */

/* ====== MENU MOBILE (hambúrguer) ====== */
function toggleMenu() {
  // Busca o elemento NAV com a classe 'menu-mobile'
  const nav = document.querySelector('.menu-mobile'); 
  // Adiciona ou remove a classe 'active' que controla a exibição do menu no CSS
  nav.classList.toggle('active'); 
}

/* ====== FEEDBACK VISUAL (TOAST) ====== */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast show ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/* ====== FORMULÁRIO DE CADASTRO ====== */
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('cadastroForm');
  // Se não estiver na página de cadastro, o restante do código não é executado
  if (!form) return; 

  // Função genérica para aplicar máscaras
  function applyMask(input, maskFunction) {
      input.addEventListener('input', function() {
          input.value = maskFunction(input.value);
      });
  }

  // Máscara de CPF
  function maskCPF(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
  }
  
  // Máscara de telefone
  function maskTelefone(value) {
    value = value.replace(/\D/g, '');
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    }
    return value;
  }

  // Máscara de CEP
  function maskCEP(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    return value;
  }

  // Aplica as máscaras aos campos
  applyMask(document.getElementById('cpf'), maskCPF);
  applyMask(document.getElementById('telefone'), maskTelefone);
  applyMask(document.getElementById('cep'), maskCEP);


  // Envio do formulário com feedback (Toast)
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    showToast('✅ Cadastro enviado com sucesso! Agradecemos o seu interesse.', 'success');
    form.reset();
  });
});