const a= 'Hey !';
function global () {
    const b = 'Qué';
    function local () {
        const c = " tal?"
        return a +b +c
}
return local
}
global()()

const miContador = (function() {
     let _contador = 0;
     
     function incrementar() {
        return _contador++
     }

     function decrementar () {
        return _contador--;
     }

     function valor() {
        return _contador;
     }

     return {
        incrementar,
        decrementar,
        valor
     }
})()