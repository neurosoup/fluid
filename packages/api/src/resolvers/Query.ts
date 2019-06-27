import { prismaObjectType } from 'nexus-prisma';
import { getUserId } from '../utils';

//@ts-ignore
const Query = prismaObjectType({
  name: 'Query',
  definition: t => {
    t.prismaFields(['*']);

    t.field('me', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx);
        return ctx.prisma.user({ id: userId });
      }
    });
  }
});
