// app/api/theme/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { theme } = await req.json(); // 'dark' | 'light'
    const res = NextResponse.json({ ok: true, theme });

    // set cookie accessible on server; not httpOnly so client can read if necessary
    res.cookies.set('theme', theme, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      // httpOnly: true, // optional: if true, client JS cannot read cookie
    });

    return res;
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
