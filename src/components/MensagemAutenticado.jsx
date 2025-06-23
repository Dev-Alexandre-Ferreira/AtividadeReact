function MensagemAutenticado(props) {
  if (props.autenticado) {
    return <p>Bem-vindo, usuário!</p>;
  }
  return null;
}

export default MensagemAutenticado;
