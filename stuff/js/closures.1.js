function createSafeBox(name, secret, password) {
    return function (password2) { // closure
        if (password2 !== password) throw new Error('wrong credentials')

        return name + ': ' + secret
    }
}


var miguelBox = createSafeBox('Migues box', 'me miro el código de los demás hasta las 4am', '123123123')
var judyBox = createSafeBox('Judys box', 'mi marido espía', '123123123')
var manuBox = createSafeBox('Manus box', 'el padre de mi abuela paterna, tenía doble vida', '123123123')

judyBox('23423432')
// VM1753:3 Uncaught Error: wrong credentials
//     at <anonymous>:3:43
//     at <anonymous>:1:1

judyBox('123123123')
// 'Judys box: mi marido espía'
miguelBox('123123123')
// 'Migues box: me miro el código de los demás hasta las 4am'
manuBox('123123123')
// 'Manus box: el padre de mi abuela paterna, tenía doble vida'