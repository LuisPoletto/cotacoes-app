package com.example.Controllers;

import com.example.Responses.IndicadorResponse;
import com.example.Services.IndicadorService;
import io.micronaut.http.annotation.*;

import java.util.List;

@Controller("/indicadores")
public class IndicadorController {

    private final IndicadorService service;

    public IndicadorController(IndicadorService service) {
        this.service = service;
    }

    @Post
    public IndicadorResponse salvar(@Body IndicadorResponse indicador) {
        return service.salvar(indicador);
    }

    @Get
    public List<IndicadorResponse> listar() {
        return service.listar();
    }

    @Put("/{id}")
    public IndicadorResponse editar(String id, @Body IndicadorResponse indicador) {
        return service.editar(id, indicador);
    }

    @Delete("/{id}")
    public void excluir(String id) {
        service.excluir(id);
    }
}
