function dialog() {
    const dialogContent = document.querySelector('.displayContent')
    const content = [
        "Salut Je suis Hella, Vôtre assistant personnelle pour creer des taches !<br><br> <p class='julius'>Cliquez sur <span class='jua'>Espace</span> pour Continuer</p>",
        "<button class='center'>Continuer</button>",
        ""
    ]
    let i = 0
    
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            if(i < content.length){
                if(i == 1){
                    dialogContent.setAttribute('class', 'displayContent center')
                }
                dialogContent.innerHTML = content[i]
            }
          i++
          console.log(i);
          // Empêcher le défilement de la page lorsque la touche Espace est pressée
          event.preventDefault();
        }})
}