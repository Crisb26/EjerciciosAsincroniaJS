import nodemailer from 'nodemailer';

// Configura el transporte SMTP (este es un ejemplo con Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sebastian@gmail.com',       // ← tu correo
    pass: 'colombia45',         // ← clave de aplicación, no tu clave normal
  },
});

// Función para enviar un correo individualq
const enviarCorreo = (destinatario, index) => {
  const mailOptions = {
    from: '"Mi Empresa" <jan_sesasd@gmail.com>',
    to: destinatario,
    subject: `Correo masivo #${index + 1}`,
    text: `Hola, este es un correo masivo número ${index + 1}`,
  };

  return transporter.sendMail(mailOptions)
    .then(() => console.log(`✅ Enviado a ${destinatario}`))
    .catch(err => console.error(`❌ Error con ${destinatario}:`, err));
};

// Simulación de lista de destinatarios
const listaDestinatarios = Array.from({ length: 1000 }, (_, i) => `correo${i + 1}@ejemplo.com`);

// Envía todos los correos en paralelo
async function enviarCorreosMasivos() {
  console.time('Tiempo de envío');
  try {
    const tareas = listaDestinatarios.map((correo, i) => enviarCorreo(correo, i));
    await Promise.all(tareas);
    console.log('✅ Todos los correos enviados');
  } catch (error) {
    console.error('❌ Error general:', error);
  }
  console.timeEnd('Tiempo de envío');
}

enviarCorreosMasivos();
