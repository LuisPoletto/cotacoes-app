import { Pencil, Trash } from "lucide-react";

export default function CotacaoList({
    cotacoes,
    editandoCotacaoId,
    setEditandoCotacaoId,
    valorCotacaoEditado,
    setValorCotacaoEditado,
    onEditar,
    onExcluir
}) {
    const formatarValor = (valor) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    }

    const formatarData = (dataString) => {
        const data = new Date(dataString);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        const horas = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');

        return `${dia}/${mes}/${ano} | ${horas}:${minutos}`;
    }

    const btnStyle = {

    };

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
            {cotacoes.map((cot) => (
                <div key={cot.id} style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5px 0",
                    color: "#222",
                }}>
                    {editandoCotacaoId === cot.id ? (
                        <input
                            value={valorCotacaoEditado}
                            onChange={e => setValorCotacaoEditado(e.target.value)}
                        />
                    ) : (
                        <span>{cot.indicador.nome} - {formatarValor(cot.valor)} - {formatarData(cot.data)}</span>
                    )}
                    <div style={{ display: "flex", gap: "5px" }}>
                        {editandoCotacaoId === cot.id ? (
                            <button style={{
                                backgroundColor: "#222",
                                border: "none",
                                borderRadius: "50px",
                                width: "80px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#fff"
                            }} onClick={() => onEditar(cot.id)}>Salvar</button>
                        ) : (
                            <button style={{
                                backgroundColor: "#222",
                                border: "none",
                                borderRadius: "50px",
                                width: "80px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#fff"
                            }} onClick={() => {
                                setEditandoCotacaoId(cot.id);
                                setValorCotacaoEditado(cot.valor);
                            }}>
                                <Pencil size={20} />
                            </button>
                        )}
                        <button style={{
                            backgroundColor: "#222",
                            border: "none",
                            borderRadius: "50px",
                            width: "80px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#fff"
                        }} onClick={() => onExcluir(cot.id)}>
                            <Trash size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
