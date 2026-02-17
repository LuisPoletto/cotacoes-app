package com.example.services;

import com.example.entities.*;
import com.example.repositories.CotacaoRepository;
import com.example.repositories.IndicadorRepository;

import jakarta.inject.Singleton;

import java.util.List;
import java.util.UUID;

@Singleton
public class CotacaoService {

    private final CotacaoRepository repository;
    private final IndicadorRepository indicadorRepository;

    public CotacaoService(CotacaoRepository repository, IndicadorRepository indicadorRepository) {
        this.repository = repository;
        this.indicadorRepository = indicadorRepository;
    }

    public Cotacao salvar(Cotacao cotacao) {
        Indicador ind = indicadorRepository.findById(cotacao.getIndicador().getId())
        .orElseThrow(() -> new RuntimeException("Indicador não encontrado!"));

        cotacao.setId(UUID.randomUUID());
        cotacao.setIndicador(ind);
        return repository.save(cotacao);
    }

     public Cotacao editar(UUID id, Cotacao novo) {
        if (repository.existsById(id)) {
            novo.setId(id);
            return repository.update(novo);
        }
        return null;
    }

    public List<Cotacao> listar() {
        return (List<Cotacao>) repository.findAll();
    }

    public void excluir(UUID id) {
        repository.deleteById(id);
    }
}
