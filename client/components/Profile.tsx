import { useParams } from 'react-router-dom'
// import { Squirrel } from '../../models/squirrel'
import { Link } from 'react-router-dom'
import { useSquirrelById } from '../hooks/useSquirrels'
import useCompatibility from '../hooks/useCompatibility'

//hardcoded initial data - eventually this will come from an API call which calls getSquirrelById()
// const initialSquirrel: Squirrel = {
//   id: 4,
//   name: 'Whiskers',
//   class: 'C',
//   catch_phrase: 'Let’s find the best pinecones together and then race to the top of the tallest tree!',
//   bio: 'Confidence is key for Whiskers, who is always climbing trees with flair and finding the best pinecones.'
// }

function Profile() {
  // hardcoded compatible squirrels
  //   eventually this will come from some database query or similar - getCompatableSquirrels()

  // console.log(compat)
  const { id } = useParams()

  const { data: squirrel, isPending, isError, error } = useSquirrelById(id)

  const {
    data: compatibleSquirrels,
    isPending: compatPend,
    isError: compatErr,
    error: compatErrDets,
  } = useCompatibility(squirrel?.class)

  if (isPending) return 'Loading...'
  if (isError) return `Error fetching squirrel: ${error.message}`

  if (isPending || compatPend) return 'Loading...'
  if (compatErr) return `Error fetching compatible squirrels: ${compatErrDets.message}`

  // if (compatErr || squirrel === undefined)
  //   return `Error: ${compatErrDets.message}`

  if (!squirrel) return 'Squirrel not found :('
  // if (compatibleSquirrels !== undefined && squirrel !== undefined) {
    
  return (
    <div className="profile">
      <div className="profile-header">
        <h1>{squirrel.name}</h1>
        <p className="catch-phrase">`{squirrel.catch_phrase}`</p>
      </div>

      <div className="profile-content">
        <div className="profile-image">
          <img src={`/sqrrls/sqrrl${squirrel.id}.png`} alt={squirrel.name} />
        </div>

        <div className="profile-details">
          <h2>About {squirrel.name}</h2>
          <p className="bio">{squirrel.bio}</p>

          <div className="squirrel-class">
            <b>Squirrel Class:</b> {squirrel.class}
          </div>

          <div className="compatible-squirrels">
            <h3>Compatible Squirrel Companions</h3>
            <ul>
              {compatibleSquirrels?.map((compatSqrl) => (
                <li key={compatSqrl.id}>
                  <Link to={`/profile/${compatSqrl.id}`}>
                    {compatSqrl.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
