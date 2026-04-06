# 🧩 PokeApp — Buscador de Pokémon

Aplicación web que permite buscar un Pokémon por nombre utilizando una API pública.  
El usuario ingresa un nombre en un formulario y la aplicación obtiene y muestra sus datos dinámicamente en pantalla.

---

## 🚀 Endpoints utilizados

Se utilizó la API pública **PokeAPI**:

**Endpoint principal**

https://pokeapi.co/api/v2/pokemon/{nombre}


Ejemplo:

https://pokeapi.co/api/v2/pokemon/ditto


### Datos utilizados del endpoint

- `name` → nombre del Pokémon  
- `sprites.front_default` → imagen  
- `types[].type.name` → tipos  
- `weight` → peso  
- `height` → altura  

---

## 🏗️ Estructura del proyecto


📁 proyecto
│
├── index.html → estructura HTML y formulario
├── app.js → lógica de la aplicación
└── README.md → documentación


### Flujo de funcionamiento

1. El usuario escribe el nombre de un Pokémon en el formulario.
2. Se captura el evento `submit`.
3. Se evita la recarga de la página (`preventDefault()`).
4. Se realiza una petición `fetch` a la API.
5. Se procesan los datos recibidos.
6. Se crea un objeto con la información necesaria.
7. Se renderizan los datos en el DOM.
8. Se muestra un indicador de loading mientras se espera la respuesta.

---

## 🧠 Decisiones tomadas

### Uso de `async/await`
Se eligió `async/await` en lugar de `.then()` para hacer el flujo asíncrono más claro y fácil de leer.

### Separación de responsabilidades
El código se dividió en funciones con roles definidos:

- `obtenerPokemon()` → obtiene datos desde la API.
- `mostrarPokemon()` → muestra los datos en el HTML.
- Evento del formulario → maneja la interacción del usuario.

Esto mejora la organización y reutilización del código.

### Creación de un objeto propio
En lugar de usar directamente la respuesta completa de la API, se construyó un objeto con solo los datos necesarios.  
Esto reduce complejidad y desacopla la app de la estructura interna de la API.

### Indicador de loading
Se agregó un estado visual mientras se espera la respuesta del `fetch`, mejorando la experiencia del usuario.

---

## ⚠️ Dificultades encontradas

### Datos `undefined`
El problema apareció al intentar usar el resultado de una función `async` sin `await`.  
Las funciones async devuelven Promises, por lo que fue necesario esperar su resolución.

### Manejo de múltiples tipos
Algunos Pokémon tienen más de un tipo.  
Fue necesario recorrer el array `types` usando `.map()` para obtener solo los nombres.

### Manejo de errores
Cuando el Pokémon no existe, la API devuelve un error 404.  
Se agregó validación con `response.ok` y manejo mediante `try/catch`.

---

## ✨ Funcionalidades implementadas

- Búsqueda de Pokémon por nombre
- Consumo de API con Fetch
- Renderizado dinámico del DOM
- Indicador de carga (loading)
- Manejo básico de errores
- Espera artificial para simular carga

---

## 🛠️ Tecnologías utilizadas

- HTML5
- JavaScript (ES6)
- Fetch API
- PokeAPI

---

## 🎯 Objetivo del proyecto

Practicar conceptos fundamentales de desarrollo web:

- Consumo de APIs REST
- Programación asíncrona
- Manipulación del DOM
- Manejo de Promises y eventos
- Organización básica del código

---

Proyecto realizado con fines educativos.