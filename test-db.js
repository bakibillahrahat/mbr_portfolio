const { PrismaClient } = require('./app/generated/prisma');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    // Test basic connection
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    
    // Test creating a user
    const user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        bio: 'This is a test user for portfolio setup'
      }
    });
    console.log('✅ Created test user:', user);
    
    // Test querying the user
    const users = await prisma.user.findMany();
    console.log('✅ All users:', users);
    
    // Clean up - delete test user
    await prisma.user.delete({
      where: { id: user.id }
    });
    console.log('✅ Test user deleted successfully');
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
  } finally {
    await prisma.$disconnect();
    console.log('✅ Database connection closed');
  }
}

testConnection();