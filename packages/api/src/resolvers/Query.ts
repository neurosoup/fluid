import { prismaObjectType } from 'nexus-prisma';

//@ts-ignore
const Query = prismaObjectType({
  name: 'Query',
  definition: t => t.prismaFields(['*'])
});
