package com.example.services;

import com.example.entities.Indicador;
import com.example.repositories.IndicadorRepository;
import jakarta.inject.Singleton;
import java.util.List;
import java.util.UUID;

@Singleton
public class IndicadorService {
    private final IndicadorRepository repository;

    public IndicadorService(IndicadorRepository repository) {
        this.repository = repository;
    }

    public Indicador salvar(Indicador indicador) {
        if (indicador.getId() == null) {
            indicador.setId(UUID.randomUUID());
        }
        return repository.save(indicador);
    }

    public List<Indicador> listar() {
        return (List<Indicador>) repository.findAll();
    }

    public Indicador editar(UUID id, Indicador novo) {
        if (repository.existsById(id)) {
            novo.setId(id);
            return repository.update(novo);
        }
        return null;
    }

    public void excluir(UUID id) {
        repository.deleteById(id);
    }

    public Indicador buscarPorId(UUID id) {
        return repository.findById(id).orElse(null);
    }
}