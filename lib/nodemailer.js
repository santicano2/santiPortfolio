import nodemailer from 'nodemailer'
const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const tansporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass
  }
})
