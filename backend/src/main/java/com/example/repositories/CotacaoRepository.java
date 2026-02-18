package com.example.repositories;

import com.example.entities.Cotacao;

import io.micronaut.data.annotation.Join;
import io.micronaut.data.repository.CrudRepository;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import java.util.List;
import java.util.UUID;

@JdbcRepository(dialect = Dialect.POSTGRES)
public interface CotacaoRepository extends CrudRepository<Cotacao, UUID> {

    @Join(value = "indicador", type = Join.Type.FETCH)
    List<Cotacao> list();

    @Join(value = "indicador", type = Join.Type.FETCH)
    List<Cotacao> findByIndicadorIdAndDataBetween(UUID indicadorId, String dataInicio, String dataFim);
}