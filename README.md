# Node.js: De Cero a Experto

Documentación de mi viaje de aprendizaje de Node.js, desde nivel principiante hasta alcanzar un nivel experto.

## Requisitos e Instalaciones Recomendadas

Para un entorno de desarrollo eficiente, recomiendo instalar las siguientes herramientas:

- **Visual Studio Code**: Editor de código fuente.
- **Postman**: Plataforma para desarrollo de API.
- **MongoDB Compass**: Interfaz gráfica para MongoDB.
- **TablePlus**: Herramienta de gestión de bases de datos.
- **Git**: Sistema de control de versiones.
- **Node.js**: Entorno de ejecución para JavaScript.
- **Explorador Web**: Google Chrome, Firefox, Edge.
- **Docker Desktop**: Plataforma para contenerización y gestión de contenedores.

### Imágenes de Docker

Para usar MongoDB y PostgreSQL en contenedores Docker:

```bash
docker pull mongo:6.0.6
docker pull postgres:15.3
```

## Uso de Nodemon

Para instalar Nodemon como dependencia de desarrollo:

```bash
npm install --save-dev nodemon
```
## DEPENDENCIAS

Estas son algunas de las dependencias que estoy utilizando en mi proyecto:

- Axios: Cliente HTTP basado en promesas.
- Winston: Librería para logging.

## TYPESCRIPT

Para configurar TypeScript en el proyecto:
- Instalar TypeScript y los tipos de Node.js como dependencias de desarrollo:
```bash
npm i -D typescript @types/node
```
- Inicializar el archivo de configuración de TypeScript (puede configurarse según tus necesidades):
```bash
npx tsc --init --outDir dist/ --rootDir src
```



