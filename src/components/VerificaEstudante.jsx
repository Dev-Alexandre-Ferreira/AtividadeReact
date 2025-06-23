function VerificaEstudante(props) {
  if (props.estudante) {
    return <p>Você é um estudante</p>;
  } else {
    return <p>Você não é um estudante</p>;
  }
}

export default VerificaEstudante;
