package gm.rh.servicios;

import java.util.List;

import gm.rh.modelo.Empleado;

public interface IEmpleadoServicio {
	
public List<Empleado> listarEmpleados();
	
	public Empleado buscarEmpleadoPorID(Integer idEmpleado);
	
	public Empleado guardarEmpleado(Empleado empleado);
	
	public void eliminarEmpleado(Empleado empleado);
}
