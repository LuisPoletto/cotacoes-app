package com.example.controllers;

import com.example.entities.Cotacao;
import com.example.services.CotacaoService;
import io.micronaut.http.annotation.*;
import java.util.List;
import java.util.UUID;

@Controller("/cotacoes")
public class CotacaoController {

    private final CotacaoService service;

    public CotacaoController(CotacaoService service) {
        this.service = service;
    }

    @Post
    public Cotacao salvar(@Body Cotacao cotacao) {
        return service.salvar(cotacao);
    }

    @Get
    public List<Cotacao> listar() {
        return service.listar();
    }

    @Put("/{id}")
    public Cotacao editar(@PathVariable UUID id, @Body Cotacao cotacao) {
        return service.editar(id, cotacao);
    }

    @Delete("/{id}")
    public void excluir(@PathVariable UUID id) {
        service.excluir(id);
    }

    @Get("/buscar")
    public List<Cotacao> buscar(
            @QueryValue UUID indicadorId,
            @QueryValue String dataInicio,
            @QueryValue String dataFim) {
        return service.buscarPorIndAndData(indicadorId, dataInicio, dataFim);
    }
}