package com.example.Services;

import com.example.Responses.IndicadorResponse;
import jakarta.inject.Singleton;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Singleton
public class IndicadorService {

    private final List<IndicadorResponse> indicadores = new ArrayList<>();

    public IndicadorResponse salvar(IndicadorResponse indicador) {
        indicador.setId(UUID.randomUUID().toString());
        indicadores.add(indicador);
        return indicador;
    }

    public List<IndicadorResponse> listar() {
        return indicadores;
    }

    public IndicadorResponse editar(String id, IndicadorResponse novo) {
        for (IndicadorResponse ind : indicadores) {
            if (ind.getId().equals(id)) {
                ind.setNome(novo.getNome());
                return ind;
            }
        }
        return null;
    }

    public void excluir(String id) {
        indicadores.removeIf(ind -> ind.getId().equals(id));
    }

    public IndicadorResponse buscarPorId(String id) {
        return indicadores.stream()
                .filter(i -> i.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
