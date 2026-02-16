const API_BASE = "http://localhost:8080";

export async function listarIndicadores() {
    const res = await fetch(`${API_BASE}/indicadores`);
    return res.json();
}

export async function salvarIndicador(nome) {
    const res = await fetch(`${API_BASE}/indicadores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome })
    });
    return res.json;
}

export async function editarIndicador(id, nome) {
    const res = await fetch(`${API_BASE}/indicadores/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome })
    });
    return res.json;
}

export async function excluirIndicador(id) {
    await fetch(`${API_BASE}/indicadores/${id}`, { method: "DELETE" });
}