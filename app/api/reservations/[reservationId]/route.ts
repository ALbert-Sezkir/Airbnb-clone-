import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUsers';

interface IParams {
  reservationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }

    const { reservationId } = params;
    if (!reservationId || typeof reservationId !== 'string') {
      throw new Error('Invalid ID');
    }

    const reservation = await prisma.reservation.deleteMany({
      where: {
        id: reservationId,
        userId: currentUser.id, // Ensure the reservation belongs to the current user
      },
    });

    return NextResponse.json({ success: true, reservation });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return NextResponse.error();
  }
}