/*mobile*/
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');



    /*scroll leve*/
    functions scrollactive(SelectionId){
        const section =document.getElementById(SelectionId);

        if(!section) return;

        const headerHeight = 70;
        const sectionPosition = section.offsetTop - headerHeight;

        window.scrollTo({top: sectionPosition, behavior: 'smooth'});)

        const menu = document.getElementById('navMenu');
        menu.classList.remove('active');


/*Cadastro*/
function handesubmit(event){
    event.preventDefault();

    const form = document.getElementById('volunteerForm');

    const formData ={
        name: form.name.value,
        email: form.email.value,
        cpf: form.cpf.value,
        telefone: form.telefone.value,

        dataCadastro: new Date().toLocaleDateString() DD/MM/YYYY = 22/10/2025
    }


let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
voluntarios.push(formData);
localStorage.setItem('voluntarios', JSON.stringify(voluntarios));


const SucessoMessage = document.getElementById('successMessage');
SucessoMessage.classList.add('show')
SucessoMessage.scrollIntoView({behavior: 'smooth, block: 'center'});

setTimeout(() => form.reset(), 2000);
setTimeout(() => SucessoMessage.classList.remove('show'), 3000);

exibirVoluntarios();

function exibirVoluntarios(){
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    const tabelaContainer = document.getElementById('tabelavoluntarios');

    if(!tabelaContainer) return;

    if(voluntarios.length === 0){
        tabelaContainer.innerHTML = '<p>Nenhum voluntário cadastrado ainda.</p>';

        