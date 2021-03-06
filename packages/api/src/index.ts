import * as path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { makePrismaSchema } from 'nexus-prisma';
import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import * as allTypes from './resolvers';

const schema = makePrismaSchema({
  types: allTypes,

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  },

  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types'
      }
    ],
    contextType: 'types.Context'
  }
});

const server = new GraphQLServer({
  schema,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

const port = process.env.PORT || 4000;
server.start(() => console.log(`Server is running on port ${port}`));
