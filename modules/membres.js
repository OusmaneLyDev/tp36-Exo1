export async function ajouterMembre(nom, adresse) {
    // Implémentation de l'ajout d'un membre
    console.log(`Membre ajouté: ${nom}, ${adresse}`);
}

export async function listerMembres() {
    // Implémentation de la liste des membres
    console.log('Liste des membres');
}

export async function mettreAJourMembre(idMembre, newNom, newAdresse) {
    // Implémentation de la mise à jour d'un membre
    console.log(`Membre mis à jour: ${idMembre}, ${newNom}, ${newAdresse}`);
}

export async function supprimerMembre(idMembreSupp) {
    // Implémentation de la suppression d'un membre
    console.log(`Membre supprimé: ${idMembreSupp}`);
}
