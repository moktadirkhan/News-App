import useSWR from 'swr';


export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    const { data, error } =  useSWR('https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=2&apiKey=6fe5779852364bbc8a822d88d8742dc5', fetch)
  
    console.log("...",data, error);

    res.status(200).json({data })
    }