# Amigo Secreto

Este proyecto es una aplicación web sencilla para organizar un sorteo de "Amigo Secreto". Permite agregar nombres de amigos, mostrarlos en una lista y seleccionar aleatoriamente un amigo secreto.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)

## Características

- Agrega nombres de amigos a una lista.
- Visualiza la lista de amigos agregados.
- Realiza el sorteo de un amigo secreto de forma aleatoria.
- Interfaz simple y fácil de usar.

## Instalación

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Danielfebo/Pagina-Amigo-Secreto.git
   ```
2. **Navega a la carpeta del proyecto:**
   ```bash
   cd Pagina-Amigo-Secreto
   ```
3. **Abre el archivo `index.html` en tu navegador favorito.**

> **Nota:** No se requieren dependencias externas ni instalación de paquetes.

## Uso

1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en el botón **"Añadir"** para agregarlo a la lista.
3. Repite el proceso para todos los participantes.
4. Haz clic en **"Sortear amigo"** para seleccionar aleatoriamente un amigo secreto.
5. El resultado se mostrará en pantalla.

## Estructura del Proyecto

```
amigo-secreto/
│
├── index.html        # Página principal de la aplicación
├── app.js            # Lógica de la aplicación en JavaScript
├── style.css         # Estilos de la aplicación
└── assets/           # Imágenes y recursos gráficos
```

## Buenas Prácticas

- El código está organizado en funciones para facilitar su mantenimiento.
- Se valida la entrada del usuario para evitar nombres vacíos.
- La lista de amigos se actualiza dinámicamente en la interfaz.
- El resultado del sorteo se limpia al agregar un nuevo amigo para evitar confusiones.

## Contribuciones

¡Las contribuciones son bienvenidas!  
Si deseas mejorar esta aplicación, por favor abre un _issue_ o haz un _pull request_ siguiendo las buenas prácticas de desarrollo.

---
Desarrollado como parte del desafío de lógica de programación.
