# Nombre del Proyecto

Tarea 1: "Middleware de validación de rol"

## Requisitos

Lista de las dependencias necesarias para ejecutar el proyecto:

- Node.js
- npm
- express
- typescript
- nodemon (opcional)
- ts-node

## Pasos para ejecutar el proyecto

- Descargar las dependencias necesarias con npm install -D "nombre de la dependencia"

- Ejecutar el comando npm start

- En el navegador, ir a http://localhost:3000/users/?key=12345 para ver los usuarios

- En el middleware de autenticación (src/auth.ts), inicialmente se encuentra el ejemplo de admin (con acceso al middleware validation), para comprobar que el middleware validation.ts bloquea a cualquier rol que no sea admin, comenta las líneas 17-25 y descomenta las 26-34

- Vuelve a ejecutar npm start y actualiza el localhost en el navegador

# Clona este repositorio
git clone https://github.com/Rudrok18/Tareas_TDS.git