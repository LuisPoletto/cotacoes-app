// Home.jsx
import { useEffect, useState } from "react";

import * as IndicadorAPI from "./api/indicadorService";
import * as CotacaoAPI from "./api/cotacaoService";

import IndicadorForm from "./components/IndicadorForm";
import IndicadorList from "./components/IndicadorList";
import CotacaoForm from "./components/CotacaoForm";
import CotacaoList from "./components/CotacaoList";

export default function Home() {
  const [indicadores, setIndicadores] = useState([]);
  const [cotacoes, setCotacoes] = useState([]);
  const [nomeIndicador, setNomeIndicador] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nomeEditado, setNomeEditado] = useState("");
  const [indicadorSelecionado, setIndicadorSelecionado] = useState("");
  const [valorCotacao, setValorCotacao] = useState("");

  // Estados para edição de cotações
  const [editandoCotacaoId, setEditandoCotacaoId] = useState(null);
  const [valorCotacaoEditado, setValorCotacaoEditado] = useState("");

  useEffect(() => {
    carregarIndicadores();
    carregarCotacoes();
  }, []);

  async function carregarIndicadores() {
    const data = await IndicadorAPI.listarIndicadores();
    setIndicadores(data);
  }

  async function carregarCotacoes() {
    const data = await CotacaoAPI.listarCotacoes();
    setCotacoes(data);
  }

  // Indicadores
  async function handleSalvarIndicador() {
    await IndicadorAPI.salvarIndicador(nomeIndicador);
    setNomeIndicador("");
    carregarIndicadores();
  }

  async function handleEditarIndicador(id) {
    await IndicadorAPI.editarIndicador(id, nomeEditado);
    setEditandoId(null);
    setNomeEditado("");
    carregarIndicadores();
  }

  async function handleExcluirIndicador(id) {
    await IndicadorAPI.excluirIndicador(id);
    carregarIndicadores();
  }

  // Cotações
  async function handleSalvarCotacao() {
    await CotacaoAPI.salvarCotacao(indicadorSelecionado, valorCotacao);
    setValorCotacao("");
    setIndicadorSelecionado("");
    carregarCotacoes();
  }

  async function handleEditarCotacao(id) {
    await CotacaoAPI.editarCotacao(id, valorCotacaoEditado);
    setEditandoCotacaoId(null);
    setValorCotacaoEditado("");
    carregarCotacoes();
  }

  async function handleExcluirCotacao(id) {
    await CotacaoAPI.excluirCotacao(id);
    carregarCotacoes();
  }

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw",
    }}>
      <h1>Novo Indicador</h1>
      <IndicadorForm nome={nomeIndicador} setNome={setNomeIndicador} onSalvar={handleSalvarIndicador} />

      <h1>Lista Indicadores</h1>
      <IndicadorList
        indicadores={indicadores}
        editandoId={editandoId}
        setEditandoId={setEditandoId}
        nomeEditado={nomeEditado}
        setNomeEditado={setNomeEditado}
        onEditar={handleEditarIndicador}
        onExcluir={handleExcluirIndicador}
      />

      <h1>Nova Cotação</h1>
      <CotacaoForm
        indicadores={indicadores}
        indicadorSelecionado={indicadorSelecionado}
        setIndicadorSelecionado={setIndicadorSelecionado}
        valorCotacao={valorCotacao}
        setValorCotacao={setValorCotacao}
        onSalvar={handleSalvarCotacao}
      />

      <h1>Lista Cotações</h1>
      <CotacaoList
        cotacoes={cotacoes}
        editandoCotacaoId={editandoCotacaoId}
        setEditandoCotacaoId={setEditandoCotacaoId}
        valorCotacaoEditado={valorCotacaoEditado}
        setValorCotacaoEditado={setValorCotacaoEditado}
        onEditar={handleEditarCotacao}
        onExcluir={handleExcluirCotacao}
      />
    </div>
  );
}
