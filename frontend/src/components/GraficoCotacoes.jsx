import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function GraficoCotacoes({ cotacoes, indicadorId }) {
    const dadosFormatados = cotacoes
        .filter(c => c.indicador.id === indicadorId)
        .map(c => ({
            data: new Date(c.data).toLocaleDateString(),
            valor: parseFloat(c.valor),
            timestamp: new Date(c.data).getTime()
        }))
        .sort((a, b) => a.timestamp - b.timestamp);

    const obterTicks = () => {
        if (dadosFormatados.length == 0) return [];
        if (dadosFormatados.length <= 5) return dadosFormatados.map(d => d.data);

        const pontos = [];
        const total = dadosFormatados.length;

        for (let i = 0; i < 5; i++) {
            const index = Math.min(
                Math.floor((i * (total - 1)) / 4),
                total - 1
            );

            pontos.push(dadosFormatados[index].data);
        }
        return pontos;
    };

    const ticksCustomizados = obterTicks();

    return (
        <div style={{ width: '100%', height: 400, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '20px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosFormatados}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="data" stroke="#ccc" ticks={ticksCustomizados} />
                    <YAxis stroke="#ccc" />
                    <Tooltip
                        formatter={(value) => [
                            value.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            }),
                            "Valor"
                        ]}
                        labelFormatter={(label) => `Data: ${label}`}
                        contentStyle={{ backgroundColor: '#121331', border: '1px solid #08a88a' }}
                        itemStyle={{ color: '#08a88a' }}
                    />

                    <Line
                        type="monotone"
                        dataKey="valor"
                        stroke="#08a88a"
                        strokeWidth={3}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8 }}
                        isAnimationActive={true}
                        animationDuration={1500}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}