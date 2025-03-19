document.getElementById("formImpostos").addEventListener("submit", function(event) {
    event.preventDefault();

    let valorCompra = parseFloat(document.getElementById("valorCompra").value);
    
    if (isNaN(valorCompra) || valorCompra <= 0) {
        alert("Digite um valor válido para a compra.");
        return;
    }

    let icms = valorCompra * 0.18; // Exemplo: 18% de ICMS
    let iss = valorCompra * 0.05; // Exemplo: 5% de ISS
    let total = valorCompra + icms + iss;

    // Exibir resultados no frontend
    document.getElementById("resultadoIcms").textContent = `ICMS: R$ ${icms.toFixed(2)}`;
    document.getElementById("resultadoIss").textContent = `ISS: R$ ${iss.toFixed(2)}`;
    document.getElementById("resultadoTotal").textContent = `Total com Impostos: R$ ${total.toFixed(2)}`;

    // Criar um objeto para armazenar os dados
    const calculo = {
        valorCompra: valorCompra,
        icms: icms,
        iss: iss,
        total: total,
    };

    // Salvar o último cálculo no LocalStorage, substituindo o anterior
    localStorage.setItem("historicoImpostos", JSON.stringify([calculo]));

    // Exibir o histórico atualizado
    exibirHistorico();
});

// Função para exibir o histórico de cálculos armazenados
function exibirHistorico() {
    let historico = JSON.parse(localStorage.getItem("historicoImpostos")) || [];
    const historicoDiv = document.getElementById("historico");

    historicoDiv.innerHTML = ""; // Limpa o conteúdo anterior

    if (historico.length > 0) {
        const item = historico[0]; // Como estamos guardando apenas o último cálculo, pegamos o primeiro item
        const div = document.createElement("div");
        div.classList.add("calculo-historico");
        div.innerHTML = `
            <p><strong>Cálculo:</strong></p>
            <p>Valor da Compra: R$ ${item.valorCompra.toFixed(2)}</p>
            <p>ICMS: R$ ${item.icms.toFixed(2)}</p>
            <p>ISS: R$ ${item.iss.toFixed(2)}</p>
            <p>Total: R$ ${item.total.toFixed(2)}</p>
            <hr>
        `;
        historicoDiv.appendChild(div);
    }
}

// Chama a função para exibir o histórico de cálculos assim que a página for carregada
document.addEventListener("DOMContentLoaded", exibirHistorico);
