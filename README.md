# Final Proyect Rs Back-end
Este repositorio contiene el back-end del proyecto final realizado para el Bootcamp impartido por Geekhubs para Ribera Salud. 

Se trata de una aplicación pensada para el sector sanitario con la que se pueden gestionar una serie de usuarios, ya sean pacientes o profesionales del sector. Incluye las operaciones básicas CRUD más el añadido de poder borrar todos los médicos.

### Front-end
El front-end correspondiente a la aplicación se encuentra en: https://github.com/avadop/RS-Proyecto-final-front

## Tecnologías
El proyecto ha sido realizado con [NestJs](https://github.com/nestjs/nest) y con [mongoDB](https://www.mongodb.com/es) como base de datos.

### Pre-requisitos
Para la correcta ejecución del proyecto en local es necesario tener instalado **Node.js**, el cual se puede obtener desde su [página oficial](https://nodejs.org/es/).

También es necesario tener una base de datos en [mongoDB atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F5f19492ac5c96813a24f59f7&nextHash=%23clusters).

## Instalación del proyecto
Para instalar todos los paquetes y dependencias utilizados por el proyecto y definidos en el package.json es necesario ejecutar:
```
npm install
```

## Configuración de la base de datos
Una vez se tiene creada la cuenta y la base de datos en mongoDB atlas, para el funcionamiento de la aplicación es necesario configurar las variables declaradas en el archivo **.env**, donde se marca el usuario utilizado para la conexión, su contraseña y el host de la base de datos que se va a utilizar, por ejemplo `cluster0.ca8v1.mongodb.net/Ribera-salud`. 

## Ejecución de la aplciación
Para ejecutar la aplicación hay distintos comandos dependiendo de la funcionalidad que se requiera: 

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

