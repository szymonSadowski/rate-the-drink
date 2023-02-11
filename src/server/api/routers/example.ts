/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "src/server/db";
import { z } from "zod";

export const votingRouter = createTRPCRouter({
  resultVoting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const drinks = await prisma.drinks.findUnique({
        where: { name: input.name },
      });

      return {
        result: drinks,
      };
    }),
});
