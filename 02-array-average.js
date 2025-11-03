// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
	if (notes.length === 0) {
		return "Aucune note fournie";
	}
	let somme = 0;
	for (let i = 0; i < notes.length; i++) {
		somme += notes[i];
	}
	let moyenne = somme / notes.length;

	if (moyenne >= 10) {
		return "Réussi";
	} else {
		return "Échoué";
	}
}

module.exports = {
	averageNote,
};



