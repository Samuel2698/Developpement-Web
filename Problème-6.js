class App {

    constructor(téléchargements, ponctuation, poids) {
        
        this.téléchargements = téléchargements;
        this.ponctuation = ponctuation;
        this.poids = poids;
        this.initialisée = false;
        this.instalée = false;
    }

    installer() {
        
        if (this.instalée == false) {
            this.instalée = true;
            alert("App installée correctement");
        }
    }
    désinstaller() {

        if (this.instalée == true) {
            this.instalée = false;
            alert("App désinstallée correctement");
        }
    }
    ouvrir() {

        if (this.initialisée == false && this.instalée == true) {
            this.initialisée = true;
            alert("App initialisée");
        }
    }
    fermer() {

        if (this.initialisée == true && this.instalée == true) {
            this.initialisée = false;
            alert("App fermée");
        }
    }
    appInfo() {
        
        return `
        Téléchargements: <b>${this.téléchargements}</b></br>
        Ponctuation: <b>${this.ponctuation}</b></br>
        Poids: <b>${this.poids}</b></br>
        `
    }
}

app1 = new App("16.000", "5 étoiles", "900mb");
app2 = new App("1.000", "4 étoiles", "400mb");
app3 = new App("6.000", "4.5 étoiles", "100mb");
app4 = new App("23.000", "5 étoiles", "1gb");
app5 = new App("900", "5 étoiles", "250mb");
app6 = new App("17", "3.7 étoiles", "522mb");
app7 = new App("42.981", "2.9 étoiles", "723mb");

/* app.installer();
app.ouvrir();
app.fermer();
app.désinstaller();
 */

app1.appInfo();
app2.appInfo();
app3.appInfo();
app4.appInfo();
app5.appInfo();
app6.appInfo();
app7.appInfo();

document.write(`

    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>

`)