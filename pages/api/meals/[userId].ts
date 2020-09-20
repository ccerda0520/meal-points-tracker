import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const {
      query: { userId, mealdate },
    } = req;

    const filterDate = new Date(Array.isArray(mealdate) ? '' : mealdate);

    const meals = await prisma.meal.findMany({
      where: {
        user_id: Array.isArray(userId) ? '' : userId,
        consumption_date: {
          gte: filterDate,
          lte: new Date(filterDate.getTime() + 24 * 60 * 60 * 1000),
        },
      },
    });
    res.json(meals);
  }
}
