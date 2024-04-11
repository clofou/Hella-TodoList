let todosInStorage = localStorage.getItem('todos')
let todos = todosInStorage ? JSON.parse(todosInStorage) : []

const dialogContent = document.querySelector('.displayContent')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const four = document.querySelector('.four')
const boutonAjouterTache = document.querySelector('.boutonAjouterTache')
const todoList = document.querySelector('.todoList')
const retour = document.querySelector('.retour')
const footer = document.querySelector('.footer')

let controller = 0

function ajouterTache(){
    
}

todoList.addEventListener("click", () => {
    console.log("Todolist")
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'none'
    retour.style.display = 'block'
    footer.style.display = 'none'

    const ul = document.querySelector(".four ul")
    console.log(todos)
    
    retour.addEventListener("click", ()=>{
        first.style.display = 'none'
        second.style.display = 'block'
        third.style.display = 'none'
        retour.style.display = 'none'
        four.style.display = 'none'
        footer.style.display = 'none'
        retour.style.display = 'none'
        footer.style.display = 'flex'
        ul.innerHTML =""
    })

    for(let a of todos){

        const li = document.createElement('li')
        li.innerHTML = `<div class="gauche">
        <h3>${a.tacheName} <img src="${a.priorite == 'eleve' ? 'assets/images/PrioriteEleve.png': a.priorite=='moyen' ? 'assets/images/moyen.png':'assets/images/PrioriteFaible.png'}" alt=""></h3>
    </div>
    <div class="droite">
        <img src="assets/images/pen.png" alt="">
        <img src="assets/images/delete.png" alt="" class="suppr${a.id} modif${a.id}">
    </div>`
        ul.append(li)
        let hhh = '.suppr'+a.id
        supprel = document.querySelector(hhh)
        supprel.addEventListener("click", ()=>{
            console.log("Hellp " + a.id)
            todos.splice(a.id, 1)
            localStorage.setItem('todos', JSON.stringify(todos))
        })
        
        four.style.display = 'block'
    }
    
})

const maFonction = function(event) {
    if (event.code === 'Space') {
        first.style.display = 'none'
        document.removeEventListener('keydown', maFonction)
        dialogContent.style.textAlign = 'center'
        second.style.display = 'block'
      console.log(controller);
      // Empêcher le défilement de la page lorsque la touche Espace est pressée
      event.preventDefault();
    }}

if (controller === 0) {
    document.addEventListener('keydown', maFonction)
    controller = 1
}

second.addEventListener("click", () => {
    second.style.display = 'none'
    third.style.display = 'flex'
})
 
boutonAjouterTache.addEventListener("click", () => {
    const nameTodos = document.querySelector('.nameTodos')
    const dateEcheance = document.querySelector('.dateEcheance')
    const priorite = document.querySelector('input[name="prio"]:checked')
    console.log(nameTodos.value, dateEcheance.value, priorite?.value)

    if (nameTodos.value != '' && dateEcheance.value != '' && priorite?.value != undefined) {
        console.log(todos[0])
        
        const newTodos = [
            {
                id: todos[0]?.id == undefined ? 0 : todos[0]?.id +1,
                tacheName: nameTodos.value,
                dateEcheance: dateEcheance.value,
                priorite: priorite.value,
            },
            ...todos
        ]
        localStorage.setItem('todos', JSON.stringify(newTodos))
        second.style.display = 'block'
        third.style.display = 'none'
        nameTodos.value = ''
        dateEcheance.value = ''
        priorite.value = undefined
        todosInStorage = localStorage.getItem('todos')
        todos = todosInStorage ? JSON.parse(todosInStorage) : []
    }

    
})


