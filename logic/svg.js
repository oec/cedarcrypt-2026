fetch('assets/blind-signatures.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('bs').innerHTML = svg;
    });

fetch('assets/blind-signatures-taler.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('bs-taler').innerHTML = svg;
    });

fetch('assets/coin-struc.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('coin-struc').innerHTML = svg;
    });

fetch('assets/payment.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('payment').innerHTML = svg;
    });

fetch('assets/cheat.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('cheat').innerHTML = svg;
    });