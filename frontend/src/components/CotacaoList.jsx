import { Pencil, Trash } from "lucide-react";

export default function CotacaoList({

    cotacoes,

    onAbrirEditar,

    onExcluir

}) {

    const formatarValor = (valor) => {

        return new Intl.NumberFormat(

            "pt-BR",

            {

                style: "currency",

                currency: "BRL"

            }

        ).format(valor);

    };



    const formatarData = (dataString) => {

        const data = new Date(dataString);



        const dia = String(

            data.getDate()

        ).padStart(2, "0");



        const mes = String(

            data.getMonth() + 1

        ).padStart(2, "0");



        const ano = data.getFullYear();



        const horas = String(

            data.getHours()

        ).padStart(2, "0");



        const minutos = String(

            data.getMinutes()

        ).padStart(2, "0");



        return `${dia}/${mes}/${ano} | ${horas}:${minutos}`;

    };



    return (

        <div style={{

            backgroundColor: "#fff",

            borderRadius: "35px",

            width: "100%",

            maxWidth: "500px",

            display: "flex",

            flexDirection: "column",

            alignItems: "center",

            padding: "10px 0",

            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",

            maxHeight: "300px",

            overflowY: "auto",

            overflowX: "hidden",

            scrollbarWidth: "thin",

            scrollbarColor: "#08a88a #121331",

        }}>



            {cotacoes.length === 0 && (

                <h1 style={{

                    fontSize: "1.5rem",

                    color: "#777"

                }}>

                    Nenhuma Cotação registrada!

                </h1>

            )}



            {cotacoes.map((cot, index) => (

                <div

                    key={cot.id}

                    style={{ width: "100%" }}

                >

                    <div style={{

                        width: "90%",

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                        padding: "5px 0",

                        color: "#222",

                        margin: "0 auto"

                    }}>




                        <span>

                            {cot.indicador.nome}

                            {" - "}

                            {formatarValor(

                                cot.valor

                            )}

                            {" - "}

                            {formatarData(

                                cot.data

                            )}

                        </span>



                        {/* BOTÕES */}

                        <div

                            style={{

                                display: "flex",

                                gap: "5px"

                            }}

                        >




                            <button

                                style={{

                                    backgroundColor: "#08a88a",

                                    border: "none",

                                    borderRadius: "50px",

                                    width: "80px",

                                    height: "40px",

                                    display: "flex",

                                    alignItems: "center",

                                    justifyContent: "center",

                                    cursor: "pointer",

                                    color: "#fff"

                                }}

                                onClick={() =>

                                    onAbrirEditar(cot)

                                }

                            >

                                <Pencil size={20} />

                            </button>



                            <button

                                style={{

                                    backgroundColor: "#08a88a",

                                    border: "none",

                                    borderRadius: "50px",

                                    width: "80px",

                                    height: "40px",

                                    display: "flex",

                                    alignItems: "center",

                                    justifyContent: "center",

                                    cursor: "pointer",

                                    color: "#fff"

                                }}

                                onClick={() =>

                                    onExcluir(

                                        cot.id

                                    )

                                }

                            >

                                <Trash size={20} />

                            </button>

                        </div>

                    </div>



                    {index <

                        cotacoes.length - 1 && (

                            <hr style={{

                                border: "0",

                                height: "1px",

                                backgroundColor: "#ccc",

                                width: "90%",

                                margin: "5px auto"

                            }} />

                        )}

                </div>

            ))}

        </div>

    );

}
