package com.example.tutorialrest;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Employee {
    
    private @Id @GeneratedValue Long id;
    private String name;
    private String role;
    private String email;

    Employee() {}

    Employee(String name, String role, String email) {
        this.name = name;
        this.role = role;
        this.email = email;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getRole() {
        return this.role;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Employee))
            return false;
        Employee employee = (Employee) o;
        return Objects.equals(this.id, employee.id) 
                && Objects.equals(this.name, employee.name)
                && Objects.equals(this.email, employee.email)
                && Objects.equals(this.role, employee.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.email, this.role);
    }

    @Override
    public String toString() {
      return "Employee{" + "id=" + this.id + ", name='" + this.name + '\'' +
      ", email='" + this.email + '\'' +
       ", role='" + this.role + '\'' + '}';
    }
}