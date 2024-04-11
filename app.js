function hideAll(){
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'none'
    four.style.display = 'none'
    retour.style.display = 'none'
    footer.style.display = 'none'
}

function display(...a){
    hideAll()
    for(let el of a){
        el.style.display = "flex"
    }
}

const dialogContent = document.querySelector('.displayContent')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const four = document.querySelector('.four')
const boutonAjouterTache = document.querySelector('.boutonAjouterTache')
const todoList = document.querySelector('.todoList')
const retour = document.querySelector('.retour')
const footer = document.querySelector('.footer')

// Decteter le click sur le bouton
let controller = 0
    const maFonction = function(event) {
        if (event.code === 'Space') {
            first.style.display = 'none'
            document.removeEventListener('keydown', maFonction)
            dialogContent.style.textAlign = 'center'
            display(second, footer)
        console.log(controller);
        // Empêcher le défilement de la page lorsque la touche Espace est pressée
        event.preventDefault();
        }}
    if (controller === 0) {
        document.addEventListener('keydown', maFonction)
        controller = 1
    }
//

todoList.addEventListener("click", () => {
    display(retour, four)
    Tache.displayAllTache()
})

retour.addEventListener("click", () => display(second, footer))

second.addEventListener("click", () => display(third, footer))
 
boutonAjouterTache.addEventListener("click", () => {
    const nameTodos = document.querySelector('.nameTodos')
    const dateEcheance = document.querySelector('.dateEcheance')
    const priorite = document.querySelector('input[name="prio"]:checked')
    

    if (nameTodos.value != '' && dateEcheance.value != '' && priorite?.value != undefined) {
       new Tache(nameTodos.value, dateEcheance.value, priorite.value, "En Cours")
        
        display(second, footer)
        nameTodos.value = ''
        dateEcheance.value = ''
    }

    
})


