package com.example.Controllers;

import com.example.Responses.CotacaoResponse;
import com.example.Services.CotacaoService;
import io.micronaut.http.annotation.*;

import java.util.List;

@Controller("/cotacoes")
public class CotacaoController {

    private final CotacaoService service;

    public CotacaoController(CotacaoService service) {
        this.service = service;
    }

    @Post
    public CotacaoResponse salvar(@Body CotacaoResponse cotacao) {
        return service.salvar(cotacao);
    }

    @Get
    public List<CotacaoResponse> listar() {
        return service.listar();
    }

    @Put("/{id}")
    public CotacaoResponse editar(String id, @Body CotacaoResponse cotacao) {
        return service.editar(id, cotacao);
    }

    @Delete("/{id}")
    public void excluir(String id) {
        service.excluir(id);
    }
}
