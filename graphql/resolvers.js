import { printSchema } from "graphql";
import { prismaClient } from "@prisma/client";

export const resolvers = {

    Query: {
        properties: (_parent, _args, _context) => {
                return prisma.Property.findMany();
            }

    },

};