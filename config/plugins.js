module.exports = ({ env }) => ({

    seo: {
        enabled: true,
      },

       graphql: {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: true,
          depthLimit: 10,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
            introspection: true,
          },
        },
      },

});
