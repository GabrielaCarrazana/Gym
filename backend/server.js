// 🔥 Abrir modal
function abrirModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// ❌ Cerrar modal
function cerrarModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

// 🚀 Enviar formulario
async function enviarFormulario(e) {
  e.preventDefault();

  const inputs = e.target.elements;

  const data = {
    nombre: inputs[0].value,
    email: inputs[1].value,
    mensaje: inputs[2].value
  };

  try {
    const res = await fetch('https://TU-BACKEND.onrender.com/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert('Mensaje enviado 🚀');
      cerrarModal();
      e.target.reset();
    } else {
      alert('Error al enviar ❌');
    }

  } catch (error) {
    console.error(error);
    alert('Error de conexión ⚠️');
  }
}