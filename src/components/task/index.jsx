function Task(props) {
  return (
    <li>
      <span style={{ textDecoration: props.done ? "line-through" : "none" }}>
        {props.text}
      </span>
      <button onClick={props.onToggle}>
        {props.done ? "Desfazer" : "Concluir"}
      </button>
      <button onClick={props.onRemove}>Remover</button>
    </li>
  );
}

export default Task;