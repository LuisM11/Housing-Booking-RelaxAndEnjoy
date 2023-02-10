INSERT IGNORE INTO categories (id_categories,description,img,title)
VALUES (1,'25.000','https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','Cabañas')
    ,(2,'110.000','https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80','Hoteles')
    ,(3,'120.000','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','Departamentos')
    ,(4,'10.000','https://cf.bstatic.com/xdata/images/hotel/max1024x768/399239491.jpg?k=fb9b1e9727e739e0438a1a061d2caecd8b6583b6c7ae95ff9ec2a5cbf1d2fe40&o=&hp=1','Glampings')
    ;
INSERT IGNORE INTO cities (id_cities,name) VALUES (1,'Tunja'),(2,'Manizales'),(3,'Medellin'), (4,'Santa Marta'), (5,'Bogota'), (6,'Cali'), (7,'San Andres');

INSERT IGNORE INTO features (id_features,name,icon,quantity)
VALUES (1,'Cocina','uil uil-restaurant',1),
       (2,'Televisor','uil uil-tv-retro',1),
       (3,'Aire acondicionado','uil uil-snowflake',null),
       (4,'Apto mascotas','fa-solid fa-paw',null),
       (5,'Estacionamiento','fa-solid fa-car',null),
       (6,'piscina','fa-solid fa-person-swimming',null),
       (7,'Wifi','fa-solid fa-wififa-solid fa-wifi',null),
       (8,'Habitacion','uil uil-bed-double',1),(9,'Habitacion','uil uil-bed-double',2),(10,'Habitacion','uil uil-bed-double',3),(11,'Habitacion','uil uil-bed-double',4), (12,'Habitacion','uil uil-bed-double',5),
       (13,'Baño','uil uil-bath',1), (14,'Baño','uil uil-bath',2),(15,'Baño','uil uil-bath',3),(16,'Baño','uil uil-bath',4),(17,'Baño','uil uil-bath',5),
       (18,'Balcon','uil uil-house-user',null),
       (19,'Calefaccion','uil uil-temperature-plus',null);

INSERT IGNORE INTO products (id_products,crimg,title,location,description,id_cities,id_categories,name,popularity)
VALUES (1,'https://images.unsplash.com/photo-1525113990976-399835c43838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', 'Alojate en la mejor ubicacion del territorio Boyacense','Tunja, Boyacá','Cómoda cabaña con chimenea a leña, ubicada en la reserva forestal a 35 minutos de la ciudad de Tunja. Perfecta para un fin de semana en familia o con amigos. Cuenta con 3 camarotes dobles, 3 baños, cocina y sala acogedora. Reserva ya si te gusta el entorno silvestre',1,1,'Cabaña Pamplonera',5.0),
       (2,'https://images.freeimages.com/images/large-previews/b09/casa-de-madera-1635998.jpg','Sientete como en casa en esta cabaña del territorio Vallecaucano','Cali, Valle del Cauca','Hermosa cabaña ubicada en zona rural a 20 minutos de la ciudad de Cali. Perfecta para un fin de semana en familia o con amigos. Cuenta con 2 camarotes , 2 baños, cocina y sala acogedora. Reserva ya si te gusta el entorno natural',6,1,'Cabaña Salsera',3.8),
       (3,'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','Disfruta de tu visita a Medellin en el afamado Hotel Himtoll','Medellin, Antioquia','Servico de calidad con cómodas habitaciones dobles y sencillas, comfortable espacio y acceso a servicios como piscina, restaurante y bar. además si necesitas transladarte por la ciudad contamos con transporte propio, el cual se cargará a la habitación',3,2,'Himtoll Hotel',4.5),
       (4,'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','Pasa tus vacaciones al lado del paradisíaco mar de San Andres','San Andres Islas','Cómodo, cálido y con acceso rápido a las mejores playas de San Andres, comfort en cada rincón y con un amplio espacio. Si lo que buscas es playa, brisa y mar este espacio es para ti',7,2,'Hotel Palm Tree',4.7),
       (5,'https://images.unsplash.com/photo-1569487586816-6e4f2fee8926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=646&q=80','Alojate en el mejor sitio del centro de Santa Marta','Santa Marta, Magdalena','Departamento ubicado en zona céntrica de Santa Marta, con acceso inmediato a los puntos mas importantes de la ciudad como "El Rodadero" y con multiples comodidades por un precio asequible para cualquier persona',4,3,'Soledad Departamento',2.5),
       (6,'https://images.unsplash.com/photo-1613694699988-9e77e23b15d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80','Todo lo que te gustaria en un solo lugar de la capital Colombiana','Bogota, Colombia','La mejor opcion si necesitas un departamento en Bogota, con todas las prestaciones necesarias para satisfacer tus necesidades. Con dos alcobas y un baño, ademas se encuentra a poca distancia del centro de la ciudad',5,3,'Departamento Capitalino',3.5),
       (7,'https://images.unsplash.com/photo-1593053272490-e0ed6d6a42c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80','Una helada experiencia con el nevado de fondo','Manizales, Caldas','Aventurate a pasar una experiencia magnifica en una de las ciudades mas lindas de Colombia alojandote en este Glamping con excelente espacio, bordeado por el Nevado del Ruiz perfecto para amantes de la naturaleza y de las noches al aire libre.Reserva desde 2 días y 2 noches. Capacidad de 5 personas',2,4,'Glamping Nevado',4.8),
       (8,'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/39/3b/ed/bubblesky-glamping.jpg?w=700&h=-1&s=1','Relajate con vista a la ciudad de la eterna primavera','Medellin, Antioquia','Descansar en la terraza con una taza de café será agradable en cualquier estación del año viviendolo desde el Glamping Primavera. Este cuenta con una bañera de hidromasaje, donde podrá relajarse con placer, adicional hay internet está disponible tanto en las habitaciones como en las áreas públicas del lugar. Existe el servicio de parking para el transporte. Tu opcion fija si quieres una aventura unica en Medellin',3,4,'Glamping Primavera',4.0)

       ;

INSERT IGNORE INTO images (id_images,title,url,id_products) VALUES
(1,'Cabin','https://images.unsplash.com/photo-1525113990976-399835c43838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',1),
(2,'Cabin waterfall ','https://images.freeimages.com/images/large-previews/0b0/cabin-at-villa-rica-1624870.jpg',1),
(3,'Cabin Scenery','https://images.freeimages.com/images/large-previews/1d3/chalet-1201139.jpg',1),
(4,'Cabin flowers','https://images.freeimages.com/images/large-previews/f24/the-hut-1200961.jpg',1),
(5,'Cabin backside','https://images.freeimages.com/images/large-previews/332/mountain-hut-austria-1202492.jpg',1),
(6,'Cabin grass','https://images.freeimages.com/images/large-previews/54f/wooden-cottage-1636028.jpg',2),
(7,'Cabin','https://images.freeimages.com/images/large-previews/b09/casa-de-madera-1635998.jpg',2),
(8,'Cabin s','https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',2),
(9,'Cabin triangular','https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',2),
(10,'Cabin Scenery','https://images.freeimages.com/images/large-previews/1d3/chalet-1201139.jpg',2),
(11,'Hotel HMed','https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',3),
(12,'Hotel HMed2','https://images.freeimages.com/images/large-previews/b61/symmetry-1203213.jpg',3),
(13,'Hotel HMed3','https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',3),
(14,'Hotel HMed4','https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',3),
(15,'Hotel HMed5','https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',3),
(16,'Hotel Palm','https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',4),
(17,'Hotel Palm2','https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',4),
(18,'Hotel Palm3','https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',4),
(19,'Hotel Palm4','https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',4),
(20,'Hotel Palm5','https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',4),
(21,'Depto SM','https://images.unsplash.com/photo-1649204873080-1564d1464c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',5),
(22,'Depto SM2','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',5),
(23,'Depto SM3','https://images.unsplash.com/photo-1621891336682-341097be99cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',5),
(24,'Depto SM4','https://images.unsplash.com/photo-1569487586816-6e4f2fee8926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=646&q=80',5),
(25,'Depto SM5','https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',5),
(26,'Depto Bog','https://media.istockphoto.com/id/954961748/es/foto/interior-de-espacios-limpios.jpg?s=612x612&w=0&k=20&c=V_7ORjaKwSYcz-UDYt9pa-l1jhOFwH0OcKRNVeogYi8=',6),
(27,'Depto Bog2','https://media.istockphoto.com/id/990278494/es/foto/muro-de-hormig%C3%B3n-vac%C3%ADa.jpg?s=612x612&w=0&k=20&c=E4skpvJ03kqFQeVbT4UZJuiI3I4rrFKPM5hFhzWeTD0=',6),
(28,'Depto Bog3','https://images.unsplash.com/photo-1432297984334-707d34c4163a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',6),
(29,'Depto Bog4','https://images.unsplash.com/photo-1527362127499-f590dfc9af95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80',6),
(30,'Depto BOg5','https://images.unsplash.com/photo-1649204873080-1564d1464c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',6),
(31,'Glmp R','https://images.unsplash.com/photo-1593053272490-e0ed6d6a42c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',7),
(32,'GLmp R2','https://images.unsplash.com/photo-1600452556550-9ff29bb0e6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',7),
(33,'Glmp R3','https://images.unsplash.com/photo-1627228309318-57c694ac3187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',7),
(34,'Glmp R4','https://media.istockphoto.com/id/1280006515/es/foto/glamping-interior.jpg?s=612x612&w=0&k=20&c=Ax4-yek3uTHmgKiPKVurPBCLKDUUDn7K_2-2WuPTqVw=',7),
(35,'Glmp R5','https://media.istockphoto.com/id/1327134998/es/foto/hombre-viajero-relaj%C3%A1ndose-y-tomando-la-vista-del-volc%C3%A1n-activo-bromo-dentro-de-una-tienda-de.jpg?s=612x612&w=0&k=20&c=SG45h89WSGQTi3voN6HUSKi-NGrMQOd7KEna8nb1lbA=',7),
(36,'GLmp Med','https://medellinliving.com/wp-content/uploads/2020/02/2.jpg',8),
(37,'GlmP MED2','https://www.elcolombiano.com/documents/10157/0/580x365/0c0/0d0/none/11101/DNMT/image_content_36599793_20201028161833.jpg',8),
(38,'Glmp Med3','https://media.istockphoto.com/id/1407250130/es/foto/carpas-en-glamping-noche.jpg?s=612x612&w=0&k=20&c=TDPq0yp3Hi8uMVVgejU7x9-5irw5LyfvKzoI6DQijCs=',8),
(39,'Glmp Med4','https://media.istockphoto.com/id/1280006515/es/foto/glamping-interior.jpg?s=612x612&w=0&k=20&c=Ax4-yek3uTHmgKiPKVurPBCLKDUUDn7K_2-2WuPTqVw=',8),
(40,'Glmp Med5','https://images.unsplash.com/photo-1624254495476-db6cc8b77e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',8)
;

INSERT IGNORE INTO products_has_features (id_products,id_features)
VALUES (1,2),(1,1),(1,19),(1,4),(1,5),(1,9),(1,14),(1,7),
       (2,1),(2,2),(2,5),(2,3),(2,10),(2,15),(2,4),(2,6),(2,7),(2,18),
       (3,2),(3,3),(3,5),(3,7),(3,6),(3,9),(3,13),(3,18),(3,4),
       (4,2),(4,3),(4,6),(4,18),(4,7),(4,10),(4,15),
       (5,1),(5,3),(5,7),(5,8),(5,13),(5,5),
       (6,1),(6,19),(6,4),(6,18),(6,5),(6,7),(6,9),(6,13),
       (7,7),(7,19),(7,4),(7,18),(7,8),(7,13),
       (8,5),(8,7),(8,19),(8,4),(8,18),(8,13),(8,8),(8,6)
       ;