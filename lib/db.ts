// Import PrismaClient from @prisma/client
import { PrismaClient } from "@prisma/client"

// Extend the global scope to include the prisma variable
declare global {
	var prisma: PrismaClient | undefined
}

// Initialize the db variable using the global prisma variable if it exists, otherwise create a new PrismaClient instance
export const db = globalThis.prisma || new PrismaClient()

// If not in production environment, assign the db to the global prisma variable
if (process.env.NODE_ENV !== "production") globalThis.prisma = db
