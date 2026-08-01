import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    if (process.env.MAINTENANCE_MODE === 'true') {
        const maintenanceUrl = new URL('https://flowdevteams.com/maintenance');
        return NextResponse.redirect(maintenanceUrl);
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/((?!_next|favicon.ico).*)',
};