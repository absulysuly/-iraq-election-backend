import { PrismaClient } from '@prisma/client';

// Only initialize Prisma if DATABASE_URL is provided
export const prisma = process.env.DATABASE_URL 
  ? new PrismaClient()
  : null;
