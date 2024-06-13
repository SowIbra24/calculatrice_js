function calculatrice(nb1, nb2, op) {
    if (!isNaN(nb1) && !isNaN(nb2)) {
        let resultat;
        switch(op) {
            case "plus":
                resultat = nb1 + nb2;
                break;
            case "moins":
                resultat = nb1 - nb2;
                break;
            case "div":
                resultat = nb1 / nb2;
                break;
            case "mult":
                resultat = nb1 * nb2;
                break;
        }
        return resultat;
    } else {
        return "Erreur : au moins un des nombres saisi n'est pas un nombre...";
    }
}

function fomulairesoumis(event) {
    event.preventDefault(); // Empêche la soumission du formulaire pour pas recharger la page
    const nombre1 = parseFloat(document.forms["calc"]["nombre1"].value);
    const nombre2 = parseFloat(document.forms["calc"]["nombre2"].value);
    // transforme en float les valeurs 1 et 2 du formulaire
    const choix = document.forms["calc"]["choix"].value; // recupère le choix
    const resultat = calculatrice(nombre1, nombre2, choix); // calcule

    // au cas ou il y'aurait une erreur dans le resultat, on mets à jour la classe
    const resultElement = document.getElementById("result");
    if (typeof resultat === "string" && resultat.startsWith("Erreur")) {
        resultElement.className = "erreur";
        resultElement.textContent= resultat;
    } else {
        resultElement.className = "defile";
        // on écrit le resultat
    resultElement.textContent = `Le résultat de ${nombre1} ${choix} ${nombre2} est ${resultat}.`;

    }

    
    const paramsElement = document.getElementById("params");
    let paramsHTML = 'Les données transmises au formulaire sont : <br>';
    // objet qui récupère le formulaire
    const formData = new FormData(document.forms["calc"]);
    formData.forEach((value, key) => {
        paramsHTML += `${key} = ${value} <br /> \n`;
    });
    // affiche en html
    paramsElement.innerHTML = paramsHTML;
    
}
