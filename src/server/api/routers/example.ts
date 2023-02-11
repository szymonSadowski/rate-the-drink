/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "src/server/db";
import { z } from "zod";

export const votingRouter = createTRPCRouter({
  resultVoting: publicProcedure.query(async () => {
    const res = await prisma.drinks.findMany();
    const drinks = res;
    return {
      result: drinks,
    };
  }),
  vote: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    const res = await prisma.drinks.update({
      where: {
        id: input,
      },
      data: {
        votedFor: {
          increment: 1,
        },
      },
    });
    return { success: true, result: res };
  }),
});
