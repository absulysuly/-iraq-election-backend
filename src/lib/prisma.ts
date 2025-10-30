import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | null = null;

if (process.env.DATABASE_URL) {
  prisma = new PrismaClient();
}

export const getPrismaClient = (): PrismaClient => {
  if (!prisma) {
    throw new Error('Prisma client is not initialized. Ensure DATABASE_URL is configured.');
  }

  return prisma;
};

export { prisma };
