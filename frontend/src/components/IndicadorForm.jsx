export default function IndicadorForm({ nome, setNome, onSalvar }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "8px 12px",
            borderRadius: "50px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
            <input
                placeholder="Nome do Indicador"
                value={nome}
                onChange={e => setNome(e.target.value)}
                style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#222",
                    fontSize: "18px",
                    paddingLeft: "15px"
                }}
            />
            <button
                onClick={onSalvar}
                style={{
                    backgroundColor: "#08a88a",
                    color: "#fff",
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
    );
}