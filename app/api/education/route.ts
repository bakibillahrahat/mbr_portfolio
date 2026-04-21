import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const userId = 1; // Default user ID

    const education = await prisma.education.findMany({
      where: { userId },
      orderBy: { startDate: "desc" },
    });

    return Response.json(education);
  } catch (error) {
    console.error("Error fetching education:", error);
    return Response.json(
      { error: "Failed to fetch education" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
