window.addEventListener('load', () => {
    registerSw();
})
async function registerSw(){
    console.log("test")

if ('serviceWorker' in navigator) {
    try{
   await navigator.serviceWorker.register('https://sujisundarraj.github.io/Suji-Web-Profilo/profilo-sw.js');
    }catch(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        }
    }
}
