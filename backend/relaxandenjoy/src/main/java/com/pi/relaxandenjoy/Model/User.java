package com.pi.relaxandenjoy.Model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long id;
    private String name;
    private String surname;
    @Column(unique = true)
    private String email;
    private String password;
    @ManyToOne
    @JoinColumn(name = "id_cities", referencedColumnName = "id_cities")
    private City city;

    @ManyToOne()
    @JoinColumn(name = "id_role",referencedColumnName = "id_role")
    private Role role ;

    public User(String name, String surname, String email, String password, City city) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    public User() {
    }

    public User(Long id, String name, String surname, String email, String password, City city) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
