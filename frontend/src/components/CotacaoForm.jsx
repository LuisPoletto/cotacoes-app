export default function CotacaoForm({
    indicadores,
    indicadorSelecionado,
    setIndicadorSelecionado,
    valorCotacao,
    setValorCotacao,
    onSalvar
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "20px",
        }}>
            <div style={{
                display: "flex",
                backgroundColor: "#fff",
                padding: "8px 12px",
                borderRadius: "50px",
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}>
                <select
                    value={indicadorSelecionado}
                    onChange={e => setIndicadorSelecionado(e.target.value)}
                    style={{
                        width: "100%",
                        height: "40px",
                        textAlign: "center",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#222",
                        fontSize: "18px",
                    }}
                >
                    <option value="">Selecione um indicador</option>
                    {indicadores.map(ind => (
                        <option key={ind.id} value={ind.id}>{ind.nome}</option>
                    ))}
                </select>
            </div>

            {indicadorSelecionado !== "" && (
                <div style={{
                    display: "flex",
                    backgroundColor: "#fff",
                    padding: "8px 12px",
                    borderRadius: "50px",
                    width: "100%",
                    maxWidth: "500px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}>
                    <input
                        placeholder="R$ Valor"
                        value={valorCotacao}
                        onChange={e => setValorCotacao(e.target.value)}
                        style={{
                            width: "100%",
                            height: "40px",
                            textAlign: "center",
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#222",
                            fontSize: "18px",
                        }}
                    />
                    <button
                        onClick={onSalvar}
                        style={{
                            backgroundColor: "#222",
                            border: "none",
                            borderRadius: "50px",
                            width: "80px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        Salvar
                    </button>
                </div>
            )}
        </div>
    );
}
