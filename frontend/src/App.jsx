import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import * as IndicadorAPI from "./api/indicadorService";
import * as CotacaoAPI from "./api/cotacaoService";

import IndicadorForm from "./components/IndicadorForm";
import IndicadorList from "./components/IndicadorList";
import CotacaoForm from "./components/CotacaoForm";
import CotacaoList from "./components/CotacaoList";
import { GraficoCotacoes } from "./components/GraficoCotacoes";
import GraficoForm from "./components/GraficoForm";
import AnimatedTitle from "./components/AnimatedTitle";
import EditCotacaoModal from "./components/EditCotacaoModal";
import DateFormat from "./formaters/DateFormater";

export default function Home() {
  const [indicadores, setIndicadores] = useState([]);
  const [cotacoes, setCotacoes] = useState([]);
  const [nomeIndicador, setNomeIndicador] = useState("");
  const [indicadorSelecionado, setIndicadorSelecionado] = useState("");
  const [valorCotacao, setValorCotacao] = useState("");
  const [nomeIndicadorSelecionado, setNomeIndicadorSelecionado] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editandoCotacaoId, setEditandoCotacaoId] = useState(null);
  const [valorCotacaoEditado, setValorCotacaoEditado] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");

  const [dataInicial, setDataInicial] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);

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

  async function handleSalvarIndicador() {
    await IndicadorAPI.salvarIndicador(nomeIndicador);
    setNomeIndicador("");
    carregarIndicadores();
  }

  async function handleEditarIndicador(id, novoNome) {
    await IndicadorAPI.editarIndicador(id, novoNome);
    carregarIndicadores();
  }

  async function handleExcluirIndicador(id) {
    await IndicadorAPI.excluirIndicador(id);
    if (indicadorSelecionado == id) {
      setIndicadorSelecionado("");
      setNomeIndicadorSelecionado("");
    }
    carregarIndicadores();
    carregarCotacoes();
  }

  async function handleSalvarCotacao() {
    await CotacaoAPI.salvarCotacao(indicadorSelecionado, valorCotacao);
    setValorCotacao("");
    setIndicadorSelecionado("");
    carregarCotacoes();
  }

  function handleAbrirEditarCotacao(cotacao) {
    setEditandoCotacaoId(cotacao.id);
    setValorCotacaoEditado(cotacao.valor);
    setIndicadorSelecionado(cotacao.indicador.id);
    if (cotacao.data) {
      setDataRegistro(new Date(cotacao.data).toISOString().split('T')[0]);
    }
    setIsModalOpen(true);
  }

  async function handleConfirmarEdicao() {
    await CotacaoAPI.editarCotacao(editandoCotacaoId, valorCotacaoEditado);
    setIsModalOpen(false);
    setEditandoCotacaoId(null);
    carregarCotacoes();
  }

  async function handleExcluirCotacao(id) {
    await CotacaoAPI.excluirCotacao(id);
    carregarCotacoes();
  }

  async function carregarCotacoesFiltradas() {
    if (indicadorSelecionado && dataInicial && dataFinal) {
      const dataIni = dataInicial.toISOString().split('T')[0];
      const dataFim = dataFinal.toISOString().split('T')[0];

      try {
        const data = await CotacaoAPI.buscarCotacaoesFiltradas(indicadorSelecionado, dataIni, dataFim);
        if (Array.isArray(data)) {
          setCotacoes(data);
        } else {
          setCotacoes([]);
        }
      } catch (error) {
        setCotacoes([]);
      }
    }
  }

  useEffect(() => {
    if (!indicadorSelecionado) {
      setNomeIndicadorSelecionado("");
      return;
    }
    const indicador = indicadores.find((ind) => ind.id === indicadorSelecionado);
    if (indicador) {
      setNomeIndicadorSelecionado(indicador.nome);
    }
  }, [indicadorSelecionado, indicadores]);

  useEffect(() => {
    carregarCotacoesFiltradas();
  }, [indicadorSelecionado, dataInicial, dataFinal]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      backgroundColor: "#121331",
      backgroundImage: `linear-gradient(90deg, #121331 0%, #0f1c3f 30%, #0b2a3a 60%, #0d0e25 100%)`,
      backgroundAttachment: "fixed",
    }}>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center" }}>
        <lord-icon src="https://cdn.lordicon.com/rpviwvwn.json" trigger="in" state="in-reveal" style={{ width: "100px", height: "100px" }} />
        <lord-icon src="https://cdn.lordicon.com/lbcxnxti.json" trigger="in" state="in-reveal" style={{ width: "100px", height: "100px" }} />
      </div>

      <AnimatedTitle title="dt.Analytics" delay={0.1} />

      <h1 style={{ color: "#fff" }}>Novo Indicador</h1>
      <IndicadorForm nome={nomeIndicador} setNome={setNomeIndicador} onSalvar={handleSalvarIndicador} />

      <h1 style={{ color: "#fff" }}>Lista Indicadores</h1>
      <IndicadorList indicadores={indicadores} onEditar={handleEditarIndicador} onExcluir={handleExcluirIndicador} />

      <h1 style={{ color: "#fff" }}>Nova Cotação</h1>
      <CotacaoForm
        indicadores={indicadores}
        indicadorSelecionado={indicadorSelecionado}
        setIndicadorSelecionado={setIndicadorSelecionado}
        valorCotacao={valorCotacao}
        setValorCotacao={setValorCotacao}
        onSalvar={handleSalvarCotacao}
      />

      <h1 style={{ color: "#fff" }}>Lista Cotações</h1>
      <CotacaoList
        cotacoes={cotacoes}
        onAbrirEditar={handleAbrirEditarCotacao}
        onExcluir={handleExcluirCotacao}
      />

      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{ color: "#fff" }}>Gráfico de Cotações</h1>
        <GraficoForm
          indicadores={indicadores}
          indicadorSelecionado={indicadorSelecionado}
          setIndicadorSelecionado={setIndicadorSelecionado}
          dataInicial={dataInicial}
          setDataInicial={setDataInicial}
          dataFinal={dataFinal}
          setDataFinal={setDataFinal}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "70vw", paddingBottom: "40px", paddingTop: "30px" }}>
        {indicadorSelecionado !== "" && dataInicial !== null && dataFinal !== null && (
          <h1 style={{ color: "#fff", fontSize: "1.7rem" }}>
            {nomeIndicadorSelecionado} | De {DateFormat.format(dataInicial)} a {DateFormat.format(dataFinal)}
          </h1>
        )}
        <GraficoCotacoes cotacoes={cotacoes} indicadorId={indicadorSelecionado} />
      </div>

      <EditCotacaoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmarEdicao}
        indicadores={indicadores}
        indicadorSelecionado={indicadorSelecionado}
        setIndicadorSelecionado={setIndicadorSelecionado}
        valorCotacaoEditado={valorCotacaoEditado}
        setValorCotacaoEditado={setValorCotacaoEditado}
        dataRegistro={dataRegistro}
        setDataRegistro={setDataRegistro}
      />
    </div>
  );
}