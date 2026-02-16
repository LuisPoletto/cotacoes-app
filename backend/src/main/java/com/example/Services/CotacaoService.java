package com.example.Services;

import com.example.Responses.CotacaoResponse;
import com.example.Responses.IndicadorResponse;

import jakarta.inject.Singleton;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Singleton
public class CotacaoService {

    private final List<CotacaoResponse> cotacoes = new ArrayList<>();
    private final IndicadorService indicadorService;

    public CotacaoService(IndicadorService indicadorService) {
        this.indicadorService = indicadorService;
    }

    public CotacaoResponse salvar(CotacaoResponse cotacao) {
        IndicadorResponse ind = indicadorService.buscarPorId(cotacao.getIndicador().getId());
        if (ind == null) {
            throw new RuntimeException("Indicador não encontrado!");
        }
        cotacao.setId(UUID.randomUUID().toString());
        cotacao.setIndicador(ind);

        cotacoes.add(cotacao);
        return cotacao;
    }
    
    public CotacaoResponse editar(String id, CotacaoResponse novo) {
        for (CotacaoResponse cot : cotacoes) {
            if (cot.getId().equals(id)) {
                cot.setValor(novo.getValor());
                return cot;
            }
        }
        return null;
    }

    public void excluir(String id) {
        cotacoes.removeIf(cot -> cot.getId().equals(id));
    }

    public List<CotacaoResponse> listar() {
        return cotacoes;
    }
}
