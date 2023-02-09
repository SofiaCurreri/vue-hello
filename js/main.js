// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

console.log("Vue ok", Vue);
const app = Vue.createApp({
    data() {
        return {
            message: "Ciao! Sto imparando ad usare Vue.js",
            pic: "./img/fiore.jpg"
        }
    }
});
app.mount("#root");