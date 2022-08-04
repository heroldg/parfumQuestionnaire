const btnConnection = document.querySelector('#btn-connection');
const inputPseudo = document.querySelector('#input-pseudo');

btnConnection.onclick = function () {
    localStorage.setItem('user', inputPseudo.value); // Sauvegarde le pseudo dans le localStorage
    document.location.href = 'quiz.html'; // Redirige vers quiz.html
};