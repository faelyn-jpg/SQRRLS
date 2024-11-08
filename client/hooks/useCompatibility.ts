import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Squirrel } from '../../models/squirrel.ts'

export default function useCompatibility(sqrrlClass?: string) {
  return useQuery({
    enabled: !!sqrrlClass, //only run query if sqrrlClass exists, preventing unnecessary requests
    queryKey: ['squirrels'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/profile/${sqrrlClass}`)
      return res.body.sqrrls as Squirrel[]
    },
  })
}
