function StatusUsuario(props) {
  return <p>{props.online ? 'Usuário online' : 'Usuário offline'}</p>;
}

export default StatusUsuario;
