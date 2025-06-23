function BotaoLogin(props) {
  return <>{props.logado ? <button>Sair</button> : <button>Entrar</button>}</>;
}

export default BotaoLogin;
