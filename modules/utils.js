function removeFromList(liste,id){
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].id === id) {
            liste.splice(i,1)
            break
        }
    }
}