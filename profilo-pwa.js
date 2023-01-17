window.addEventListener('load', () => {
    registerSw();
})
async function registerSw(){
    console.log("test")

if ('serviceWorker' in navigator) {
    try{
   await navigator.serviceWorker.register('https://sujisundarraj.github.io/Suji-Web-Profilo/profilo-sw.js');
         console.log("registred")
    }catch(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        }
    }
}
