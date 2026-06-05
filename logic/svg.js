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

fetch('assets/payment2.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('payment2').innerHTML = svg;
    });

fetch('assets/money-laundry0.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('cheat0').innerHTML = svg;
    });

fetch('assets/money-laundry1.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('cheat1').innerHTML = svg;
    });


fetch('assets/money-laundry2.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('cheat2').innerHTML = svg;
    });

fetch('assets/refresh-prot.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('refresh-prot').innerHTML = svg;
    });

fetch('assets/refresh-derive.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('refresh-derive').innerHTML = svg;
    });

fetch('assets/reobtain-coin.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('reobtain-coin').innerHTML = svg;
    });

fetch('assets/pq-idea.svg')
    .then(r => r.text())
    .then(svg => {
        document.getElementById('pq-idea').innerHTML = svg;
        Reveal.sync();
        Reveal.layout();
    });