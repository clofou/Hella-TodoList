function hideAll(){
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'none'
    four.style.display = 'none'
    retour.style.display = 'none'
    annuler.style.display = 'none'
    footer.style.display = 'none'
}

function display(...a){
    hideAll()
    for(let el of a){
        el.style.display = "flex"
    }
}

let idG = 0;

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const four = document.querySelector('.four')

const boutonAjouterOuModifier = document.querySelector('.boutonAjouterOuModifier')
const todoList = document.querySelector('.todoList')
const dialogContent = document.querySelector('.displayContent')

const retour = document.querySelector('.retour')
const annuler = document.querySelector('.annuler')
const footer = document.querySelector('.footer')

const nameTodos = document.querySelector('.nameTodos')
const dateEcheance = document.querySelector('.dateEcheance')
const prioriteM = document.querySelectorAll('input[name="prio"]')

// Decteter le click sur le bouton Espace
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        first.style.display = 'none'
        dialogContent.style.textAlign = 'center'
        display(second, footer)
    // Empêcher le défilement de la page lorsque la touche Espace est pressée
    event.preventDefault();
    }}, {once: true})

todoList.addEventListener("click", () => {
    display(retour, four)
    Tache.displayAllTache()
})

retour.addEventListener("click", () => display(second, footer))
annuler.addEventListener("click", () => display(retour, four))

second.addEventListener("click", () => {
    nameTodos.innerText = ""
    display(third, footer)
    boutonAjouterOuModifier.innerText = "Ajouter Tache"
})

boutonAjouterOuModifier.addEventListener("click", () => {

    let priorite = null

    prioriteM.forEach((value, key) => {
        if (value.checked){
            priorite = value;
        }
    })





    if (nameTodos.value !== '' && dateEcheance.value !== '' && priorite != null) {

        if (boutonAjouterOuModifier.innerText === "Ajouter Tache"){
            console.log("Ajoutation")
            const newTache = new Tache(nameTodos.value, dateEcheance.value, priorite.value, "En Cours")
            newTache.saveTacheToLocalStorage()

        }
        if (boutonAjouterOuModifier.innerText === "Modifier Tache"){
            console.log("Modification")
            const mTache = new Tache(nameTodos.value, dateEcheance.value, priorite.value, "En Cours")
            mTache.id = idG

            mTache.modifyTacheToLocalStorage()
        }



        display(second, footer)

        nameTodos.value = ''
        dateEcheance.value = ''
    }
    
})


