const API_BASE = "http://localhost:8080";

export async function listarCotacoes() {
    const res = await fetch(`${API_BASE}/cotacoes`);
    return res.json();
}

export async function salvarCotacao(indicadorId, valor) {
    const res = await fetch(`${API_BASE}/cotacoes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            indicador: { id: indicadorId },
            valor,
            data: new Date().toISOString()
        })
    });
    return res.json();
}

export async function editarCotacao(id, valor) {
    const res = await fetch(`${API_BASE}/cotacoes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor })
    });
    return res.json;
}

export async function excluirCotacao(id) {
    await fetch(`${API_BASE}/cotacoes/${id}`, { method: "DELETE" });
}

export async function buscarCotacaoesFiltradas(indicadorId, dataInicio, dataFim) {
    const res = await fetch(
        `${API_BASE}/cotacoes/buscar?indicadorId=${indicadorId}&dataInicio=${dataInicio}&dataFim=${dataFim}`
    );

    return res.json();
}