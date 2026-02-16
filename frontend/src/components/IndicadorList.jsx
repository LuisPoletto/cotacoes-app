import { Pencil, Trash } from "lucide-react";

export default function IndicadorList({ indicadores, editandoId, setEditandoId, nomeEditado, setNomeEditado, onEditar, onExcluir }) {
    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0"
        }}>
            {indicadores.map((ind, index) => (
                <div key={ind.id} style={{ width: "90%" }}>
                    <div style={{
                        color: "#222",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px 0"
                    }}>
                        {editandoId === ind.id ? (
                            <input value={nomeEditado} onChange={e => setNomeEditado(e.target.value)} />
                        ) : (
                            <span>{ind.nome}</span>
                        )}
                        <div style={{ display: "flex", gap: "5px" }}>
                            <button onClick={() => { setEditandoId(ind.id); setNomeEditado(ind.nome); }} style={{
                                backgroundColor: "#222",
                                border: "none",
                                borderRadius: "50px",
                                width: "80px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}>
                                <Pencil size={20} />
                            </button>
                            {editandoId === ind.id && (
                                <button onClick={() => onEditar(ind.id)} style={{
                                    backgroundColor: "#222",
                                    border: "none",
                                    borderRadius: "50px",
                                    width: "80px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}>Salvar</button>
                            )}
                            <button onClick={() => onExcluir(ind.id)} style={{
                                backgroundColor: "#222",
                                border: "none",
                                borderRadius: "50px",
                                width: "80px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}>
                                <Trash size={20} />
                            </button>
                        </div>
                    </div>

                    {index < indicadores.length - 1 && (
                        <hr style={{ border: "0", height: "1px", backgroundColor: "#ccc", width: "100%" }} />
                    )}
                </div>
            ))}
        </div>
    );
}
