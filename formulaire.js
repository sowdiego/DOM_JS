//Declaration des constantes pour recuperer les valeurs saisies
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
const dateNaissance = document.getElementById('date_naissance')
const email = document.getElementById('email')
const liste = document.getElementById('listes')
    //Placer le curseur dans l'element prenom
prenom.focus()
    //Tableau de personnes
T = []
    //Generer un email
function generateEmail() {
    let prenomValue = prenom.value.trim()
    let nomValue = nom.value.trim()
    let dateNaissanceValue = dateNaissance.value
    let emailValue = ''
    if (prenomValue != '' && nomValue != '' && dateNaissanceValue != '') {
        emailValue = prenomValue[0] + nomValue + dateNaissanceValue.split('-')[0] + '@m1dsia.sn'
        email.value = emailValue.toLowerCase()
    } else {
        alert('Tous les champs sont obligatoires !')
    }
}

function save() {
    let prenomValue = prenom.value.trim()
    let nomValue = nom.value.trim()
    let dateNaissanceValue = dateNaissance.value
    let emailValue = email.value
    if (prenomValue != '' && nomValue != '' && dateNaissanceValue != '' && emailValue != '') {
        //Creation d'un objet personne
        var personne = {
                nom: nomValue,
                prenom: prenomValue,
                date: dateNaissanceValue,
                email: emailValue
            }
            //Ajout dans le tableau de personnes
        T.push(personne)
            //Vider les champs
        nom.value = ''
        prenom.value = ''
        dateNaissance.value = ''
        email.value = ''
    } else {
        alert('Tous les champs sont obligatoires !')
    }
    loadTable()
}

function loadTable() {
    liste.innerHTML = ''
    T.forEach((p, i) => {
        let tr = `
            <tr>
                <td>${i+1}</td>
                <td>${p.prenom}</td>
                <td>${p.nom.toUpperCase()}</td>
                <td>${p.date}</td>
                <td>${p.email}</td>
                <td>
                    <a href="" class="btn btn-outline-warning btn-sm">Modifier</a>
                    <a href="" class="btn btn-outline-danger btn-sm">Supprimer</a>
                </td>
            </tr>
        `
        liste.innerHTML += tr
    })
}

function vider() {
    T = []
    console.log(T);
    loadTable()
}