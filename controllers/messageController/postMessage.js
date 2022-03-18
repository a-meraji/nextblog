import errorController from '../errorController'
import nodemailer from 'nodemailer';

export default function postMessage(req, res) {
  try {
    const { userName, userEmail, userMessage } = req.body
    console.log( userName, userEmail, userMessage)
    if (!userName || !userEmail || !userMessage) {
      return errorController(422, 'Missing fields', res)
    }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass:  process.env.EMAIL_PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: process.env.EMAIL,
    to: process.env.DEST_EMAIL,
    subject: `Message From ${userName}`,
    text: userMessage + " | Sent from: " + userEmail,
    html: `<div>${userMessage}</div><p>Sent from:
    ${userEmail}</p>`
  }

  transporter.sendMail(mailData, (err, info) => {
    if(err)
    errorController(500, err, res)
    else
      return res.status(200).json({ message: 'Message sent' })
  })

  } catch(err) {
    errorController(500, err, res)
  }
}
