import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/Logo.svg'

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id != id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Pet Help" />
        <span>Bem vinda(o), {ongName}!</span>
        <Link className="button" to="/incidents">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#FD764C" />
        </button>
      </header>

      <h1>Ajude um animal:</h1>

      <ul>
        {incidents.map(incident =>
          <li key={incident.id}>

            <strong>Nome</strong>
            <p>{incident.nome}</p>

            <strong>Sexo:</strong>
            <p>{incident.sexo}</p>

            <strong>Idade:</strong>
            <p>{incident.idade}</p>

            <strong>Custos mensais:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.custos)}</p>

            <strong>Histórico de gastos:</strong>
            <p>{incident.historico}</p>

            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        )}
      </ul>

    </div>
  )
}