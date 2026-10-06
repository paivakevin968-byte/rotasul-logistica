function mostrarFrota() {
    const detalhes = document.getElementById("detalhes-frota");

    detalhes.innerHTML = `
        <h4>Detalhes da Frota</h4>
        <p>🚛 108 veículos</p>
        <p>🚚 86 caminhões</p>
        <p>🚛 22 carretas</p>
        <p>📦 55 cargas secas</p>
        <p>❄️ 53 cargas refrigeradas</p>
        <p>⛽ 63 veículos a diesel</p>
        <p>⚡ 45 veículos elétricos</p>

        <button onclick="ocultarFrota()">Ocultar detalhes</button>
    `;
}

function ocultarFrota() {
    const detalhes = document.getElementById("detalhes-frota");

    detalhes.innerHTML = "";
}


function mostrarBrasil() {
    const detalhes = document.getElementById("detalhes-brasil");

    detalhes.innerHTML = `
        <h4>Operação no Brasil</h4>
        <p>🇧🇷 25 pontos principais de operação</p>
        <p>🚛 Operações locais e transferências</p>
        <p>📦 Cargas secas e refrigeradas</p>
        <p>🔄 Contratos de longa distância</p>

        <button onclick="ocultarBrasil()">Ocultar detalhes</button>
    `;
}

function ocultarBrasil() {
    const detalhes = document.getElementById("detalhes-brasil");

    detalhes.innerHTML = "";
}


function mostrarArgentina() {
    const detalhes = document.getElementById("detalhes-argentina");

    detalhes.innerHTML = `
        <h4>Operação na Argentina</h4>
        <p>🇦🇷 3 cidades de operação</p>
        <p>📍 Concordia</p>
        <p>📍 Gualeguaychú</p>
        <p>📍 Rosário</p>

        <button onclick="ocultarArgentina()">Ocultar detalhes</button>
    `;
}

function ocultarArgentina() {
    const detalhes = document.getElementById("detalhes-argentina");

    detalhes.innerHTML = "";
}


function mostrarContrato1() {
    const detalhes = document.getElementById("detalhes-contrato1");

    detalhes.innerHTML = `
        <h4>Detalhes da operação</h4>
        <p>⏳ Duração do contrato: 44 dias</p>
        <p>📊 Status: Em andamento</p>
        <p>💰 Valor por m³: R$ 503</p>
        <p>📦 Restante: 1.790 m³</p>
        <p>🚛 Operação dentro do prazo</p>

        <button onclick="ocultarContrato1()">Ocultar detalhes</button>
    `;
}

function ocultarContrato1() {
    const detalhes = document.getElementById("detalhes-contrato1");

    detalhes.innerHTML = "";
}


function mostrarContrato2() {
    const detalhes = document.getElementById("detalhes-contrato2");

    detalhes.innerHTML = `
        <h4>Detalhes da operação</h4>
        <p>⏳ Duração do contrato: 40 dias</p>
        <p>📊 Status: Em andamento</p>
        <p>📦 Carga seca</p>
        <p>⚖️ Restante: 279.551 kg</p>
        <p>💰 Valor por 1.000 kg: R$ 1.710</p>
        <p>🚛 Operação dentro do prazo</p>

        <button onclick="ocultarContrato2()">Ocultar detalhes</button>
    `;
}

function ocultarContrato2() {
    const detalhes = document.getElementById("detalhes-contrato2");

    detalhes.innerHTML = "";
}
