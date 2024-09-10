export async function ajouterPret(livre_id, membre_id, date_pret) {
    // Implémentation de l'ajout d'un prêt
    console.log(`Prêt ajouté: Livre ${livre_id}, Membre ${membre_id}, Date ${date_pret}`);
}

export async function listerPrets() {
    // Implémentation de la liste des prêts
    console.log('Liste des prêts');
}

export async function mettreAJourPret(idPret, newLivre_id, newMembre_id, newDate_pret) {
    // Implémentation de la mise à jour d'un prêt
    console.log(`Prêt mis à jour: ${idPret}, Livre ${newLivre_id}, Membre ${newMembre_id}, Date ${newDate_pret}`);
}

export async function supprimerPret(idPretSupp) {
    // Implémentation de la suppression d'un prêt
    console.log(`Prêt supprimé: ${idPretSupp}`);
}
