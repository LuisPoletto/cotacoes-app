import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function DeleteIndicadorModal({ isOpen, onClose, onConfirm, indicador }) {
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
                        <h2 style={{ margin: 0, color: "#08a88a" }}>Excluir Indicador - {indicador.nome}</h2>
                        <X onClick={onClose} style={{ cursor: "pointer", color: "#08a88a" }} size={24} />
                    </div>

                    <div style={{ padding: "20px 0" }}>
                        <h1 style={{ color: "#222", fontSize: "1.5rem", textAlign: "center" }}>Deseja realmente excluir o indicador {indicador.nome} ? </h1>
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
                            backgroundColor: "#222"
                        }}>Cancelar</button>
                        <button onClick={onConfirm} style={{
                            padding: "10px 20px",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            backgroundColor: "#08a88a",
                            color: "#fff",
                            fontWeight: "bold"
                        }}>Confirmar</button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}