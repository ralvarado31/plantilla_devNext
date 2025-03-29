import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Middleware temporalmente desactivado hasta tener credenciales reales de Supabase
  return NextResponse.next()
} 