import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../middleware/mongodb'
import shortModel from '../../models/short'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(422).send({ error: 1, message: 'req_method_not_supported' })

  if (!req.body.list) return res.status(400).send({ error: 1, message: 'invalid_bodyData' })

  const { list } = req.body
  const data = await Promise.all(
    list.map(async (i) => {
      const dbi = await shortModel.findOne({ shorturl: i.shorturl })
      i.clicks = dbi ? dbi.clicks : 0
      return i
    })
  )
  res.status(200).send({ data })
}

export default connectDB(handler)
