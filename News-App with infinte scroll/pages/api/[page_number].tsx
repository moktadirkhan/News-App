import useSWR from 'swr';


export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    const { page_number } = req.query;
    // console.log(page_number);
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page_number}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      ).then(res => res.json());
        // console.log('[res]',apiResponse);
        
    res.status(200).json({apiResponse })
    }