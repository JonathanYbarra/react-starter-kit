## :rocket: Starter Kit: Aplicación con React.js, Redux Toolkit Query, Material UI, Vite y Docker

¡Bienvenido/a! Este repositorio es un Starter Kit para crear una aplicación web utilizando las siguientes tecnologías:

- [React.js](https://reactjs.org/): Librería para construir interfaces de usuario.
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview): Biblioteca para manejar el estado y las solicitudes de API en React.js.
- [Material UI](https://material-ui.com/): Sistema de diseño de componentes visuales para React.js.
- [Yarn](https://yarnpkg.com/): Administrador de paquetes para Node.js utilizado en este proyecto.
- [Docker](https://www.docker.com/): Plataforma de contenedores utilizada para facilitar la configuración del entorno de desarrollo.

### :bulb: Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos:

- Node.js: Asegúrate de tener instalada la última versión estable de [Node.js](https://nodejs.org/).
- Yarn: Instala [Yarn](https://yarnpkg.com/) siguiendo las instrucciones adecuadas para tu sistema operativo.
- Docker: Instala [Docker](https://www.docker.com/) para configurar fácilmente el entorno de desarrollo.

### :gear: Configuración inicial del proyecto

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:
   ```shell
   yarn install
   ```
4. Una vez que todas las dependencias estén instaladas, puedes iniciar la aplicación con el siguiente comando:
   ```shell
    yarn start
   ```
   Esto iniciará la aplicación en el entorno de desarrollo y podrás acceder a ella en http://localhost:3000.

### :file_folder: Estructura de directorios

El proyecto sigue la siguiente estructura de directorios:

```shell
├── public       # Archivos estáticos y de configuración
└── src
 ├── app         # Configuración y funciones de la API utilizando Redux Toolkit Query
 ├── components  # Componentes reutilizables de React.js
 ├── hooks       # Custom hooks
 ├── pages       # Páginas principales de la aplicación
 ├── routes      # Sistema de routas
 ├── theme       # Configuracion de MaterialUI y customizacion del design tokens
 └── utils       # Utilidades y funciones auxiliares
```

### :hammer_and_wrench:  Comandos útiles
Aquí tienes algunos comandos útiles para el desarrollo diario en este proyecto:

`yarn start`: Inicia la aplicación en modo de desarrollo.
`yarn test`: Ejecuta las pruebas unitarias.
`yarn build`: Genera una versión optimizada de la aplicación para producción.


