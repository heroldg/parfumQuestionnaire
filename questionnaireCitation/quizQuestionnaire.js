// if (!localStorage.getItem('user')) {
//     alert('Connectez vous avant de pouvoir jouer');
//     document.location.href = 'index.html';
// }
// const imgCheck = document.querySelector('#img-check');
const imgCheck = document.querySelector('#img-check');
const h1Title = document.querySelector('#title');
const divChoices = document.querySelector('#choices');
const buttonValider = document.querySelector('#submit-response');

const label1 = document.querySelector('#label-choice-1');
const label2 = document.querySelector('#label-choice-2');
const label3 = document.querySelector('#label-choice-3');
const label4 = document.querySelector('#label-choice-4');
const label5 = document.querySelector('#label-choice-5');
const label6 = document.querySelector('#label-choice-6');
const label7 = document.querySelector('#label-choice-7');
const label8 = document.querySelector('#label-choice-8');
const label9 = document.querySelector('#label-choice-9');
const label10 = document.querySelector('#label-choice-10');

const radio1 = document.querySelector('#choice-1');
const radio2 = document.querySelector('#choice-2');
const radio3 = document.querySelector('#choice-3');
const radio4 = document.querySelector('#choice-4');
const radio5 = document.querySelector('#choice-5');
const radio6 = document.querySelector('#choice-6');
const radio7 = document.querySelector('#choice-7');
const radio8 = document.querySelector('#choice-8');
const radio9 = document.querySelector('#choice-9');
const radio10 = document.querySelector('#choice-10');

const questions = [
    {
        image: '',
        title: 'Comment vous sentez vous aujourdh\'hui ? Lundi',
        choices: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
        Response: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
    },
    {
        image: '',
        title: 'Comment vous sentez vous aujourdh\'hui ? Mardi',
        choices: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
        Response: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],

    },
    {
        image: '',
        title: 'Comment vous sentez vous aujourdh\'hui ? Mercredi',
        choices: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
        Response: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],

    },
    {
        image: '',
        title: 'Comment vous sentez vous aujourdh\'hui ? Jeudi',
        choices: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
        Response: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
    },

    {
        image: '',
        title: 'Comment vous sentez vous aujourdh\'hui ? Vendredi',
        choices: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
        Response: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
    },

    {
        image: '',
        title: 'Comment vous sentez vous aujourdh\'hui ? Samedi',
        choices: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
        Response: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
    },

    {
        image: '',
        title: 'Comment vous sentez vous aujourdh\'hui ? Dimanche',
        choices: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
        Response: ['1', '2', '3', '4', '5','6', '7', '8', '9' ,'10'],
    }
    
];

let questionsIndex = 0;



let lundi = 0;
let mardi = 0;
let mercredi = 0;
let jeudi = 0;
let vendredi = 0;
let samedi = 0;
let dimanche = 0;
let score = 0;
let timer = 0;
// let timerVisible = 0;

/*
 * Chronomètre qui démare au chargement de la page
 */
let interval = setInterval(
    function () {
        timer++;
        buttonValider.textContent = `Valider`;   //'Valider (' + timer + 's)';
    },
    1000
);

nextQuestion();

buttonValider.onclick = function () {
    console.log("choices: " + questions[questionsIndex].choices, " Response: " + questions[questionsIndex].Response   );
    checkResponse();
    semaine();
    

};
function semaine(){
    
    switch (questionsIndex) {
        case 1:
            if (radio1.checked) {
                lundi = score;
            }
            break;
        case 2:
            if (radio2.checked) {
                mardi = score;
            }
            break;
        case 3:
            if (radio3.checked) {
                mercredi = score;
            }
            break;
        case 4:
            if (radio4.checked) {
                jeudi = score;
            }
            break;
        case 5:
            if (radio5.checked) {
                vendredi = score;
            }
            break;
        case 6:
            if (radio6.checked) {
                samedi++;
            }
            break;
        case 7:
            if (radio7.checked) {
                dimanche++;
            }
            break;
        default:
            // Handle other cases if needed
            break;
    }
    

}




/**
 * Fonction qui check la réponse et qui augmente le score
 * 
*/
// let selectedRadio;
// let selectedLabel;
// switch (ch) {
    //             case radio1:
    //             case radio2:
    //             case radio3:
    //             case radio4:
    //             case radio4:
    //             case radio5:
    //             case radio6:
    //             case radio7:
    //             case radio8:
    //             case radio9:
    //             case radio10:
    //                 if (selectedLabel.textContent == questions[questionsIndex].Response[0]) {
    //                     score++;
    //                 }
    //                 break;
    //                 default:
    //                     if (!radio1.checked && !radio2.checked && !radio3.checked && !radio4.checked && !radio5.checked && !radio6.checked && !radio7.checked && !radio8.checked && !radio9.checked && !radio10.checked) {
    //                         alert('Veuillez choisir une réponse!');
    //                         return;
    //                     }
    //                     break;
    //                 }


function checkResponse() {
    
    console.log("1:" + radio1.checked ,"2:" + radio2.checked ,"3:" + radio3.checked ,"4:" +  radio4.checked ,"5:" + radio5.checked ,"6:" + radio6.checked ,"7:" + radio7.checked ,"8:" + radio8.checked ,"9:" + radio9.checked ,"10:" + radio10.checked);

    switch (questions[questionsIndex].choices) {
        case '1':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (radio1.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '2':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '2' && radio2.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '3':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '3' && radio3.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '4':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '4' && radio4.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '5':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '5' && radio5.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '6':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '6' && radio6.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '7':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '7' && radio7.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '8':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '8'&& radio8.checked ) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '9':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '9' && radio9.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        case '10':
            for (let index = 0; index < questions[questionsIndex].Response.length; index++) {
                if (questions[questionsIndex].Response[index] == '10' && radio10.checked) {
                    score += parseInt(questions[questionsIndex].Response[index], 10)
                }
                
            }
            break;
    
        default:
            break;
    }
    
    if (radio1.checked && label1.textContent == questions[questionsIndex].Response) {
        score++;   
        
    } else if (radio2.checked && label2.textContent == questions[questionsIndex].Response) {
        score++;
    } else if (radio3.checked && label3.textContent == questions[questionsIndex].Response) {
        score++;
    }
    else if (!radio1.checked && !radio2.checked && !radio3.checked && !radio4.checked && !radio5.checked && !radio6.checked && !radio7.checked && !radio8.checked && !radio9.checked && !radio10.checked) /* (radio1.checked == false && radio2.checked == false && radio3.checked == false) */ {
        alert('Veuillez choisir une réponse!');
        return;
    }
    questionsIndex++;
        console.log();
    // resetInterval2();
    nextQuestion();
}
console.log(imgCheck);
function nextQuestion() {
    const question = questions[questionsIndex];
    timerVisible = 0;
    if (question) {
        imgCheck.src = question.image;
        h1Title.textContent = question.title;
        label1.textContent = question.choices[0];
        label2.textContent = question.choices[1];
        label3.textContent = question.choices[2];
        label4.textContent = question.choices[3];
        label5.textContent = question.choices[4];
        label6.textContent = question.choices[5];
        label7.textContent = question.choices[6];
        label8.textContent = question.choices[7];
        label9.textContent = question.choices[8];
        label10.textContent = question.choices[9];
        // imgCheck.textContent = question.image;

    } else {
        clearInterval(interval);
        saveScore();
        document.location.href = 'Questionnaireclassement.html';
    }
}

function saveScore() {

    // Récupération
    const pseudo = localStorage.getItem('user');
    let classement = localStorage.getItem('classement');
    if (classement) {
        classement = JSON.parse(classement);
    } else {
        classement = [];
    }

    // Modification
    classement.push({
        pseudo: pseudo,
        score: score,
        timer: timer,
        lundi: lundi,
        mardi: mardi,
        mercredi: mercredi,
        jeudi: jeudi,
        vendredi: vendredi,
        samedi: samedi,
        dimanche: dimanche,
    });

    // Sauvegarde
    localStorage.setItem('classement', JSON.stringify(classement));
}








// /**
//  * Chronomètre qui revient à 0 à chaque fois qu'on clique sur Valider
//  */
// let interval2;
// function resetInterval2() {
//     timerVisible = 0;
//     if(interval2) {
//         clearInterval(interval2);
//     }
//     interval2 = setInterval(function () {
//         timerVisible++;
//         updateTimerVisible();
//     }, 1000);
//     updateTimerVisible();
// }
// function updateTimerVisible() {
//     buttonValider.textContent = `Valider (${timerVisible}s)`;   //'Valider (' + timer + 's)';
// }
// resetInterval2();
