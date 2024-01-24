function createSafeBox(name, secret, password) {
    return {
        retrieveSecret: function (currentPassword) {
            if (currentPassword !== password) throw new Error('wrong credentials')

            return name + ': ' + secret
        },

        changePassword: function (currentPassword, newPassword, newPasswordRepeat) {
            if (currentPassword !== password) throw new Error('wrong credentials')

            if (currentPassword === newPassword) throw new Error('new password is equal to current password')

            if (newPassword !== newPasswordRepeat) throw new Error('new password does not match its repetition')

            password = newPassword
        }
    }
}


var miguelBox = createSafeBox('Migues box', 'me miro el código de los demás hasta las 4am', '123123123')
var judyBox = createSafeBox('Judys box', 'mi marido espía', '123123123')
var manuBox = createSafeBox('Manus box', 'el padre de mi abuela paterna, tenía doble vida', '123123123')

judyBox.retrieveSecret('123123123')
// 'Judys box: mi marido espía'
judyBox.changePassword('123123123', '123123123', '123123123')
// VM1897:12 Uncaught Error: new password is equal to current password
//     at Object.changePassword (<anonymous>:12:56)
//     at <anonymous>:1:9
// changePassword @ VM1897:12
// (anonymous) @ VM1965:1
judyBox.changePassword('123123123', '345345345', '123123123')
// VM1897:14 Uncaught Error: new password does not match its repetition
//     at Object.changePassword (<anonymous>:14:58)
//     at <anonymous>:1:9
// changePassword @ VM1897:14
// (anonymous) @ VM1971:1
judyBox.changePassword('123123123', '345345345', '345345345')
// undefined
judyBox.retrieveSecret('123123123')
// VM1897:4 Uncaught Error: wrong credentials
//     at Object.retrieveSecret (<anonymous>:4:53)
//     at <anonymous>:1:9
// retrieveSecret @ VM1897:4
// (anonymous) @ VM2005:1
judyBox.retrieveSecret('345345345')
// 'Judys box: mi marido espía'
miguelBox.retrieveSecret('123123123')
// 'Migues box: me miro el código de los demás hasta las 4am'
manuBox.retrieveSecret('123123123')
// 'Manus box: el padre de mi abuela paterna, tenía doble vida'