import React from "react";
import { Link } from 'react-router-dom';
import { FiPower, FiPlus } from "react-icons/fi";

import './styles.css';

import logoImg from '../../assets/Logo.svg'
import felyImg from '../../assets/fely.png'
import lanaImg from '../../assets/lana.png'
import reviImg from '../../assets/revi.png'
import luliImg from '../../assets/luli.png'

export default function Profile() {
  const adotName = localStorage.getItem('adotName')

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Pet Help" />
        <span>Bem vinda(o), {adotName}!</span>
        <Link className="button" to="/adoption">Ficha para adoção</Link>
        <button type="button">
          <FiPower size={18} color="#FD764C" />
        </button>
      </header>

      <h1>Animais para adoção:</h1>


      <ul>
        <li>
          <img src={felyImg} alt="Fely" />
          <strong>NOME:</strong>
          <p>Feliny</p>

          <strong>ESPÉCIE:</strong>
          <p>Felina</p>

          <strong>SEXO:</strong>
          <p>Fêmea</p>

          <strong>IDADE:</strong>
          <p>2 anos</p>

          <button type="button">
            <FiPlus size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <img src={lanaImg} alt="Lana" />
          <strong>NOME:</strong>
          <p>Lana</p>

          <strong>ESPÉCIE:</strong>
          <p>Canina</p>

          <strong>SEXO:</strong>
          <p>Fêmea</p>

          <strong>IDADE:</strong>
          <p>4 anos</p>


          <button type="button">
            <FiPlus size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <img src={reviImg} alt="Revi" />
          <strong>NOME:</strong>
          <p>Revi</p>

          <strong>ESPÉCIE:</strong>
          <p>Felina</p>

          <strong>SEXO:</strong>
          <p>Macho</p>

          <strong>IDADE:</strong>
          <p>6 anos</p>

          <button type="button">
            <FiPlus size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <img src={luliImg} alt="Luli" />
          <strong>NOME:</strong>
          <p>Luli</p>

          <strong>ESPÉCIE:</strong>
          <p>Canina</p>

          <strong>SEXO:</strong>
          <p>Macho</p>

          <strong>IDADE:</strong>
          <p>3 anos</p>

          <button type="button">
            <FiPlus size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>

    </div>
  )
}