package com.example.repositories;

import com.example.entities.Indicador;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;
import java.util.UUID;

@JdbcRepository(dialect = Dialect.POSTGRES)
public interface IndicadorRepository extends CrudRepository<Indicador, UUID> {
}