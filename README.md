# 🐶 ONG Amigos dos Animais: Projeto Final de Desenvolvimento Web

## 🚀 Visão Geral do Projeto

Este projeto é a entrega final da disciplina de **Desenvolvimento Web**, consolidando o desenvolvimento de uma interface para a ONG Amigos dos Animais. O objetivo principal é demonstrar não apenas o domínio de **HTML5, CSS3 e JavaScript**, mas também a aplicação de **práticas profissionais** essenciais, como controle de versão, acessibilidade e otimização de performance.

| Status | Versão Atual |
| :--- | :--- |
| **Completo** | [v1.0.0 ou v2.0.0, use a tag de release mais recente] |
| **Visualização** | [COLOQUE AQUI O LINK PÚBLICO DO SEU DEPLOY (Ex: GitHub Pages, Netlify, Vercel)] |

---

## 🎯 Requisitos da Entrega Final (Consolidação Profissional)

O projeto foi submetido a um processo de finalização para atender rigorosamente às especificações técnicas obrigatórias de práticas de mercado:

### 1. ⚙️ Controle de Versão (Git/GitHub)

O desenvolvimento seguiu uma metodologia estruturada para garantir a rastreabilidade, organização e manutenção do código:

* **Estratégia de Branching:** Foi adotado o modelo **GitFlow**, utilizando *branches* principais (`main` para produção e `develop` para desenvolvimento) e *branches* de `feature/` (para novas funcionalidades) ou `fix/` (para correções).
* **Commits Semânticos:** O histórico de *commits* segue a convenção de Commits Semânticos (ex: `feat:`, `fix:`, `docs:`) para descrever de forma clara e concisa a natureza de cada alteração.
* **Sistema de Releases:** Utilização do **Versionamento Semântico (SemVer)** através de tags (ex: `v1.0.0`) para marcar pontos estáveis e releases de produção.
* **Gestão de Tarefas:** Utilização de *Issues* para rastreamento de bugs e *Milestones* para agrupar tarefas relacionadas a cada grande entrega.

### 2. ♿ Acessibilidade (WCAG 2.1 Nível AA)

A interface foi desenvolvida para ser utilizável pelo maior número de pessoas, independentemente de dispositivos ou deficiências:

* **Estrutura Semântica:** Uso de elementos HTML semânticos (`<header>`, `<main>`, `<nav>`, `<footer>`) e atributos ARIA (`role`, `aria-label`, `aria-expanded`) para auxiliar a navegação por leitores de tela.
* **Navegação por Teclado:** Suporte completo à navegação por teclado (via tecla `Tab`) para todos os elementos interativos (links, botões, formulários).
* **Contraste Mínimo:** Todas as combinações de cores de fundo e texto garantem a proporção mínima de **4.5:1** (Nível AA), inclusive nos estados de foco e hover.
* **Modo de Alto Contraste:** Implementação de uma funcionalidade de `toggleHighContrast()` via JavaScript, que aplica uma classe (`.high-contrast`) para usuários com baixa visão.

### 3. ⚡ Otimização para Produção

O projeto foi otimizado para garantir carregamento rápido e eficiência:

* **Minificação de JavaScript e CSS:** Os arquivos `script.js` e o CSS (gerado via SASS) foram minificados para `script.min.js` e `estilo.min.css`, removendo caracteres desnecessários.
* **Minificação de HTML:** Os arquivos de estrutura (`index.html`, `projeto.html`, `cadastro.html`) foram minificados usando o `html-minifier` (via NPM) para reduzir o tamanho de *payload*.
* **Compressão de Imagens:** Todas as imagens utilizadas no projeto (no diretório `Imagens/`) foram processadas usando **[TinyPNG/Compressor.io]** para otimização do tamanho do arquivo sem perda perceptível de qualidade.

---

## 💻 Estrutura e Tecnologias

### Estrutura de Arquivos