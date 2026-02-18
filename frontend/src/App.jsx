// Home.jsx~
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

function AnimatedTitle({ title, delay = 0 }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: "easeOut"
      }}
      style={{ color: "#08a88a", marginTop: "10px", fontSize: "3rem" }}
    >
      {title}
    </motion.h1>
  );
}

export default function Home() {
  const [indicadores, setIndicadores] = useState([]);
  const [cotacoes, setCotacoes] = useState([]);
  const [nomeIndicador, setNomeIndicador] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nomeEditado, setNomeEditado] = useState("");
  const [indicadorSelecionado, setIndicadorSelecionado] = useState("");
  const [valorCotacao, setValorCotacao] = useState("");
  const [nomeIndicadorSelecionado, setNomeIndicadorSelecionado] = useState("");

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

  useEffect(() => {
    console.log("Selecionado:", indicadorSelecionado);
    console.log("Indicadores:", indicadores);

    if (!indicadorSelecionado) {
      setNomeIndicadorSelecionado("");
      return;
    }

    const indicador = indicadores.find(
      (ind) => ind.id === indicadorSelecionado
    );

    console.log("Encontrado:", indicador);

    if (indicador) {
      setNomeIndicadorSelecionado(indicador.nome);
    }
  }, [indicadorSelecionado, indicadores]);


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      backgroundColor: "#121331",
      backgroundImage: `
        linear-gradient(90deg, 
          #121331 0%, 
          #0f1c3f 30%, 
          #0b2a3a 60%, 
          #0d0e25 100%
        )
      `,
      backgroundAttachment: "fixed",
    }}>

      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
      }}>
        <lord-icon
          src="https://cdn.lordicon.com/rpviwvwn.json"
          trigger="in"
          state="in-reveal"
          style={{ width: "100px", height: "100px" }}
        />
        <lord-icon
          src="https://cdn.lordicon.com/lbcxnxti.json"
          trigger="in"
          state="in-reveal"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      <AnimatedTitle title="dt.Analytics" delay={0.1} />

      <h1 style={{ color: "#fff" }}>Novo Indicador</h1>
      <IndicadorForm nome={nomeIndicador} setNome={setNomeIndicador} onSalvar={handleSalvarIndicador} />

      <h1 style={{ color: "#fff" }}>Lista Indicadores</h1>
      <IndicadorList
        indicadores={indicadores}
        editandoId={editandoId}
        setEditandoId={setEditandoId}
        nomeEditado={nomeEditado}
        setNomeEditado={setNomeEditado}
        onEditar={handleEditarIndicador}
        onExcluir={handleExcluirIndicador}
      />

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
        editandoCotacaoId={editandoCotacaoId}
        setEditandoCotacaoId={setEditandoCotacaoId}
        valorCotacaoEditado={valorCotacaoEditado}
        setValorCotacaoEditado={setValorCotacaoEditado}
        onEditar={handleEditarCotacao}
        onExcluir={handleExcluirCotacao}
      />

      <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <h1 style={{ color: "#fff" }}>Gráfico de Cotações</h1>
        <GraficoForm
          indicadores={indicadores}
          indicadorSelecionado={indicadorSelecionado}
          setIndicadorSelecionado={setIndicadorSelecionado}
          valorCotacao={valorCotacao}
          setValorCotacao={setValorCotacao}
          onSalvar={handleSalvarCotacao}></GraficoForm>
        <h1 style={{ color: "#fff", fontSize: "2rem" }}>{nomeIndicadorSelecionado}</h1>
      </div>
      <div style={{
        display: "flex",
        width: "80vw",
        paddingBottom: "40px",
      }}>
        <GraficoCotacoes
          cotacoes={cotacoes}
          indicadorId={indicadorSelecionado}
        />
      </div>
    </div>
  );
}
