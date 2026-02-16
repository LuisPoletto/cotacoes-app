package com.example.Responses;
import io.micronaut.serde.annotation.Serdeable;

@Serdeable
public class CotacaoResponse {
    private String id;
    private IndicadorResponse indicador;
    private String valor;
    private String data;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public IndicadorResponse getIndicador() { return indicador; }
    public void setIndicador(IndicadorResponse indicador) { this.indicador = indicador; }

    public String getValor() { return valor; }
    public void setValor(String valor) { this.valor = valor; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
}
