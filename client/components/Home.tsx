import { Link } from 'react-router-dom'
import { Squirrel } from '../../models/squirrel.ts'
import { useSquirrels } from '../hooks/useSquirrels.ts'

function Home() {
  const { data: sqrrls, isPending, isError, error } = useSquirrels()
  if (isPending) {
    return 'Loading...'
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }
  return (
    <>
      <div className="home">
        <h1>!</h1>
        <ul>
          {sqrrls &&
            sqrrls.map((sqrrl: Squirrel) => (
              <li key={sqrrl.name}>
                <Link to={`/profile/${sqrrl.id}`}>{`${sqrrl.name}`}</Link>
              </li>
            ))}
        </ul>
        {/* <img src="../../sqrrls/sqrrl1.png" alt="" /> */}
      </div>
    </>
  )
}

export default Home
