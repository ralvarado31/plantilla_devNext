// import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Next.js + Tailwind + Shadcn/UI + Supabase</h1>
      <p className="text-xl mb-8">Plantilla lista para usar</p>
      
      {/* Ejemplo de botón que puedes usar después de instalar el componente */}
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
        Botón de Ejemplo
      </button>
    </main>
  );
}
