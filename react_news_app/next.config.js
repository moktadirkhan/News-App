module.exports = {
    async rewrites() {
        return [
          {
            source: '/v2/top-headlines/',
            destination: 'https://newsapi.org/v2/top-headlines',
          },
        ]
      },
  };