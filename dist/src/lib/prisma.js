"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.getPrismaClient = void 0;
const client_1 = require("@prisma/client");
let prisma = null;
exports.prisma = prisma;
if (process.env.DATABASE_URL) {
    exports.prisma = prisma = new client_1.PrismaClient();
}
const getPrismaClient = () => {
    if (!prisma) {
        throw new Error('Prisma client is not initialized. Ensure DATABASE_URL is configured.');
    }
    return prisma;
};
exports.getPrismaClient = getPrismaClient;
