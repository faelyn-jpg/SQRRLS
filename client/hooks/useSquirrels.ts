import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import request from 'superagent'
// import { getFruits } from '../apis/fruits.ts'
import { Squirrel } from '../../models/squirrel.ts'

export function useSquirrels() {
  return useQuery({
    queryKey: ['squirrel'],
    queryFn: async () => {
      const res = await request.get('api/v1/squirrels')
      // console.log(res.body.sqrrls)
      return res.body.sqrrls as Squirrel[]
    },
  })
}


//hook for the individual squirrel
export function useSquirrelById(id:string | number | undefined) {
  return useQuery({
    queryKey: ['squirrel', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/squirrels/${id}`)
      // console.log(`api response: ${res.body}`)
      return res.body as Squirrel
    }
  })
}

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['fruits'] })
//     },
//   })

//   return mutation
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
