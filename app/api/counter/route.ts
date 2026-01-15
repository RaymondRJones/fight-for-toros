import Redis from 'ioredis';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'interventions_count';

// Initialize Redis client from environment variables
let redisClient: Redis | null = null;

const getRedis = () => {
  const url = process.env.REDIS_URL;

  if (!url) {
    console.log('Redis not configured: missing REDIS_URL');
    return null;
  }

  if (!redisClient) {
    redisClient = new Redis(url);
  }

  return redisClient;
};

// GET - Retrieve current count
export async function GET() {
  try {
    const redis = getRedis();
    if (!redis) {
      return NextResponse.json({ count: 0 });
    }

    const result = await redis.get(COUNTER_KEY);
    const count = result ? parseInt(result, 10) : 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching counter:', error);
    return NextResponse.json({ count: 0 });
  }
}

// POST - Increment count
export async function POST() {
  try {
    const redis = getRedis();
    if (!redis) {
      console.error('Cannot increment: Redis not configured');
      return NextResponse.json({ count: 0 });
    }

    const newCount = await redis.incr(COUNTER_KEY);
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return NextResponse.json({ count: 0 });
  }
}
