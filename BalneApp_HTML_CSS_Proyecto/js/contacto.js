const formulario = document.getElementById('contact-form');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = formulario.elements.nombre.value.trim();
  const email = formulario.elements.email;
  const telefono = formulario.elements.telefono.value.trim();
  const digitosTelefono = telefono.replace(/\D/g, '');
  const motivo = formulario.elements.motivo.value;
  const preferencia = formulario.querySelector('input[name="preferencia"]:checked');
  const mensaje = formulario.elements.mensaje.value.trim();

  if (nombre.length < 3) {
    alert('Ingresá tu nombre completo (al menos 3 caracteres).');
    formulario.elements.nombre.focus();
    return;
  }

  if (!email.value.trim() || !email.validity.valid) {
    alert('Ingresá un correo electrónico válido para que podamos responderte.');
    email.focus();
    return;
  }

  if (!/^\+?[0-9\s()-]+$/.test(telefono) || digitosTelefono.length < 8 || digitosTelefono.length > 15) {
    alert('Ingresá un teléfono válido con al menos 8 números.');
    formulario.elements.telefono.focus();
    return;
  }

  if (!motivo) {
    alert('Seleccioná el motivo de tu consulta.');
    formulario.elements.motivo.focus();
    return;
  }

  if (!preferencia) {
    alert('Elegí cómo preferís que nos comuniquemos con vos.');
    formulario.querySelector('input[name="preferencia"]').focus();
    return;
  }

  if (mensaje.length < 10) {
    alert('Escribí un mensaje de al menos 10 caracteres.');
    formulario.elements.mensaje.focus();
    return;
  }

  alert('¡Gracias por escribirnos! Tu consulta quedó registrada en esta demostración.');
  formulario.reset();
});
