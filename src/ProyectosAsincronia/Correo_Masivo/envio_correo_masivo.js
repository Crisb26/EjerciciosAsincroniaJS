import nodemailer from 'nodemailer';

// ✅ Configura el transporte SMTP (Gmail con App Password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sebastian.pinilla.arcila@gmail.com',
    pass: 'tdgo znur rddc xuww', // Nunca pongas tu contraseña real
  },
});

// ✅ Función para enviar un solo correo
const enviarCorreo = async (destinatario, index) => {
  const mailOptions = {
    from: '"Mi Empresa" <sebastian.pinilla.arcila@gmail.com>',
    to: destinatario,
    subject: `Correo masivo #${index + 1}`,
    text: `Hola, este es un correo masivo número ${index + 1}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Enviado a ${destinatario}`);
  } catch (err) {
    console.error(`❌ Error con ${destinatario}:`, err.message);
  }
};

// ✅ Lista de correos simulada (solo 10 para prueba)
const listaDestinatarios = Array.from({ length: 10 }, (_, i) => `correo${i + 1}@ejemplo.com`);

// ✅ Enviar por lotes para evitar bloqueos (5 correos a la vez)
async function enviarCorreosMasivos() {
  console.time('Tiempo de envío');
  const batchSize = 5;

  for (let i = 0; i < listaDestinatarios.length; i += batchSize) {
    const lote = listaDestinatarios.slice(i, i + batchSize);
    await Promise.all(lote.map((correo, idx) => enviarCorreo(correo, i + idx)));
    await new Promise(res => setTimeout(res, 1000)); // Espera 1 seg entre lotes
  }

  console.log('✅ Todos los correos enviados');
  console.timeEnd('Tiempo de envío');
}

enviarCorreosMasivos();