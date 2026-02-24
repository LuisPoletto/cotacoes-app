import { Calendar } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function GraficoForm({
    indicadores,
    indicadorSelecionado,
    setIndicadorSelecionado,
    setDataInicial,
    setDataFinal,
    dataInicial,
    dataFinal,
    onGerarGrafico
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "20px",
            fontFamily: "sans-serif"
        }}>
            <div style={{
                display: "flex",
                backgroundColor: "#fff",
                padding: "8px 12px",
                borderRadius: "50px",
                width: "100%",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "1px solid #eee"
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
                        fontSize: "16px",
                    }}
                >
                    <option value="">Selecione um indicador</option>
                    {indicadores.map(ind => (
                        <option key={ind.id} value={ind.id}>{ind.nome}</option>
                    ))}
                </select>
            </div>

            <div style={{ display: "flex", gap: "10px", width: "100%", maxWidth: "500px" }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    padding: "8px 12px",
                    borderRadius: "50px",
                    width: "100%",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    border: "1px solid #eee"
                }}>
                    <Calendar size={25} color="#08a88a" />
                    <DatePicker
                        selected={dataInicial}
                        onChange={(date) => setDataInicial(date)}
                        placeholderText="Data Inicial"
                        dateFormat="dd/MM/yyyy"
                        className="custom-datepicker"
                        onKeyDown={(e) => {
                            if (e.key != "Tab") {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    padding: "8px 12px",
                    borderRadius: "50px",
                    width: "100%",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    border: "1px solid #eee"
                }}>
                    <Calendar size={25} color="#08a88a" />
                    <DatePicker
                        selected={dataFinal}
                        onChange={(date) => setDataFinal(date)}
                        placeholderText="Data Final"
                        dateFormat="dd/MM/yyyy"
                        className="custom-datepicker"
                        onKeyDown={(e) => {
                            if (e.key != "Tab") {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>
                <div style={{
                    display: "flex",
                    width: "200px",
                    height: "50px",
                    paddingTop: "8px",
                }}>
                    <button onClick={onGerarGrafico} style={{
                        backgroundColor: "#08a88a",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        alignContent: "center",
                        fontWeight: "bold",
                    }}>
                        Gerar Gráfico
                    </button>
                </div>
            </div>
            <style>{`
                .custom-datepicker {
                    width: 100%;
                    height: 40px;
                    border: none;
                    outline: none;
                    text-align: center;
                    background: transparent;
                    font-size: 16px;
                    cursor: pointer;
                    color: #222;
                }
            `}</style>
        </div>
    );
}
