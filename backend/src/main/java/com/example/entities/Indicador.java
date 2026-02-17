package com.example.entities;

import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;
import io.micronaut.serde.annotation.Serdeable;
import java.util.UUID;

@Serdeable
@MappedEntity
public class Indicador {
    @Id
    private UUID id;
    private String nome;

    public Indicador() {}

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
}
