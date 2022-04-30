let year = 2000;

function tahunKabisat() {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' adalah tahun kabisat');
    } else {
        console.log(year + ' bukan tahun kabisat');
    }
}

tahunKabisat()
