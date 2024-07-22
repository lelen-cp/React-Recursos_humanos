package gm.rh.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import excepcion.RecursoNoEncontradoExcepcion;
import gm.rh.modelo.Empleado;
import gm.rh.servicios.IEmpleadoServicio;

@RestController
//http://localhost:8080/rh-app/
@RequestMapping("rh-app")
@CrossOrigin(value = "http://localhost:3000")
public class EmpleadoControlador {
	//Variable con la que se puede enviar información a consola
	private static final Logger logger =
			LoggerFactory.getLogger(EmpleadoControlador.class);
	
	@Autowired
	private IEmpleadoServicio empleadoServicio;
	
	//http://localhost:8080/rh-app/empleados
	@GetMapping("/empleados")
	public List<Empleado> obtenerEmpleados(){
		var empleados = empleadoServicio.listarEmpleados();
		empleados.forEach((empleado -> logger.info(empleado.toString())));
		return empleados;
	}
	
	@PostMapping("/empleados")
	public Empleado agregarEmpleado(@RequestBody Empleado empleado){
		logger.info("Empleado a agregar: " + empleado);
		return empleadoServicio.guardarEmpleado(empleado);
	}
	
	@GetMapping("/empleados/{id}")
	public ResponseEntity<Empleado> 
	obtenerEmpleadoPorId(@PathVariable Integer id){
	Empleado empleado = empleadoServicio.buscarEmpleadoPorID(id);
	if(empleado == null)
		throw new RecursoNoEncontradoExcepcion("No se encontro el empleado con id: " + id);
	return ResponseEntity.ok(empleado);
	}
	
	@PutMapping("/empleados/{id}")public ResponseEntity<Empleado> 
	actualizarEmpleado(@PathVariable Integer id, @RequestBody Empleado empleadoRecibido){
		Empleado empleado = empleadoServicio.buscarEmpleadoPorID(id);
		if (empleado == null)
			throw new RecursoNoEncontradoExcepcion("El id recibido no existe: " +id);
		empleado.setNombre(empleadoRecibido.getNombre());
		empleado.setDepartamento(empleadoRecibido.getDepartamento());
		empleado.setSueldo(empleadoRecibido.getSueldo());
		empleadoServicio.guardarEmpleado(empleado)
;
		return ResponseEntity.ok(empleado);
	}
	
	@DeleteMapping("/empleados/{id}")
	public ResponseEntity<Map<String, Boolean>>
	eliminarEmpleado(@PathVariable Integer id){
		Empleado empleado = empleadoServicio.buscarEmpleadoPorID(id);
		if(empleado ==null)
			throw new RecursoNoEncontradoExcepcion("El id recibido no existe: " + id);
		empleadoServicio.eliminarEmpleado(empleado);
		// Json {"eliminado": "true"}
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminado", Boolean.TRUE);
				return ResponseEntity.ok(respuesta);
	}

}
