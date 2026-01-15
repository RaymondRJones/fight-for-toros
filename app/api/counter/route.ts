import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'interventions_count';

// GET - Retrieve current count
export async function GET() {
  try {
    const count = await kv.get<number>(COUNTER_KEY) || 0;
    return NextResponse.json({ count });
  } catch (error) {
    // If KV is not configured, return 0
    console.error('Error fetching counter:', error);
    return NextResponse.json({ count: 0 });
  }
}

// POST - Increment count
export async function POST() {
  try {
    const newCount = await kv.incr(COUNTER_KEY);
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return NextResponse.json({ error: 'Failed to increment counter' }, { status: 500 });
  }
}
