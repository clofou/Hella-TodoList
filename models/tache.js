class Tache{
    static id = 0

    constructor(nomTache, dateEcheance, priorite, status){
        this.nomTache = nomTache
        this.dateEcheance = dateEcheance
        this.priorite= priorite
        this.status = status
        this.#saveTacheToLocalStorage()

    }

    #saveTacheToLocalStorage(){
        const todosInStorage = localStorage.getItem('todos')
        let todos = todosInStorage ? JSON.parse(todosInStorage) : []
        this.id = todos[todos.length-1]?.id == undefined ? 0 : todos[todos.length-1]?.id +1
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
                <h3>${el.tacheName} <img src="${el.priorite == 'eleve' ? 'assets/images/PrioriteEleve.png': el.priorite=='moyen' ? 'assets/images/moyen.png':'assets/images/PrioriteFaible.png'}" alt=""></h3>
                </div>
                <div class="droite">
                    <img src="assets/images/pen.png" alt="">
                    <img src="assets/images/delete.png" alt="" class="suppr${el.id} modif${el.id}">
                </div>
            `
            ul.append(li)
            const zz = document.querySelector(`.suppr${el.id}`)
            zz.addEventListener("click", ()=>{
                Tache.removeTacheAtIndex(el.id)
            })

            console.log(zz)
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
        console.log(li)
        const ul = document.querySelector('#listeTache')
        ul.removeChild(li)

    }
}