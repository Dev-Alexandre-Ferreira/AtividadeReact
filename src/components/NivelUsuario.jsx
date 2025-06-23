function NivelUsuario(props) {
  return (
    <p>
      {props.nivel === 'iniciante'
        ? 'Bem-vindo, iniciante!'
        : props.nivel === 'intermediário'
        ? 'Você está progredindo!'
        : props.nivel === 'avançado'
        ? 'Parabéns, especialista!'
        : 'Nível desconhecido'}
    </p>
  );
}

export default NivelUsuario;
