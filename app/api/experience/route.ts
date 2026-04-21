import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const userId = 1; // Default user ID

    const experiences = await prisma.experience.findMany({
      where: { userId },
      orderBy: { startDate: "desc" },
    });

    return Response.json(experiences);
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return Response.json(
      { error: "Failed to fetch experiences" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
