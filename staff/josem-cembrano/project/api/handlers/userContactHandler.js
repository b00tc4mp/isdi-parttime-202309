// import logic from '../logic/index.js'
// import { errors } from 'com'
// import nodemailer from 'nodemailer'

// const { NotFoundError, ContentError, TokenError } = errors

// const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD } })


// export default async (req, res) => {
//     try {
//         const { name, email, phone, message } = req.body

//         await logic.userContact(name, email, phone, message)

//         const mailOptions = { from: process.env.EMAIL, to: process.env.EMAIL, subject: 'Contact Form', text: `Name: ${name} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}` }

//         await transporter.sendMail(mailOptions)
//         res.status(201).send()
//     } catch (error) {
//         let status = 500
//         let errorMessage

//         if (error instanceof NotFoundError) {
//             status = 404
//         } else if (error instanceof ContentError || error instanceof TypeError) {
//             status = 406
//         } else if (error instanceof JsonWebTokenError) {
//             status = 401
//             errorMessage = new TokenError(error.message).message
//         }
//         res.status(status).json({ error: error.constructor.name, message: error.message })
//     }
// }