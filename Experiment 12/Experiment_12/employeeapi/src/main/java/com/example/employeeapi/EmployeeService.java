package com.example.employeeapi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repo;

    public Employee saveEmployee(Employee emp) { return repo.save(emp); }
    public List<Employee> getAllEmployees() { return repo.findAll(); }
    public Employee getEmployeeById(Long id) { return repo.findById(id).orElse(null); }
    public Employee updateEmployee(Long id, Employee empDetails) {
        Employee emp = repo.findById(id).orElse(null);
        if(emp != null) {
            emp.setName(empDetails.getName());
            emp.setDepartment(empDetails.getDepartment());
            return repo.save(emp);
        }
        return null;
    }
    public void deleteEmployee(Long id) { repo.deleteById(id); }
}