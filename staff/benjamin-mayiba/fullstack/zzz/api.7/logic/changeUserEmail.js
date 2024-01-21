import { User } from '../data/models.js'
import validate from './helpers/validate.js'
import { SystemError, NotFoundError } from './errors.js'


function changeUserEmail(email, newEmail, newEmailConfirm , password, callback){

    validate.email(email, 'email')
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.text(password, 'password')
    validate.function(callback, 'callback')
   
    User.findOne({email})
        .then(user =>{
           if(!user){
           callback(new NotFoundError('user not found'))
               return
           }
            if(newEmail !== newEmailConfirm ){
              callback(new ContentError('new email and its confirmation do not match'))
                return
            }
            if(user.password !== password){
              callback(new ContentError('wrong credentials'))
                return  
            }
           
             user.email = newEmail
             user.save()
             .then(() => callback(null))
              .catch(error => callback(new SystemError(error.message)))
         })
        .catch(error => {
          callback(new SystemError(error.message))
        })
}

export default changeUserEmail