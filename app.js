function calcular() {
    var fechaUsuario = new Date(document.getElementById("fecha").value);
    var fechaActual = new Date();

    var años = fechaActual.getFullYear() - fechaUsuario.getFullYear();
    var meses = fechaActual.getMonth() - fechaUsuario.getMonth();
    var dias = fechaActual.getDate() - fechaUsuario.getDate();

    if (meses < 0 || (meses === 0 && fechaActual.getDate() < fechaUsuario.getDate())) {
        años--;
        meses += 12;
    }

    if (dias < 0) {
        var diaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        dias += diaMes;
        meses--;
    }

    document.getElementById("edad").innerText = `${años} años, ${meses} meses, ${dias} dias`;
}