// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const q = req.query
    console.log(q)
    res.status(200).json({ title: 'How to create next api' })
  }
  