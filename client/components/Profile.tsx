import { useParams } from 'react-router-dom'
// import { Squirrel } from '../../models/squirrel'
import { Link } from 'react-router-dom'
import { useSquirrelById } from '../hooks/useSquirrels'
import useCompatibility from '../hooks/useCompatibility'

function Profile() {
  const { id } = useParams()
  const { data: squirrel, isPending, isError, error } = useSquirrelById(id)

  const {
    data: compatibleSquirrels,
    isPending: compatPend,
    isError: compatErr,
    error: compatErrDets,
  } = useCompatibility(squirrel?.class)

  if (isPending) return 'Loading...'
  if (isError) return `Error: ${error?.message}`

  if (isPending || compatPend) return 'Loading...'
  if (compatErr || squirrel === undefined)
    return `Error: ${compatErrDets?.message ?? 'An unknown error has occurred...'}`

  if (!squirrel) return 'Squirrel not found :('

  const filteredCompatibleSquirrels =
    compatibleSquirrels?.filter(
      (compatSqrl) => compatSqrl.name !== squirrel.name,
    ) ?? []

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>{squirrel.name}</h1>
        <p className="catch-phrase">`{squirrel.catch_phrase}`</p>
      </div>

      <div className="profile-content">
        <div className="profile-image">
          <img src={`/sqrrls/sqrrl${squirrel.id}.png`} alt={'Squirrel'} />
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
              {filteredCompatibleSquirrels.length > 0 ? (
                filteredCompatibleSquirrels.map((compatSqrl) => (
                  <li key={compatSqrl.id}>
                    <Link to={`/profile/${compatSqrl.id}`}>
                      {compatSqrl.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li>No compatible squirrels available.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
