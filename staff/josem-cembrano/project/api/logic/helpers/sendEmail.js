import nodemailer from 'nodemailer'

export default async function sendEmail(name, email, phone, message) {
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT_CONTACT,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    })
    await transporter.sendMail({
        from:'alaska@malamute.com',
        to: 'chemaisdi@gmail.com',
        subject: 'Ha contactado contigo',
        text: message,
        html: `<h1>Ha contactado contigo ${name}</h1><p>Correo: ${email}</p> <p>Telefono: ${phone}</p> <p>Mensaje: ${message}</p>`
    })
}
