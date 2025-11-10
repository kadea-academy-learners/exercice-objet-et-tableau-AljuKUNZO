// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
  if (notes.length === 0) {
    return "Échoué";
  }

  const moyenne = notes.reduce((a, b) => a + b, 0) / notes.length;

  if (moyenne < 10) {
    return "Échoué";
  } else if (moyenne >= 10 && moyenne <= 15) {
    return "Réussi";
  } else {
    return "Excellent";
  }
}

module.exports = averageNote;
