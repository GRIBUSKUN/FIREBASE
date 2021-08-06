$(document).ready(function () {
    console.log('script loaded');
});
function crear_reloj(cuanto) {
    for (let index = 0; index < cuanto ; index++) {
        $('div.cont-clock').append('<div class="clockline"><div class="subclock-lane"></div></div>');
        console.log(cuanto);
    }
}
