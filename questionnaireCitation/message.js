const btnSendMessage = document.querySelector('#btn-send-message');
const textareaMessage = document.querySelector('#textarea-message');

btnSendMessage.onclick = function () {
    localStorage.setItem('message', textareaMessage.value); // Sauvegarde le message dans le localStorage
    document.location.href = 'citationQuestionnaire.html'; // Redirige vers quiz.html
};