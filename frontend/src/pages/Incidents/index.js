import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/Logo.svg'

export default function Incidents() {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [custos, setCustos] = useState('');
  const [historico, setHistorico] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleIncident(e) {
    e.preventDefault();

    const data = {
      nome,
      sexo,
      idade,
      custos,
      historico,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }

  }

  return (
    <div className="incidents-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Pet Help" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#FD764C" />
            &nbsp; Voltar para home
          </Link>
        </section>

        <form onSubmit={handleIncident}>
          <input
            placeholder="Nome do animal"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <input maxlength="1"
            placeholder="Sexo (exemplo: F/M)"
            value={sexo}
            onChange={e => setSexo(e.target.value)}
          />

          <input
            type="number"
            min="1" max="20"
            placeholder="Idade"
            value={idade}
            onChange={e => setIdade(e.target.value)}
          />

          <input
            type="number"
            min="1" max="9999"
            placeholder="Valor em reais"
            value={custos}
            onChange={e => setCustos(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={historico}
            onChange={e => setHistorico(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>

      </div>
    </div>
  )
}