document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const name = encodeURIComponent(document.getElementById('name').value);
    const date = encodeURIComponent(document.getElementById('date').value);
    const time = encodeURIComponent(document.getElementById('time').value);
    const people = encodeURIComponent(document.getElementById('people').value);

    // Crear la URL con los datos
    const url = `https://marchosaurio.github.io/PruebaQR/confirmacion.html?name=${name}&date=${date}&time=${time}&people=${people}`;

    // Generar el QR
    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = '';  // Limpiar cualquier código QR previo

    const qrCode = new QRCodeStyling({
        width: 256,
        height: 256,
        data: url,
    });

    qrCode.append(qrCodeContainer);

    // Redireccionar al usuario a la página de confirmación después de 3 segundos
    setTimeout(() => {
        window.location.href = url;
    }, 3000); // Cambiar a 3000 (3 segundos) según tus preferencias
});
