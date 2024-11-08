// import { useParams } from 'react-router-dom'
// // import { Squirrel } from '../../models/squirrel'
// import { Link } from 'react-router-dom'
// import useCompatibility from '../hooks/useCompatibility'
// import { getSquirrelById } from '../../server/db/squirrels.queries'

// export function Compatibility() {
// const {
//   data: compatibleSquirrels,
//   isPending: compatPend,
//   isError: compatErr,
//   error: compatErrDets,
// } = useCompatibility(squirrel.class)

// if (compatPend) return 'Loading...'
// if (compatErr) return `Error: ${compatErrDets.message}`

// return (
//   <ul>
//   {compatibleSquirrels.map((compatSqrl) => (
//     <li key={compatSqrl.id}>
//       <Link to={`/profile/${compatSqrl.id}`}>
//         {compatSqrl.name}
//       </Link>
//     </li>
//   ))}
// </ul>
// )

// }
