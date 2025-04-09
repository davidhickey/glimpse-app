import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    name: "John Doe",
    username: "john.doe",
    email: "john.doe@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Jane Doe",
    username: "jane.doe",
    email: "jane.doe@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "John Smith",
    username: "john.smith",
    email: "john.smith@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Jane Smith",
    username: "jane.smith",
    email: "jane.smith@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

async function seed() {
  try {
    // First disconnect any existing connections
    await prisma.$disconnect();
    
    // Reconnect
    await prisma.$connect();
    
    // Delete existing users
    await prisma.user.deleteMany();
    
    // Create new users
    for (const user of users) {
      await prisma.user.create({
        data: user,
      });
    }
    
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed(); 