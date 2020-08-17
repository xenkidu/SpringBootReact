package com.example.tutorialrest;

class EmployeeNotFoundException extends RuntimeException {
    
    EmployeeNotFoundException(Long id) {
        super("Could not find employee " + id);
    }
}