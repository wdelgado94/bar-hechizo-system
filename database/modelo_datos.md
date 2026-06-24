# Modelo de Datos - Sistema Bar Hechizo

## Objetivo

Desarrollar un sistema web para la administración integral del Bar Hechizo, permitiendo controlar:

- Mesas
- Ventas
- Inventario
- Caja
- Gastos
- Reportes

---

# Entidades Principales

## Usuarios

Representa las personas que utilizan el sistema.

Campos:

- id
- nombre
- usuario
- password_hash
- rol
- estado
- created_at

Roles:

- Administrador
- Mesero

---

## Mesas

Representa las mesas físicas del bar.

Campos:

- id
- numero
- estado
- descripcion
- activa

Estados:

- libre
- ocupada
- cobro

---

## Categorías

Clasificación de productos.

Campos:

- id
- nombre
- descripcion

Ejemplos:

- Aguardiente
- Ron
- Whisky
- Tequila
- Cerveza
- Cocteles
- Hervidos

---

## Productos

Productos principales del inventario.

Campos:

- id
- categoria_id
- nombre
- tipo
- stock_ml
- stock_unidad
- activo

Tipos:

- licor
- cerveza
- preparado

---

## Presentaciones

Formas de venta de un producto.

Campos:

- id
- producto_id
- nombre
- cantidad_ml
- precio_venta
- activo

Ejemplos:

Aguardiente:

- Botella completa
- Media botella
- Shot sencillo
- Shot doble

---

## Ventas

Representa una cuenta abierta para una mesa.

Campos:

- id
- mesa_id
- usuario_id
- fecha_apertura
- fecha_cierre
- total
- estado

Estados:

- abierta
- cerrada
- anulada

---

## Detalle Ventas

Detalle de productos vendidos.

Campos:

- id
- venta_id
- producto_id
- presentacion_id
- cantidad
- precio_unitario
- subtotal

---

## Caja

Control diario de ingresos y egresos.

Campos:

- id
- fecha
- base_inicial
- total_ventas
- total_gastos
- saldo_final
- estado

---

## Gastos

Registro de gastos del negocio.

Campos:

- id
- caja_id
- descripcion
- valor
- fecha

---

## Movimientos Inventario

Historial de entradas y salidas.

Campos:

- id
- producto_id
- tipo_movimiento
- cantidad_ml
- fecha
- observacion

Tipos:

- entrada
- salida
- merma
- ajuste

---

# Relaciones

Usuarios → Ventas

Mesas → Ventas

Ventas → DetalleVentas

Productos → Presentaciones

Productos → MovimientosInventario

Caja → Gastos

Ventas → Caja

---

# Flujo de Venta

Mesa
↓
Venta
↓
Detalle Venta
↓
Descuento Inventario
↓
Caja

---

# Flujo de Caja

Base Inicial
+
Ventas
-
Gastos
=
Saldo Final