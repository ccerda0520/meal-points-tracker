import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../utils/auth';

const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { body } = req;
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.json([]);
      res.end();
      return;
    }

    const user = session.user;

    const mealData = { ...JSON.parse(body), user_id: user.sub };

    const meal = await prisma.meal.create({ data: mealData });

    res.json(meal);
  }
}
