module.exports = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    // limit of 25 deviceSizes values
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // limit of 25 imageSizes values
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // limit of 50 domains values
    domains: [],
    path: '/_next/image',
    // loader can be 'default', 'imgix', 'cloudinary', or 'akamai'
    loader: 'default',
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.cnn.com',
              'img.mlbstatic.com',
              'ca-times.brightspotcdn.com',
              'static-17.sinclairstoryline.com',
              'images.macrumors.com',
              'static.foxnews.com',
              'scx2.b-cdn.net',
              'profootballtalk.nbcsports.com',
              'nypost.com',
              'www.reuters.com',
              'media-cldnry.s-nbcnews.com',
              'www.washingtonpost.com',
              'image.cnbcfm.com',
              'www.cnet.com',
              'mediaproxy.salon.com',
              'kubrick.htvapps.com',
              'thehackernews.com',
              'www.sciencealert.com',
              's.w-x.co',
              'imagez.tmz.com',
              's.yimg.com',
              'images.axios.com',
               'cdn.arstechnica.net',
              'a3.espncdn.com',
              'static.www.nfl.com',
              'www.news4jax.com',
              'deadline.com',
              'www.gannett-cdn.com',
              'deadline.com',
              'a57.foxnews.com',
              'i.kinja-img.com',
              'static01.nyt.com',
              'images.wsj.net',
              'hips.hearstapps.com',
              'a2.espncdn.com',
              'a4.espncdn.com',
                'cf-images.us-east-1.prod.boltdns.net',
                'cbsnews3.cbsistatic.com',
                'cdn.vox-cdn.com',
              'cbsnews1.cbsistatic.com',
              'images.barrons.com',
              'scitechdaily.com',
              'www.telegraph.co.uk',
              'i.dailymail.co.uk',
                'media.npr.org',
                'pagesix.com',
                'sportshub.cbsistatic.com',
              'storage.googleapis.com',
            'thehill.com'],
  },
}
