import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditCotacaoModal({
    isOpen,
    onClose,
    onConfirm,
    cotacao,
    indicadores,
    indicadorSelecionado,
    setIndicadorSelecionado,
    valorCotacaoEditado,
    setValorCotacaoEditado,
    dataRegistro,
    setDataRegistro
}) {

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
                        <h2 style={{
                            margin: 0,
                            color: "#08a88a"
                        }}>
                            Editar Cotação
                        </h2>

                        <X
                            onClick={onClose}
                            style={{
                                cursor: "pointer",
                                color: "#08a88a"
                            }}
                            size={24}
                        />
                    </div>

                    <div style={{
                        padding: "20px 0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}>
                        <div>
                            <label style={{
                                padding: "12px",
                                color: "#08a88a",
                                fontWeight: "bold",
                            }}>
                                Indicador</label>
                            <select
                                value={indicadorSelecionado}
                                disabled
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    backgroundColor: "#eee",
                                    color: "#222",
                                    borderRadius: "50px",
                                }}
                            >
                                <option value="">
                                    Selecione o Indicador
                                </option>

                                {indicadores?.map((indicador) => (
                                    <option
                                        key={indicador.id}
                                        value={indicador.id}
                                    >
                                        {indicador.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label style={{
                                padding: "12px",
                                color: "#08a88a",
                                fontWeight: "bold",
                            }}>Valor R$</label>
                            <input
                                type="number"
                                step="0.01"
                                placeholder="Valor"
                                value={valorCotacaoEditado}
                                onChange={(e) =>
                                    setValorCotacaoEditado(e.target.value)
                                }
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    backgroundColor: "#eee",
                                    color: "#222",
                                    boxSizing: "border-box",
                                    borderRadius: "50px",
                                }}
                            />
                        </div>

                        <div>
                            <label style={{
                                padding: "12px",
                                color: "#08a88a",
                                fontWeight: "bold",
                            }}>
                                Data de Registro</label>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                backgroundColor: "#eee",
                                padding: "12px",
                                borderRadius: "50px",
                                width: "100%",
                                height: "45px",
                                border: "1px solid #ccc",
                                boxSizing: "border-box"
                            }}>
                                <Calendar size={25} color="#08a88a" />
                                <DatePicker
                                    selected={dataRegistro}
                                    onChange={(date) => setDataRegistro(date)}
                                    dateFormat="dd/MM/yyyy"
                                    readOnly={true}
                                    className="custom-datepicker"
                                    onKeyDown={(e) => {
                                        if (e.key != "Tab") {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                            </div>

                        </div>

                    </div>

                    <div style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-end",
                        marginTop: "10px"
                    }}>

                        <button
                            onClick={onClose}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "#777",
                                color: "#fff",
                                borderRadius: "50px",
                            }}
                        >
                            Cancelar
                        </button>

                        <button
                            onClick={onConfirm}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "#08a88a",
                                color: "#fff",
                                fontWeight: "bold",
                                borderRadius: "50px",
                            }}
                        >
                            Salvar Alterações
                        </button>

                    </div>

                </motion.div>
                <style>{`
                .custom-datepicker {
                    width: 100%;
                    height: 40px;
                    border: none;
                    outline: none;
                    text-align: start;
                    background: transparent;
                    font-size: 16px;
                    cursor: pointer;
                    color: #222;
                }
            `}</style>
            </div>
        </AnimatePresence>
    );
}
