package com.example.entities;

import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;
import io.micronaut.data.annotation.Relation;
import io.micronaut.serde.annotation.Serdeable;
import java.util.UUID;

@Serdeable
@MappedEntity
public class Cotacao {
    @Id
    private UUID id;
    @Relation(Relation.Kind.MANY_TO_ONE)
    private Indicador indicador;
    private String valor;
    private String data;

    public Cotacao() {}

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Indicador getIndicador() { return indicador; }
    public void setIndicador(Indicador indicador) { this.indicador = indicador; }

    public String getValor() { return valor; }
    public void setValor(String valor) { this.valor = valor; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
}
