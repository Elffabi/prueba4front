import logo from './logo.svg';
import './App.css';
//En App.js
import { useState } from 'react';
import ListadoResultados from './ListadoResultados';
import image from './gargantadelata2.jpg';

function App() { 
  const [operaciones, setOperacion] = useState([])

  function area(event)
  {
    //Toma el evento de onSubmit y evita el envío de datos 
    event.preventDefault();
    //recibimos los datos del formulario
    const codigo=parseFloat(event.target.txt_codigo_a.value)
    const articulo=String(event.target.txt_articulo_a.value)
    const descripcion=String(event.target.txt_descripcion_a.value) 
    const precio=parseFloat(event.target.txt_precio_a.value)
    const cantidad=parseFloat(event.target.txt_cantidad_a.value)
    const total= precio * cantidad
    const totaldescuento= total * 0.9
    // Crea un objeto nuevo con los datos y resultado
    const nuevo = {
      codigo1: codigo,
      articulo1: articulo,
      descripcion1: descripcion,
      precio1: precio,
      cantidad1: cantidad,
      resultado1: total,
      totaldescuento1: totaldescuento
    }

    //Modifica el estado con un nuevo objeto obtenido
    setOperacion([...operaciones, nuevo])

    //Limpia las cajas del formulario
    event.target.txt_codigo_a.value = ''
    event.target.txt_articulo_a.value = ''
    event.target.txt_descripcion_a.value = ''
    event.target.txt_precio_a.value = ''
    event.target.txt_cantidad_a.value = ''
    event.target.total.value = ''
    event.target.totaldescuento.value = ''


  }
  return (
    <div>
      <div className="container-fluid">
            <h2>Botilleria Garganta de Lata</h2>
            <a href = ""><img id="idLogo" src={image} class="img-fluid" /></a>
            <form onSubmit={area}>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                <label for="txt_codigo_a" class="col-lg-2 control-label">Codigo:</label>
                <div class="col-lg-10">
                  <input className='form-control' type="text" name="txt_codigo_a" placeholder="Codigo producto" required/><br/>
                  </div>
              </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                <label for="txt_articulo_a" class="col-lg-2 control-label">Articulo:</label>
                <div class="col-lg-10">
                  <input className='form-control' type="text" name="txt_articulo_a" placeholder="Nombre Articulo" required/><br/>
                  </div>
                  </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                <label for="txt_descripcion_a" class="col-lg-2 control-label">Descripcion:</label>
                <div class="col-lg-10">
                  <input className='form-control' type="text" name="txt_descripcion_a" placeholder="Descripcion Producto" required/><br/>
                  </div>
                  </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                <label for="txt_precio_a" class="col-lg-2 control-label">Precio:</label>
                <div class="col-lg-10">
                  <input className='form-control' type="number" name="txt_precio_a" placeholder="Precio Producto" required/><br/>
                  </div>
                  </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                <label for="txt_cantidad_a" class="col-lg-2 control-label">Cantidad:</label>
                <div class="col-lg-10">
                  <input className='form-control' type="number" name="txt_cantidad_a" placeholder="Cantidad de producto" required/><br/>
                </div>
                  </div>
              </div>
              <input className='btn btn-primary' type="submit" value="Agregar producto"/>
            </form>
            <ListadoResultados resultados={operaciones}/>
      </div>
    </div>
  );
}

export default App;