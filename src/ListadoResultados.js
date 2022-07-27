function ListadoResultados(prop)
{
   return(
                <table border='1'>
                <thead><tr><th>Codigo</th><th>Articulo</th><th>Descripcion</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Total Descuento</th></tr></thead>
                <tbody>
          {prop.resultados.map ((elemento)=> {
            return (
              <tr key={elemento.codigo1}>
                <td>
                  {elemento.codigo1}
                </td>
                <td>
                  {elemento.articulo1}
                </td>
                <td>
                  {elemento.descripcion1}
                </td>
                <td>
                  {elemento.precio1}
                </td>
                <td>
                  {elemento.cantidad1}
                </td>
                <td>
                  {elemento.resultado1}
                </td>
                <td>
                  {elemento.totaldescuento1}
                </td>
              </tr>
            )
          })}
        </tbody>

                </table> 

   );

}

export default ListadoResultados;