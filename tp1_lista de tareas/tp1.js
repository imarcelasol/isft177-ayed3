function agregarTarea() {
  const tarea = document.getElementById("Input").value;
  if (tarea !== "") {
    const lista = document.getElementById("List");
    const elementoLista = document.createElement("li");
    elementoLista.appendChild(document.createTextNode(tarea));
    lista.appendChild(elementoLista);
    document.getElementById("Input").value = "";
  }
}
