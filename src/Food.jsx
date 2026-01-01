function Food() {
  const food1 = `orange`;
  const food2 = `galric`;

  return (
    <ol>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ol>
  );
}

export default Food;
