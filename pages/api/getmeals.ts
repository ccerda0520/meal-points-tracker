import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../utils/auth';

const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const {
      query: { mealdate },
    } = req;

    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.json('Not authorized');
      res.end();
      return;
    }

    const user = session.user;

    const filterDate = new Date(Array.isArray(mealdate) ? '' : mealdate);

    const meals = await prisma.meal.findMany({
      where: {
        user_id: user.sub,
        consumption_date: {
          gte: filterDate,
          lt: new Date(filterDate.getTime() + 24 * 60 * 60 * 1000),
        },
      },
    });

    res.json(meals);
  }
}
