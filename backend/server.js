const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

// endpoint del formulario
app.post('/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gabrielacarrazana96@gmail.com',
        pass: 'mrvealpihlxrbocs'
      }
    });

    await transporter.sendMail({
      from: email,
      to: 'gabrielacarrazana96@gmail.com',
      subject: 'Nuevo contacto desde web',
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
    });

    res.json({ ok: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});