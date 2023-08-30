# Other Life Store

![Project image](https://raw.githubusercontent.com/KarimTDiaz/other-life-store-with-mongo-db/main/client/public/assets/images/readme/readme-0.png)

<!-- ## Live Demo

- [Live Demo](https://portable-stereo.onrender.com/) -->

## Descripción

Other Life Store es una tienda online de segunda mano, donde los usuarios pueden comprar y vender discos de música. Podrás registrarte y vender tus antiguos discos, así como comprar otros que desees, puedes guardar en favoritos subir y editar productos, e incluso hacer ratings. El proyecto está adaptado para móvil , tablet y desktop.

## ¿Que he aprendido en este proyecto?

Es el proyecto más grande que he realizado hasta la fecha, gestionando conjuntamente la parte de front-end y la de back-end.

![Project image](https://raw.githubusercontent.com/KarimTDiaz/other-life-store-with-mongo-db/main/client/public/assets/images/readme/readme-1.png)

Por un lado, he utilizado la autenticación de Firebase para el login y el registro así como el gestor de archivos FireStore. Para la base de datos he utilizado MongoDB junto con NodeJS, creando controladores para realizar operaciones de CRUD tanto en la información de usuarios como la de productos, también se ha abierto un puerto socket para escuchar cambios en la base de datos y así poder juntar la información del usuario de mongo con la de firebase, lo que ha resultado en un mejor manejo de la información al navegar por diferentes páginas.

![Project image](https://raw.githubusercontent.com/KarimTDiaz/other-life-store-with-mongo-db/main/client/public/assets/images/readme/readme-2.png)

El manejo y control de formularios se ha realizado con React-hook-form y yup, validando todos los campos antes de ser enviados.

También se ha creado un hook para las operaciones de petición de datos (fetch) donde se controla cada petición, este hook también fusiona la información del usuario traída desde MongoDB con la de Firebase.

![Project image](https://raw.githubusercontent.com/KarimTDiaz/other-life-store-with-mongo-db/main/client/public/assets/images/readme/readme-3.png)

Hay inputs dinámicos, rating para cada venta, carrito de compras y mucho mas!!!

## Technologies

<!-- Icons taken from: https://github.com/hendrasob/badges/blob/master/README.md and https://github.com/alexandresanlim/Badges4-README.md-Profile -->

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://es.wikipedia.org/wiki/HTML5)
[![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://es.wikipedia.org/wiki/JavaScript)
[![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.wikipedia.org/wiki/React)
[![REACT ROUTER](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://es.wikipedia.org/wiki/React)
[![NODE](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://en.wikipedia.org/wiki/Node)
[![STYLED COMPONENTS](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![SOCKET.IO](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)](https://en.wikipedia.org/wiki/Socket.IO)
[![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://en.wikipedia.org/wiki/MongoDB)
[![FIREBASE](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://en.wikipedia.org/wiki/Firebase)
[![VITE](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/guide/)

<!-- ## Project preview

If you want to take a look at the project, I recommend:

## Desktop

![Project screenshot](https://raw.githubusercontent.com/JuanCarlosAlo/Portable-Stereo-app/main/client/public/images/readme-1.jpg)

## Mobile

![Project screenshot](https://raw.githubusercontent.com/JuanCarlosAlo/Portable-Stereo-app/main/client/public/images/readme-2.jpg)

## Functionalities

Some of the functionalities of the app

![Screenshot of the project](https://raw.githubusercontent.com/JuanCarlosAlo/Portable-Stereo-app/main/client/public/images/readme-2.jpg)

## Part of the code

![Screenshot of the project](https://raw.githubusercontent.com/JuanCarlosAlo/Portable-Stereo-app/main/client/public/images/1080-3.jpg)

## Author

- Email: juancarlosam@gmail.com
- [Linkedin](https://www.linkedin.com/in/juan-carlos-alonso-966280166/)
- [GitHub](https://github.com/JuanCarlosAlo)

## Installation

This project does not require installation. Just open the folder or double click on the .html.

## License

MIT Public License v3.0
Cannot be used commercially. --> -->
