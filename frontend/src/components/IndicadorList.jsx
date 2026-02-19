import { Pencil, Trash } from "lucide-react";
import EditIndicadorModal from "./EditIndicadorModal";
import { useState } from "react";
import DeleteIndicadorModal from "./DeleteIndicadorModal";

export default function IndicadorList({ indicadores, onEditar, onExcluir }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [tempNome, setTempNome] = useState("");
    const [tempId, setTempId] = useState(null);
    const [indicadorParaDeletar, setIndicadorParaDeletar] = useState(null);

    const abrirEdicao = (ind) => {
        setTempId(ind.id);
        setTempNome(ind.nome);
        setIsModalOpen(true);
    };

    const confirmarEdicao = () => {
        onEditar(tempId, tempNome);
        setIsModalOpen(false);
    };

    const abrirConfirmacaoDelete = (ind) => {
        setTempId(ind.id);
        setIndicadorParaDeletar(ind);
        setIsDeleteModalOpen(true);
    };

    const confirmarDelete = () => {
        onExcluir(tempId);
        setIsDeleteModalOpen(false);
    }

    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            borderRadius: "50px",
        }}>
            <EditIndicadorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                nome={tempNome}
                setNome={setTempNome}
                onConfirm={confirmarEdicao}
            />

            <DeleteIndicadorModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmarDelete}
                indicador={indicadorParaDeletar || { nome: "" }}
            />

            {indicadores.length == 0 && (
                <h1 style={{ fontSize: "1.5rem", color: "#777" }}>Nenhum Indicador registrado!</h1>
            )}

            {indicadores.map((ind, index) => (
                <div key={ind.id} style={{ width: "90%" }}>
                    <div style={{
                        color: "#222",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px 0"
                    }}>

                        <span>{ind.nome}</span>

                        <div style={{ display: "flex", gap: "5px" }}>
                            <button onClick={() => abrirEdicao(ind)} style={{
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
                            }}>
                                <Pencil size={20} />
                            </button>
                            <button onClick={() => abrirConfirmacaoDelete(ind)} style={{
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
