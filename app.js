function calcular() {
    const fechaUsuario = new Date(document.getElementById("fecha").value); // Fecha introducida por el usuario
    const fechaActual = new Date(); // Obtener la fecha actual

    let años = fechaActual.getFullYear() - fechaUsuario.getFullYear(); // Calcular años
    let meses = fechaActual.getMonth() - fechaUsuario.getMonth(); // Calcular meses
    let dias = fechaActual.getDate() - fechaUsuario.getDate(); // Calcular dias

    if (meses < 0 || (meses === 0 && fechaActual.getDate() < fechaUsuario.getDate())) {
        años--;
        meses += 12;
    }

    if (dias < 0) {
        let diaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        dias += diaMes;
        meses--;
    }

    document.getElementById("edad").innerText = `${años} años, ${meses} meses, ${dias} dias`;
}