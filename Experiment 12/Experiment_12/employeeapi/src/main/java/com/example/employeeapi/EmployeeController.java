package com.example.employeeapi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeService service;

    // 1. Adds a new employee (POST)
    @PostMapping
    public Employee createEmployee(@RequestBody Employee emp) {
        return service.saveEmployee(emp);
    }

    // 2. Retrieves all employees (GET)
    @GetMapping
    public List<Employee> getAll() {
        return service.getAllEmployees();
    }

    // 3. Retrieves employee by ID (GET)
    @GetMapping("/{id}")
    public Employee getById(@PathVariable Long id) {
        return service.getEmployeeById(id);
    }

    // 4. Updates employee details (PUT)
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {
        return service.updateEmployee(id, emp);
    }

    // 5. Deletes employee record (DELETE)
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        service.deleteEmployee(id);
        return "Employee deleted successfully!";
    }
}