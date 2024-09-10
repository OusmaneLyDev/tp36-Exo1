import inquirer from 'inquirer';
import { ajouterLivre, listerLivres, mettreAJourLivre, supprimerLivre } from './modules/livres.js';
import { ajouterMembre, listerMembres, mettreAJourMembre, supprimerMembre } from './modules/membres.js';
import { ajouterPret, listerPrets, mettreAJourPret, supprimerPret } from './modules/prets.js';

async function menuPrincipal() {
    const choix = await inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Que voulez-vous gérer ?',
            choices: ['Livres', 'Membres', 'Prêts', 'Quitter']
        }
    ]);

    switch (choix.menu) {
        case 'Livres':
            return gererLivres();
        case 'Membres':
            return gererMembres();
        case 'Prêts':
            return gererPrets();
        case 'Quitter':
            console.log('Au revoir!');
            process.exit();
    }
}

async function gererLivres() {
    const choix = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Que voulez-vous faire ?',
            choices: ['Ajouter un livre', 'Lister les livres', 'Mettre à jour un livre', 'Supprimer un livre', 'Retour']
        }
    ]);

    switch (choix.action) {
        case 'Ajouter un livre':
            const { titre, auteur, annee_publication, genre } = await inquirer.prompt([
                { type: 'input', name: 'titre', message: 'Titre du livre:' },
                { type: 'input', name: 'auteur', message: 'Auteur du livre:' },
                { type: 'number', name: 'annee_publication', message: 'Année de publication:' },
                { type: 'input', name: 'genre', message: 'Genre du livre:' }
            ]);
            await ajouterLivre(titre, auteur, annee_publication, genre);
            break;
        case 'Lister les livres':
            await listerLivres();
            break;
        case 'Mettre à jour un livre':
            const { idLivre, newTitre, newAuteur, newAnnee_publication, newGenre } = await inquirer.prompt([
                { type: 'number', name: 'idLivre', message: 'ID du livre à mettre à jour:' },
                { type: 'input', name: 'newTitre', message: 'Nouveau titre du livre:' },
                { type: 'input', name: 'newAuteur', message: 'Nouvel auteur du livre:' },
                { type: 'number', name: 'newAnnee_publication', message: 'Nouvelle année de publication:' },
                { type: 'input', name: 'newGenre', message: 'Nouveau genre du livre:' }
            ]);
            await mettreAJourLivre(idLivre, newTitre, newAuteur, newAnnee_publication, newGenre);
            break;
        case 'Supprimer un livre':
            const { idLivreSupp } = await inquirer.prompt([
                { type: 'number', name: 'idLivreSupp', message: 'ID du livre à supprimer:' }
            ]);
            await supprimerLivre(idLivreSupp);
            break;
        case 'Retour':
            return menuPrincipal();
    }
    return gererLivres();
}

async function gererMembres() {
    const choix = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Que voulez-vous faire ?',
            choices: ['Ajouter un membre', 'Lister les membres', 'Mettre à jour un membre', 'Supprimer un membre', 'Retour']
        }
    ]);

    switch (choix.action) {
        case 'Ajouter un membre':
            const { nom, adresse } = await inquirer.prompt([
                { type: 'input', name: 'nom', message: 'Nom du membre:' },
                { type: 'input', name: 'adresse', message: 'Adresse du membre:' }
            ]);
            await ajouterMembre(nom, adresse);
            break;
        case 'Lister les membres':
            await listerMembres();
            break;
        case 'Mettre à jour un membre':
            const { idMembre, newNom, newAdresse } = await inquirer.prompt([
                { type: 'number', name: 'idMembre', message: 'ID du membre à mettre à jour:' },
                { type: 'input', name: 'newNom', message: 'Nouveau nom du membre:' },
                { type: 'input', name: 'newAdresse', message: 'Nouvelle adresse du membre:' }
            ]);
            await mettreAJourMembre(idMembre, newNom, newAdresse);
            break;
        case 'Supprimer un membre':
            const { idMembreSupp } = await inquirer.prompt([
                { type: 'number', name: 'idMembreSupp', message: 'ID du membre à supprimer:' }
            ]);
            await supprimerMembre(idMembreSupp);
            break;
        case 'Retour':
            return menuPrincipal();
    }
    return gererMembres();
}

async function gererPrets() {
    const choix = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Que voulez-vous faire ?',
            choices: ['Ajouter un prêt', 'Lister les prêts', 'Mettre à jour un prêt', 'Supprimer un prêt', 'Retour']
        }
    ]);

    switch (choix.action) {
        case 'Ajouter un prêt':
            const { livre_id, membre_id, date_pret } = await inquirer.prompt([
                { type: 'number', name: 'livre_id', message: 'ID du livre:' },
                { type: 'number', name: 'membre_id', message: 'ID du membre:' },
                { type: 'input', name: 'date_pret', message: 'Date du prêt (YYYY-MM-DD):' }
            ]);
            await ajouterPret(livre_id, membre_id, date_pret);
            break;
        case 'Lister les prêts':
            await listerPrets();
            break;
        case 'Mettre à jour un prêt':
            const { idPret, newLivre_id, newMembre_id, newDate_pret } = await inquirer.prompt([
                { type: 'number', name: 'idPret', message: 'ID du prêt à mettre à jour:' },
                { type: 'number', name: 'newLivre_id', message: 'Nouvel ID du livre:' },
                { type: 'number', name: 'newMembre_id', message: 'Nouvel ID du membre:' },
                { type: 'input', name: 'newDate_pret', message: 'Nouvelle date du prêt (YYYY-MM-DD):' }
            ]);
            await mettreAJourPret(idPret, newLivre_id, newMembre_id, newDate_pret);
            break;
        case 'Supprimer un prêt':
            const { idPretSupp } = await inquirer.prompt([
                { type: 'number', name: 'idPretSupp', message: 'ID du prêt à supprimer:' }
            ]);
            await supprimerPret(idPretSupp);
            break;
        case 'Retour':
            return menuPrincipal();
    }
    return gererPrets();
}

menuPrincipal();
