function AvaliacaoNota(props) {
  const nota = props.nota;

  if (nota >= 90) {
    return <p>Excelente</p>;
  } else if (nota >= 70) {
    return <p>Bom</p>;
  } else {
    return <p>Precisa melhorar</p>;
  }
}

export default AvaliacaoNota;
