let classement = localStorage.getItem('classement');
if (classement) {
    classement = JSON.parse(classement);
} else {
    classement = [];
}

let graphique = document.getElementById('graphique');
console.log(graphique);

console.log(classement);

const divClassement = document.querySelector('#classement');

let classementDansOrdre = [];

for (let i = 0; i < classement.length; i++) {
    // let { score, timer, pseudo } = classement[i];
    let score = classement[i].score;
    let timer = classement[i].timer;
    let pseudo = classement[i].pseudo;
    let lundi = (classement[i].lundi * 100) - timer + Math.floor(Math.random() * score);
    let mardi = (classement[i].mardi * 100) - timer + Math.floor(Math.random() * score);
    let mercredi = (classement[i].mercredi * 100) - timer + Math.floor(Math.random() * score);
    let jeudi = (classement[i].jeudi * 100) - timer + Math.floor(Math.random() * score);
    let vendredi = (classement[i].vendredi * 100) - timer + Math.floor(Math.random() * score);
    let samedi = (classement[i].samedi * 100) - timer + Math.floor(Math.random() * score);
    let dimanche = (classement[i].dimanche * 100) - timer + Math.floor(Math.random() * score);
    console.log(score, timer, pseudo);
    let total = score;

    lundi < 0 ? lundi = 40 : lundi = lundi;
    mardi < 0 ? mardi = 40 : mardi = mardi;
    mercredi < 0 ? mercredi = 40 : mercredi = mercredi;
    jeudi < 0 ? jeudi = 40 : jeudi = jeudi;
    vendredi < 0 ? vendredi = 40 : vendredi = vendredi;
    samedi < 0 ? samedi = 40 : samedi = samedi;
    dimanche < 0 ? dimanche  = 40 : dimanche = dimanche;

    classementDansOrdre.push({
        pseudo: pseudo,
        timer: timer,
        total: total,
        lundi: lundi,
        mardi: mardi,
        mercredi: mercredi,
        jeudi: jeudi,
        vendredi: vendredi,
        samedi: samedi,
        dimanche: dimanche,

    });

    console.log(classementDansOrdre[i]);
}

// Voir : https://www.azur-web.com/astuces/javascript-trier-tableau-objet
classementDansOrdre = classementDansOrdre.sort(function (a, b) {
    if (a.total < b.total) {
        return 1;
    } else if (a.total > b.total) {
        return -1;
    }
    return 0;
});

for (let i = 0; i < classementDansOrdre.length; i++) {
    divClassement.innerHTML += `
        <tr>
            <td>#${i + 1}</td>
            <td>${classementDansOrdre[i].pseudo}</td>
            <td>${classementDansOrdre[i].total}</td>
            <td>${classementDansOrdre[i].lundi}%</td>
            <td>${classementDansOrdre[i].mardi}%</td>
            <td>${classementDansOrdre[i].mercredi}%</td>
            <td>${classementDansOrdre[i].jeudi}%</td>
            <td>${classementDansOrdre[i].vendredi}%</td>
            <td>${classementDansOrdre[i].samedi}%</td>
            <td>${classementDansOrdre[i].dimanche}%</td>
            </tr>
    `;
};
graphique.innerHTML += ` 
    <h3 class="">Pseudo : ${classement[0].pseudo} </h3>
 <dl class="tailleh20"><dt class="equipe1">Lundi</dt><dd style="width:${classementDansOrdre[0].lundi}%;background:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(117, 190, 21, 0.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[0].lundi}%</dd></dl>

<dl class="tailleh80"><dt class="equipe2">Mardi</dt><dd style="width:${classementDansOrdre[0].mardi}%;background:linear-gradient(217deg, rgba(255, 196, 0, 0.8), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(30, 175, 163, 0.8), rgba(229, 255, 0, 0.466) 70.71%);">${classementDansOrdre[0].mardi}%</dd></dl>

<dl class="tailleh20"><dt class="equipe3">Mercredi</dt><dd style="width:${classementDansOrdre[0].jeudi}%;background:linear-gradient(217deg, rgba(255, 0, 0, 0.329), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(117, 84, 35, 0.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(15, 15, 128, 0.541), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[0].jeudi}%</dd></dl>

<dl class="tailleh30"><dt class="equipe4">Jeudi</dt><dd style="width:${classementDansOrdre[0].vendredi}%;background:linear-gradient(217deg, rgba(194, 124, 124, 0.8), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(255, 123, 0, 0.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[0].vendredi}%</dd></dl>

<dl class="tailleh60"><dt class="equipe5">Vendredi</dt><dd style="width:${classementDansOrdre[0].mercredi}%;background:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(55, 190, 21, 0.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(229, 255, 0, 0.8), rgba(136, 255, 0, 0) 70.71%);">${classementDansOrdre[0].mercredi}%</dd></dl>

<dl class="tailleh50"><dt class="equipe6">Samedi</dt><dd style="width:${classementDansOrdre[0].samedi}%;background:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[0].samedi}%</dd></dl>

<dl class="tailleh50"><dt class="equipe7">Dimanche</dt><dd style="width:${classementDansOrdre[0].dimanche}%;background:linear-gradient(217deg, rgba(255, 208, 0, 0.623), rgba(255,0,0,0) 70.71%),
linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
linear-gradient(336deg, rgba(208, 255, 0, 0.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[0].dimanche}%</dd></dl>`;



console.log(classement);
console.log(classementDansOrdre.findIndex(element => element.nom === "Lundi"));