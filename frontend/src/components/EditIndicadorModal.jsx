import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function EditIndicadorModal({ isOpen, onClose, nome, setNome, onConfirm }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                backdropFilter: "blur(4px)"
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    style={{
                        backgroundColor: "#fff",
                        padding: "25px",
                        borderRadius: "15px",
                        width: "90%",
                        maxWidth: "400px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
                    }}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <h2 style={{ margin: 0, color: "#08a88a" }}>Editar Indicador - {nome}</h2>
                        <X onClick={onClose} style={{ cursor: "pointer", color: "#08a88a" }} size={24} />
                    </div>

                    <div style={{ padding: "20px 0" }}>
                        <label style={{
                            padding: "12px",
                            color: "#08a88a",
                            fontWeight: "bold",
                        }}>Nome do Indicador</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                fontSize: "1rem",
                                outline: "none",
                                boxSizing: "border-box",
                                color: "#222",
                                backgroundColor: "#eee",
                                borderRadius: "50px",
                            }}
                            autoFocus
                        />
                    </div>

                    <div style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-end",
                        marginTop: "10px"
                    }}>
                        <button onClick={onClose} style={{
                            padding: "10px 20px",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            color: "#fff",
                            backgroundColor: "#777",
                            borderRadius: "50px",
                        }}>Cancelar</button>
                        <button onClick={onConfirm} style={{
                            padding: "10px 20px",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            backgroundColor: "#08a88a",
                            color: "#fff",
                            fontWeight: "bold",
                            borderRadius: "50px",
                        }}>Salvar Alterações</button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}