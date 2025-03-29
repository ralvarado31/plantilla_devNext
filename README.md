# Plantilla Next.js + Tailwind CSS + Shadcn/UI + Supabase

Esta es una plantilla lista para usar que integra las siguientes tecnologías:

- [Next.js 14.2.4](https://nextjs.org/) - Framework React con App Router
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript con tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Shadcn/UI](https://ui.shadcn.com/) - Componentes de UI personalizables
- [Supabase](https://supabase.com/) - Backend as a Service (alternativa a Firebase)

## Comenzando

### 1. Clona el repositorio o descarga los archivos

```bash
git clone <url-del-repositorio>
cd <nombre-de-carpeta>
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura Supabase

1. Crea una cuenta en [Supabase](https://supabase.com/) si aún no tienes una
2. Crea un nuevo proyecto
3. Obtén las credenciales de tu proyecto desde Settings > API
4. Actualiza el archivo `.env.local` con tus credenciales:

```
NEXT_PUBLIC_SUPABASE_URL=TU_URL_DE_SUPABASE
NEXT_PUBLIC_SUPABASE_ANON_KEY=TU_CLAVE_ANON_DE_SUPABASE
```

### 4. Inicia el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

```
/
├── app/                    # App Router de Next.js
│   └── globals.css         # Estilos globales de Tailwind CSS
├── components/             # Componentes reutilizables
│   └── ui/                 # Componentes de Shadcn/UI
├── lib/                    # Funciones y utilidades adicionales
├── public/                 # Archivos estáticos
├── utils/
│   └── supabase/           # Configuración de Supabase
│       ├── client.ts       # Cliente para el navegador
│       └── server.ts       # Cliente para el servidor
├── .env.local              # Variables de entorno (debes crear este archivo)
├── components.json         # Configuración de Shadcn/UI
├── middleware.ts           # Middleware para autenticación
├── next.config.mjs         # Configuración de Next.js
└── tailwind.config.ts      # Configuración de Tailwind CSS
```

## Uso de Supabase

### En componentes de servidor

```typescript
// En un Server Component
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data } = await supabase.from('tabla').select()
  
  return <div>{/* Renderiza los datos */}</div>
}
```

### En componentes de cliente

```typescript
'use client'
// En un Client Component
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function ClientComponent() {
  const [data, setData] = useState(null)
  const supabase = createClient()

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('tabla').select()
      setData(data)
    }
    fetchData()
  }, [])
  
  return <div>{/* Renderiza los datos */}</div>
}
```

## Instalación de Componentes Shadcn/UI

Para añadir componentes de Shadcn/UI a tu proyecto:

```bash
npx shadcn-ui@latest add button
```

Reemplaza `button` con el nombre del componente que deseas añadir.

## Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia la aplicación en modo producción
- `npm run lint` - Ejecuta el linter para detectar problemas

## Licencia

Este proyecto está bajo la Licencia MIT.
