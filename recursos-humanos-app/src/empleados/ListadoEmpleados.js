import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import ModalConfirmacion from '../plantilla/ModalConfirmacion';


export default function ListadoEmpleados() {

    const urlBase = "http://localhost:8080/rh-app/empleados"

    const[empleados, setEmpleados] = useState([]);
    const [idEmpleadoEliminar, setIdEmpleadoEliminar] = useState(null);
    const [AbrirModalConfirmacion, setAbrirModalConfirmacion] = useState(false);

    useEffect(() => {
      cargarEmpleados();
    },[]);
    
    const cargarEmpleados = async () => {
      const resultado = await axios.get(urlBase);
      console.log("Resultado de cargar empleados");
      console.log(resultado.data);
      setEmpleados(resultado.data);
    }

    const ModalAbierto = (id) => {
      setIdEmpleadoEliminar(id);
      setAbrirModalConfirmacion(true);
    };
  
    const ModalCerrado = () => {
      setIdEmpleadoEliminar(null);
      setAbrirModalConfirmacion(false);
    };
  
    //const AccionConfirmar = () => {
      // Lógica para confirmar la acción
      // Puedes llamar a tu función de confirmación aquí
      //ModalCerrado();
    //};

    const eliminarEmpleado = async () => {
      await axios.delete(`${urlBase}/${idEmpleadoEliminar}`);
      cargarEmpleados();
      ModalCerrado();
    }

    return (
    <div className="container">
      <div className="container text-center" style={{margin: "30px"}}>
        <h3>Sistema de Recursos Humanos</h3>
      </div>

      <table className="table table-striped table-hover align-middle">
        <thead className="table-info">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            //Iteración arreglo de empelados
            empleados.map((empleado, indice) => (
              <tr key={indice}>
              <th scope="row">{empleado.idEmpleado}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.departamento}</td>
              <td><NumericFormat value={empleado.sueldo}
              displayType={'text'}
              thousandSeparator='.' prefix={'$'}
              decimalSeparator=','
              decimalScale={empleado.sueldo % 1 === 0 ? 0 : 2} fixedDecimalScale/>
              </td> 
              <td className='text-center'>
                <div>
                  <Link to={`/editar/${empleado.idEmpleado}`} 
                  className='btn btn-primary btn-sm me-3'>Editar</Link>
                
                <button className='btn btn-secondary btn-sm me-3' onClick={() => ModalAbierto(empleado.idEmpleado)}> Eliminar</button>
                <ModalConfirmacion
                isOpen={AbrirModalConfirmacion}
                onRequestClose={ModalCerrado}
                onConfirm={eliminarEmpleado}
                 />
                </div>
              </td>
            </tr> 
            ))
                  
          }
        </tbody>
      </table>

    </div>

  )
}

