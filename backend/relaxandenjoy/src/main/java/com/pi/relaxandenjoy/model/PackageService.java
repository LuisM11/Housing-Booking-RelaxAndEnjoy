package com.pi.relaxandenjoy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "packageService")
public class PackageService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean airConditioner;
    private Boolean tour;
    private Boolean pets;
    private Boolean wifi;
    private Boolean parking;
    private Boolean equippedKitchen;
    private Boolean fridge;
    private Boolean tv;
    private Boolean speakEnglish;
    private Boolean pool;
}
