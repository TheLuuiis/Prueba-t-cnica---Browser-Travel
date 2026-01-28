# Outlet Rental Cars – Frontend

Aplicación web construida con Next.js para búsqueda, listado y resumen de reserva de vehículos, con diseño responsive y arquitectura preparada para integrarse con un backend y una pasarela de pago.

## Link de la web
Link: https://prueba-t-cnica-browser-travel.vercel.app/

## Requisitos
- Node.js 18+ (recomendado)
- npm / yarn / pnpm

## Cómo ejecutar el proyecto

1) Instalar dependencias  
- `npm install` (o `yarn` / `pnpm install`)

2) Iniciar en desarrollo  
- `npm run dev`

3) Abrir en el navegador  
- http://localhost:3000

## Scripts
- Desarrollo: `npm run dev`
- Build: `npm run build`
- Producción: `npm run start`
- Lint: `npm run lint`

## Decisiones técnicas

- **Next.js (Pages Router)**: routing por archivos (`pages/`) simple y directo para un flujo multi-página (Home → Results → Summary).
- **TypeScript**: tipado para mejorar mantenibilidad y reducir errores en componentes, servicios y estado.
- **Redux Toolkit**: estado global predecible (slices + thunks) para centralizar datos como resultados de búsqueda/vehículos.
- **Capa de servicios (`services/`)**: desacopla el consumo de datos del UI; facilita pruebas, cambios de endpoints y reutilización.
- **Componentización (`components/`)**: separación de piezas UI (Header, cards, listas) para consistencia y escalabilidad.
- **CSS por pantalla + global**: estilos organizados en `globals.css`, `results.css`, `summary.css` para control y claridad.
- **Responsive design**: breakpoints desde 1900px hasta 300px para asegurar experiencia consistente en desktop, tablet y móvil.

## Integración con pasarela de pago (conceptual, sin código)

Para integrar la aplicación con una pasarela de pago (Stripe/Mercado Pago/PayPal), implementaría un flujo **frontend + backend** donde el backend sea la “fuente de verdad” del monto y del estado del pago:

- **1) Confirmación de reserva**: el usuario selecciona vehículo/fechas y llega a un resumen con el total estimado.
- **2) Validación en backend**: el frontend envía los datos al backend; el backend valida disponibilidad, reglas de precios y recalcula el total final (no confiar en totales del cliente).
- **3) Creación de orden**: el backend crea una orden/reserva en estado `pending` y guarda: monto, moneda, vehículo, fechas, usuario y expiración.
- **4) Inicio de pago (checkout)**: el backend crea una sesión/preferencia en la pasarela y devuelve un `checkoutUrl`/`sessionId` al frontend.
- **5) Pago seguro**: el usuario completa el pago en el checkout de la pasarela (sin que el frontend maneje datos sensibles).
- **6) Webhook**: la pasarela notifica al backend (pago aprobado/rechazado). El backend valida firma, aplica idempotencia y actualiza la orden a `paid` o `failed`.
- **7) Confirmación en UI**: al regresar a la app, el frontend consulta al backend el estado real de la orden y muestra el resultado final.
- **Buenas prácticas**: idempotencia, reintentos de webhook, logging/monitorización, manejo de cancelaciones y expiración de órdenes pendientes.

## Despliegue
Recomendado en Vercel por compatibilidad nativa con Next.js. Para producción:
- Ejecutar `npm run build`
- Ejecutar `npm run start`

**Realizado por:** Luis David Gil.
