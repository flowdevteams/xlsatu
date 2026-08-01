import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    if (process.env.MAINTENANCE_MODE === 'true') {
        return NextResponse.redirect('https://flowdevteams.com/maintenance', 307);
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/((?!_next|favicon.ico).*)',
};