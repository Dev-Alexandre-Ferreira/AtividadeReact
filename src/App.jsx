import { useState } from 'react';

import BoasVindas from './components/BoasVindas';
import Saudacao from './components/Saudacao';
import MensagemAutenticado from './components/MensagemAutenticado';
import VerificaIdade from './components/VerificaIdade';
import VerificaEstudante from './components/VerificaEstudante';
import AvaliacaoNota from './components/AvaliacaoNota';
import VerificaDesconto from './components/VerificaDesconto';
import StatusUsuario from './components/StatusUsuario';
import NivelUsuario from './components/NivelUsuario';
import BotaoLogin from './components/BotaoLogin';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <BoasVindas />
      <Saudacao nome="Alexandre" />
      <MensagemAutenticado autenticado={true} />
      <VerificaIdade idade={17} />
      <VerificaEstudante estudante={false} />
      <AvaliacaoNota nota={85} />
      <VerificaDesconto temDesconto={true} />
      <StatusUsuario online={false} />
      <NivelUsuario nivel="intermediário" />
      <BotaoLogin logado={false} />
    </div>
  );
}

export default App;
