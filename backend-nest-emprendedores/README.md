# Backend NestJS - Emprendedores de Ñuble (Actividad 10)

Backend migrado desde Express.js a NestJS con arquitectura modular, persistencia de datos relacional mediante TypeORM + SQLite, validaciones de entrada con class-validator y documentación interactiva con Swagger.

## 1. Tecnologías Utilizadas

1. Framework: NestJS
2. ORM: TypeORM
3. Base de Datos: SQLite (better-sqlite3)
4. Validación: class-validator y class-transformer
5. Documentación: OpenAPI / Swagger

## 2. Estructura del Proyecto

```text
mi-proyecto-vue/
├── backend/
├── backend-nest-emprendedores/
│   ├── src/
│   │   ├── emprendedores/
│   │   │   ├── dto/
│   │   │   │   ├── create-emprendedor.dto.ts
│   │   │   │   └── update-emprendedor.dto.ts
│   │   │   ├── entities/
│   │   │   │   └── emprendedor.entity.ts
│   │   │   ├── emprendedores.controller.ts
│   │   │   ├── emprendedores.module.ts
│   │   │   └── emprendedores.service.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── seed.ts
│   ├── data.db
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 3. Instalación y Configuración

1. Entrar a la carpeta del proyecto backend:
   ```bash
   cd backend-nest-emprendedores
   ```

2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Poblar la base de datos con datos iniciales (Seed):
   ```bash
   npm run seed
   ```

4. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```

## 4. Documentación y Rutas de la API

1. Acceso a la interfaz interactiva de Swagger:
   http://localhost:3000/api

2. Listar todos los emprendedores:
   GET http://localhost:3000/emprendedores

3. Filtrar por comuna y/o rubro:
   GET http://localhost:3000/emprendedores/buscar?comuna=Chillán&rubro=Artesanía

4. Obtener detalle de un emprendedor por ID:
   GET http://localhost:3000/emprendedores/:id

5. Registrar un nuevo emprendedor:
   POST http://localhost:3000/emprendedores

6. Actualizar un emprendedor existente:
   PUT http://localhost:3000/emprendedores/:id

7. Eliminar un emprendedor por ID:
   DELETE http://localhost:3000/emprendedores/:id

## 5. Validaciones de Datos (DTOs)

1. nombre: Texto obligatorio, mínimo 3 caracteres.
2. comuna: Texto obligatorio.
3. rubro: Debe ser un rubro válido (Apicultura, Lácteos, Textiles, Turismo, Artesanía, Agricultura).
4. descripcion: Texto obligatorio, mínimo 10 caracteres.
5. contacto: Texto obligatorio.

## 6. Historial de Commits

1. chore(nest): Configuración inicial e instalación de TypeORM, SQLite y Swagger.
2. feat(nest): Definición de entidad Emprendedor y DTOs con class-validator.
3. feat(nest): Implementación de CRUD, búsqueda por filtros y Swagger UI.
4. docs(nest): Creación de script seed.ts y documentación de la Actividad 10.