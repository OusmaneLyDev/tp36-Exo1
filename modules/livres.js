export async function ajouterLivre(titre, auteur, annee_publication, genre) {
    // Implémentation de l'ajout d'un livre
    console.log(`Livre ajouté: ${titre}, ${auteur}, ${annee_publication}, ${genre}`);
}

export async function listerLivres() {
    // Implémentation de la liste des livres
    console.log('Liste des livres');
}

export async function mettreAJourLivre(idLivre, newTitre, newAuteur, newAnnee_publication, newGenre) {
    // Implémentation de la mise à jour d'un livre
    console.log(`Livre mis à jour: ${idLivre}, ${newTitre}, ${newAuteur}, ${newAnnee_publication}, ${newGenre}`);
}

export async function supprimerLivre(idLivreSupp) {
    // Implémentation de la suppression d'un livre
    console.log(`Livre supprimé: ${idLivreSupp}`);
}
