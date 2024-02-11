import { User } from '../data/models.js'
import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, ContentError } from './errors.js'


function changeUserEmail(userId, newEmail, newEmailConfirm , password){

    validate.id(userId, 'user id')
    validate.email(newEmail, 'new email')
    validate.email(newEmailConfirm, 'new email confirm')
    validate.text(password, 'password')
   
   return User.findById(userId)
        .catch(error => {throw new SystemError(error.message)})
        .then(user =>{
           if(!user){
               throw new NotFoundError('user not found')
              
           }
            if(newEmail !== newEmailConfirm ){
               throw new ContentError('new email and its confirmation do not match')
            }
            if(user.password !== password){
                throw new CredentialsError('wrong credentials')  
            }
           
             user.email = newEmail
             user.save()
              .catch(error => {throw new SystemError(error.message)})
         })
        
}

export default changeUserEmail