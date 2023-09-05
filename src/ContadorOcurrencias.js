function Ocurencias(cadenaTexto) {
  let nuevaCadena=cadenaTexto;
  let i;
  for(i=0; cadenaTexto.lastIndex == '\s';i++){
    nuevaCadena = nuevaCadena + nuevaCadena[i];
  }
  return nuevaCadena;
}

export default Ocurencias;
