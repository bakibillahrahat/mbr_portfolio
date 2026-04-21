import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isResearch = searchParams.get("isResearch") === "true";
    const userId = 1; // Default user ID - in production this would come from auth

    const projects = await prisma.project.findMany({
      where: {
        userId,
        isResearch,
      },
      orderBy: {
        dateCompleted: "desc",
      },
    });

    return Response.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
