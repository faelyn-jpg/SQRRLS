import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Squirrel } from '../../models/squirrel.ts'

export default function useCompatibility(sqrrlClass: string) {
  return useQuery({
    queryKey: ['squirrels'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/profile/${sqrrlClass}`)
      return res.body.sqrrls as Squirrel[]
    },
  })
}
