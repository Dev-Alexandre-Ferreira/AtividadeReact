function VerificaIdade(props) {
  if (props.idade >= 18) {
    return <p>Você é adulto</p>;
  } else {
    return <p>Você é menor de idade</p>;
  }
}

export default VerificaIdade;
