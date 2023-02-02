INSERT IGNORE INTO categories (id_categories,description,img,title)
VALUES (1,'25.000','https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','Cabañas')
    ,(2,'110.000','https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80','Hoteles')
    ,(3,'120.000','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','Departamentos')
    ,(4,'10.000','https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','Glampings')
    ;
INSERT IGNORE INTO cities (id_cities,name) VALUES (1,'Tunja'),(2,'Manizales'),(3,'Medellin'), (4,'Santa Marta'), (5,'Bogota'), (6,'Cali'), (7,'San Andres');

INSERT IGNORE INTO features (id_features,name,icon)
VALUES (1,'Cocina','uil uil-restaurant'),(2,'Televisor','uil uil-tv-retro'),(3,'Aire acondicionado','uil uil-snowflake'),
       (4,'Apto mascotas','fa-solid fa-paw'),(5,'Estacionamiento','fa-solid fa-car'),(6,'piscina','fa-solid fa-person-swimming')
        ,(7,'Wifi','fa-solid fa-wififa-solid fa-wifi');

INSERT IGNORE INTO products (id_products,crimg,title,location,description,id_cities,id_categories,name,popularity)
VALUES (1,'https://images.unsplash.com/photo-1525113990976-399835c43838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', 'Alojate en la mejor ubicacion del territorio Boyacense','Tunja, Boyacá','Cómoda cabaña con chimenea a leña, ubicada en la reserva forestal a 35 minutos de la ciudad de Tunja. Perfecta para un fin de semana en familia o con amigos. Cuenta con 3 camarotes dobles, 2 baños, cocina y sala acogedora. Reserva ya si te gusta el entorno silvestre',1,1,'Cabaña Pamplonera',5.0);

INSERT IGNORE INTO images (id_images,title,url,id_products) VALUES
(1,'Cabin','https://images.unsplash.com/photo-1525113990976-399835c43838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',1),
(2,'Cabin waterfall ','https://images.freeimages.com/images/large-previews/0b0/cabin-at-villa-rica-1624870.jpg',1),
(3,'Cabin Scenery','https://images.freeimages.com/images/large-previews/1d3/chalet-1201139.jpg',1),
(4,'Cabin flowers','https://images.freeimages.com/images/large-previews/f24/the-hut-1200961.jpg',1),
(5,'Cabin backside','https://images.freeimages.com/images/large-previews/332/mountain-hut-austria-1202492.jpg',1);

INSERT IGNORE INTO products_has_features (id_products,id_features) VALUES (1,2), (1,1), (1,3);