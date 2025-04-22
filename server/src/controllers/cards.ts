import { Request, Response } from 'express';
import prisma from '../config/database';

export const createCard = async (req: Request, res: Response) => {
  try {
    const { title, description, content, isPublic, tags } = req.body;
    const userId = req.user.userId;

    const card = await prisma.card.create({
      data: {
        title,
        description,
        content,
        isPublic,
        userId,
        tags: {
          create: tags.map((tagName: string) => ({
            tag: {
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error creating card' });
  }
};

export const getCards = async (req: Request, res: Response) => {
  try {
    const userId = req.user.userId;
    const cards = await prisma.card.findMany({
      where: {
        OR: [
          { userId },
          { isPublic: true },
        ],
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cards' });
  }
};

export const getCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const card = await prisma.card.findFirst({
      where: {
        id,
        OR: [
          { userId },
          { isPublic: true },
        ],
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching card' });
  }
};

export const updateCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    const { title, description, content, isPublic, tags } = req.body;

    const card = await prisma.card.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    const updatedCard = await prisma.card.update({
      where: { id },
      data: {
        title,
        description,
        content,
        isPublic,
        tags: {
          deleteMany: {},
          create: tags.map((tagName: string) => ({
            tag: {
              connectOrCreate: {
                where: { name: tagName },
                create: { name: tagName },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    res.json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: 'Error updating card' });
  }
};

export const deleteCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const card = await prisma.card.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    await prisma.card.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting card' });
  }
}; 