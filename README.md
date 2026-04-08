# Spherag App - Prueba Técnica (React Native Developer)

Aplicación móvil desarrollada en React Native (Expo) que permite a los usuarios autenticarse, listar fincas (Estates), consultar sus respectivos dispositivos (Atlas) y visualizar en detalle la información de un Atlas, incluyendo su ubicación en un mapa.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/diegogs8/Spherag-test.git
    cd SpheragTest
    ```

2. **Instalar dependencias:**

    ```bash
    npm install
    ```

3. **Ejecutar la aplicación:**
    Iniciaremos el servidor de desarrollo de Expo.

    ```bash
    npx expo start
    ```

    * Presiona `a` para abrir en un emulador Android.
    * Presiona `i` para abrir en el simulador de iOS.
    * Escanea el código QR con la app **Expo Go** (Android) o la cámara (iOS) para probar en un dispositivo físico.

---

## Credenciales de Prueba

Para acceder a la aplicación, utiliza los siguientes datos:

* **Usuario:** `apppruebatecnica@spherag.com`
* **Contraseña:** `Usuario2026!`

---

## Stack Tecnológico

* **Framework:** React Native, Expo y TypeScript.
* **Gestión de Estado:** Redux Toolkit.
* **Consumo de APIs y Caché:** React Query.
* **Navegación:** React Navigation.
* **Almacenamiento Seguro:** `expo-secure-store`.
* **Mapas:** `react-native-maps`.
* **Internacionalización:** `react-i18next` + `expo-localization`.

---

## Decisiones de Arquitectura y Funcionalidades Destacadas

Estas son las decisiones arquitectónicas que se han tomado orientadas a la mantenibilidad del código y a la escalabilidad de la solución:

### 1. Estructura Limpia (Clean Architecture)

El proyecto se divide en tres capas principales mediante Path Aliases (`@domain`, `@infrastructure`, `@app`) para separar la lógica de negocio, los servicios externos y la capa de presentación.

### 2. Gestión de Sesión Segura y Bootstrapping

Los tokens de autenticación (`accessToken` y `refreshToken`) no solo se mantienen en el estado de Redux, sino que se persisten en el dispositivo utilizando `expo-secure-store`. Se ha implementado un Custom Hook (`useBootstrap`) que verifica e hidrata el estado global antes de renderizar la navegación, garantizando que el usuario no pierda su sesión al cerrar la app.

### 3. Paginación Infinita (Infinite Scrolling)

El listado de Atlas requiere paginación. Para ello, se ha utilizado el hook `useInfiniteQuery` de React Query acoplado a una `FlatList`, permitiendo cargar nuevas páginas automáticamente a medida que el usuario hace scroll hacia el final de la lista, optimizando el rendimiento de la aplicación.

### 4. Experiencia de Usuario (UI/UX)

Se han priorizado las siguientes prácticas de UI/UX:

* **Diseño basado en Tema:** Uso de un archivo central `theme.ts` para evitar *magic strings* en archivos de estilos y mantener la consistencia visual.
* **Validación en línea:** Mensajes de error contextuales en el formulario de Login.
* **Manejo de Estados:** Integración de componentes de carga y de estados vacíos en todas las llamadas a la API.
* **Formatos Entendibles:** Creación de una función pura(`dateUtils.ts`) para formatear la información en formato fecha.
* **Iconos:** Uso de iconos (`@expo/vector-icons`).
* **Localización (i18n):** La app detecta el idioma del dispositivo (Inglés o Español) y adapta todos los textos de la interfaz dinámicamente.
