# Node.js: De Cero a Experto 🚀

Documentación de mi viaje de aprendizaje de Node.js, desde nivel principiante hasta alcanzar un nivel experto.

## 📋 Requisitos e Instalaciones Recomendadas

Para un entorno de desarrollo eficiente, recomiendo instalar las siguientes herramientas:

- **[Visual Studio Code](https://code.visualstudio.com/)**: Editor de código fuente
- **[Postman](https://www.postman.com/)**: Plataforma para desarrollo de API
- **[MongoDB Compass](https://www.mongodb.com/products/compass)**: Interfaz gráfica para MongoDB
- **[TablePlus](https://tableplus.com/)**: Herramienta de gestión de bases de datos
- **[Git](https://git-scm.com/)**: Sistema de control de versiones
- **[Node.js](https://nodejs.org/)**: Entorno de ejecución para JavaScript
- **Explorador Web**: Google Chrome, Firefox, Edge
- **[Docker Desktop](https://www.docker.com/products/docker-desktop)**: Plataforma para contenerización y gestión de contenedores

### 🐳 Imágenes de Docker

Para usar MongoDB y PostgreSQL en contenedores Docker:

```bash
docker pull mongo:6.0.6
docker pull postgres:15.3
```

## 🔄 Uso de Nodemon

Para instalar Nodemon como dependencia de desarrollo:

```bash
npm install --save-dev nodemon
```

## 📦 DEPENDENCIAS

Estas son algunas de las dependencias que estoy utilizando en mi proyecto:

- [Axios](https://github.com/axios/axios): Cliente HTTP basado en promesas
- [Winston](https://github.com/winstonjs/winston): Librería para logging
- [Yargs](https://www.npmjs.com/package/yargs): Yargs le ayuda a crear herramientas de línea de comandos interactivas, analizando argumentos y generando una interfaz de usuario elegante.

### TESTING

- [Jest](https://jestjs.io/es-ES/): Jest es un delicioso Framework de Pruebas de JavaScript con un enfoque en la simplicidad.

## 🏗️ TYPESCRIPT

Para configurar TypeScript en el proyecto:

1. Instalar TypeScript y los tipos de Node.js como dependencias de desarrollo:

```bash
npm i -D typescript @types/node
```

2. Inicializar el archivo de configuración de TypeScript (puede configurarse según tus necesidades):

```bash
npx tsc --init --outDir dist/ --rootDir src
```
