class Tache{
    static id = 0

    constructor(nomTache, dateEcheance, priorite, status){
        this.nomTache = nomTache
        this.dateEcheance = dateEcheance
        this.priorite= priorite
        this.status = status

    }

    saveTacheToLocalStorage(){
        const todosInStorage = localStorage.getItem('todos')
        let todos = todosInStorage ? JSON.parse(todosInStorage) : []
        this.id = todos[todos.length-1]?.id === undefined ? 0 : todos[todos.length-1]?.id +1
        const newTodos = [
            ...todos,
            {
                id: this.id,
                tacheName: this.nomTache,
                dateEcheance: this.dateEcheance,
                priorite: this.priorite,
                status: this.status
            }
        ]
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    modifyTacheToLocalStorage(){
        const todosInStorage = localStorage.getItem('todos')
        let todos = todosInStorage ? JSON.parse(todosInStorage) : []


        todos.forEach((value, key) => {
            if (value.id === this.id){
                todos[key].id = this.id
                todos[key].tacheName = this.nomTache
                todos[key].dateEcheance = this.dateEcheance
                todos[key].priorite = this.priorite
            }
        })
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    static displayAllTache(){
        const ul = document.querySelector('#listeTache')
        ul.innerHTML = ""
        const todosInStorage = localStorage.getItem('todos')
        const todosInitial = todosInStorage ? JSON.parse(todosInStorage) : []
        let todos = todosInitial.reverse()

        
        for(let el of todos){
            const li = document.createElement('li')
            li.setAttribute('id', `el${el.id}`)
            li.innerHTML = `
                <div class="gauche">
                <h3>${el.tacheName} <img src="${el.priorite === 'eleve' ? 'assets/images/PrioriteEleve.png': el.priorite==='moyen' ? 'assets/images/moyen.png':'assets/images/PrioriteFaible.png'}" alt=""></h3>
                </div>
                <div class="droite">
                    <img src="assets/images/pen.png" alt="" class="modif${el.id}">
                    <img src="assets/images/delete.png" alt="" class="suppr${el.id}">
                </div>
            `
            ul.append(li)
            const zz = document.querySelector(`.suppr${el.id}`)
            const mm = document.querySelector(`.modif${el.id}`)


            zz.addEventListener("click", ()=>{
                Tache.removeTacheAtIndex(el.id)
            })

            mm.addEventListener("click", () => {
                Tache.displayModifierTache(el.id, el.tacheName, el.dateEcheance, el.priorite, el.status)
            })

        }
        
    }

    

    static removeTacheAtIndex(id){

        // Effacer du local storage
        const todosInStorage = localStorage.getItem('todos')
        let todos = todosInStorage ? JSON.parse(todosInStorage) : []
        removeFromList(todos, id)
        localStorage.setItem('todos', JSON.stringify(todos))

        // Effacer de la liste
        const li = document.querySelector(`#el${id}`)
        const ul = document.querySelector('#listeTache')
        ul.removeChild(li)

    }

    //TODO: Implementer la fonction de modification, l'affichage et la modif dans le localStorage
    static displayModifierTache(id, nomTache, dateE, priorite, status){

        const annuler = document.querySelector('.annuler')




        //Afficher le bouton Annuler
        display(third, annuler)

        boutonAjouterOuModifier.innerText = "Modifier Tache"
            // Sur annulation on revient a la liste

        // Afficher le formulaire de modification avec les champs preremplit
        nameTodos.value = nomTache
        dateEcheance.value = dateE
        prioriteM.forEach(value => {
            if (value.value === priorite){
                value.checked = true;
            }
        })
        idG = id

        // creer le bouton pour modifier dans le localStorage
            // Le bouton reaffichera le display

    }
}