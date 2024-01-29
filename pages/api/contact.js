import { transporter, mailOptions } from '../../lib/nodemailer'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: 'Test string',
        html: '<h1>Test title</h1><p>Body text</p>'
      })

      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }

  return res.status(400).json({ message: 'Bad request' })
}

export default handler
