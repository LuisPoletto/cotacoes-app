package com.example.controllers;

import com.example.entities.*;
import com.example.services.IndicadorService;
import io.micronaut.http.annotation.*;

import java.util.List;
import java.util.UUID;

@Controller("/indicadores")
public class IndicadorController {

    private final IndicadorService service;

    public IndicadorController(IndicadorService service) {
        this.service = service;
    }

    @Post
    public Indicador salvar(@Body Indicador indicador) {
        return service.salvar(indicador);
    }

    @Get
    public List<Indicador> listar() {
        return service.listar();
    }

    @Put("/{id}")
    public Indicador editar(UUID id, @Body Indicador indicador) {
        return service.editar(id, indicador);
    }

    @Delete("/{id}")
    public void excluir(UUID id) {
        service.excluir(id);
    }
}
