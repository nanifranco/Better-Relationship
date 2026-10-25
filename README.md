# Nov

Una app privada para ser mejor pareja con María: lo que le gusta, lo que te cuenta, sus fechas, tus gestos y las guías para los momentos difíciles.

## Qué tiene

- **Hoy:** *Antes de verla*, un modo de historias a pantalla completa con lo que trae María, una pregunta, algo que no le has dicho y lo pendiente; el gesto del día (una carta que se voltea), la racha con el calendario de las últimas 12 semanas, el reto de la semana, el tiempo juntas, un recuerdo con foto, lo que hace rato no haces, lo que trae María y las próximas fechas.
- **María:** su foto y sus fotos, cómo se siente querida, su vida (lo que te cuenta), fichas (incluidas sus órdenes), regalos y el muro de lo que valoras de ella.
- **Crecer:** el radar de cómo la estás queriendo en los últimos 30 días, el chequeo mensual, lo que te ha pedido, en qué quieres mejorar, temas por hablar, tus gestos con frecuencia, un mazo de gestos para deslizar (derecha lo quiero, izquierda paso) y lo que aprendiste.
- **Guías:** *Pregúntale a Nov*, un consejero que responde con lo que tienes anotado de María (solo dentro de Claude); antes de contestar, disculparme bien, decir algo difícil, el generador de citas, ideas de cita y su manual.
- **Fechas:** línea de tiempo con avisos antes de cada fecha.

## Estructura

```
index.html      La app completa en una sola página. Funciona en cualquier navegador.
app/            La versión para iPhone y Android (Expo). Muestra index.html y le agrega
                notificaciones, Face ID o huella y guardado en el teléfono.
```

## Usarla en el navegador

Abre `index.html`. Todo se guarda en ese navegador.

Para tenerla en línea, activa GitHub Pages en este repositorio (Settings, Pages, rama `main`, carpeta raíz).

## La app del teléfono

```bash
cd app
npm install
npm start
```

Abre Expo Go en el teléfono y escanea el código. `npm start` copia primero la versión más nueva de `index.html` dentro de la app.

En Expo Go, Face ID pide el código del teléfono y en Android las notificaciones pueden no salir. Con la app instalada funcionan completas:

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
eas build --platform ios
```

En iPhone hace falta una cuenta de Apple Developer para instalarla fuera de Expo Go.

## Pasar tus datos

En Nov: Ajustes, **Copiar mis datos**. En la otra versión: Ajustes, **Pegar mis datos**.
