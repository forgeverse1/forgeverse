let energy = 100;

async function mine() {
    if (energy <= 0) {
        document.getElementById("status").innerText = "Sem energia!";
        return;
    }

    energy -= 10;
    document.getElementById("energy").innerText = energy;

    // Simulação de mineração (lado jogo)
    document.getElementById("status").innerText =
        "Minerando... recompensa enviada para carteira do jogo.";

    // Aqui futuramente entra chamada do SMART CONTRACT real
    console.log("Enviar recompensa do contrato:", CONFIG.TOKEN_CONTRACT);
}

document.getElementById("mineBtn").onclick = mine;
