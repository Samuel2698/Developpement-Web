
class Portable { 

    constructor(couleur, poids, taille, rdc, ram) {

        this.couleur = couleur;
        this.poids = poids;
        this.taille = taille;
        this.resolutionDeCaméra = rdc;
        this.memoireRam = ram;
        this.allumé = false;
    }
    appuyezSurLeBoutonPower() {
        
        if (this.allumé == false) {
            alert("Portable allumé");
            this.allumé = true;

        } else {
            alert("Portable éteint");
            this.allumé = false;
        }
    }
    redémarrer() {

        if (this.allumé == true) {
            alert("Redemarrage en cours");

        } else {
            alert("Le portable est éteint");
        }
    }
    prendreDesPhotos() {

        alert(`Photo prise avec une résolution de caméra de: ${this.resolutionDeCaméra}`);
    }
    filmer() {
        alert(`Filmé avec une résolution d'écran de: ${this.resolutionEcran}`);
    }
    portableInfo() {
        
        return ` 
        Color: <b>${this.couleur}</b></br>
        Poids: <b>${this.poids}</b></br>
        Taille: <b>${this.taille}</b></br>
        Resolution de Caméra: <b>${this.resolutionDeCaméra}</b></br>
        Memoire Ram: <b>${this.memoireRam}</b></br>
        `;

    }
}

class PortableHautDeGamme extends Portable {

    constructor(couleur, poids, taille, rdc, ram, rdce) {
        super(couleur, poids, taille, rdc, ram);
        this.resolutionDeCaméraExtra = rdce;
     }
     filmerVidéoLent() {
         alert("vous êtes en train de filmer au ralenti");  
     }
     reconnaissanceFaciale() {
         alert("On va commencer une reconnaissance faciale")
     }
     infoHautDeGamme() {
         return this.portableInfo() + `Resolution de Camera Extra: <b>${this.resolutionDeCaméraExtra}</b>`;
     }

}

portable1 = new PortableHautDeGamme("rouge", "130g", "5.2", "4K", "3GB", "full hd");
portable2 = new PortableHautDeGamme("noir", "142g", "6", "4K", "4GB", "hd");

/* portable1 = new Portable("rouge", "150g", "5'", "hd", "1GB");
portable2 = new Portable("noir", "155g", "5.4'", "full hd", "2GB");
portable3 = new Portable("blanc", "146g", "5.9'", "full hd", "2GB"); */

/* portable1.appuyezSurLeBoutonPower();
portable1.prendreDesPhotos();
portable1.filmer();
portable1.redémarrer();
portable1.appuyezSurLeBoutonPower();
 */

/* document.write(`
    
    ${portable1.portableInfo()} <br>
    ${portable2.portableInfo()} <br>
    ${portable3.portableInfo()} 
`); */

document.write(`
    
    ${portable1.infoHautDeGamme()} <br><br>
    ${portable2.infoHautDeGamme()} <br>
`);