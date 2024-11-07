import { useState } from 'react'
import { Squirrel } from '../../models/squirrel'
import { Link } from 'react-router-dom'

//hardcoded initial data - eventually this will come from an API call
      const initialSquirrel: Squirrel = {
        id: 4,
        name: 'Whiskers',
        class: 'C',
        catch_phrase: 'Let’s find the best pinecones together and then race to the top of the tallest tree!',
        bio: 'Confidence is key for Whiskers, who is always climbing trees with flair and finding the best pinecones.'
      }
//hardcoded compatible squirrels
    //eventually this will come from some database query or similar - getCompatableSquirrels()
      const compatibleSquirrels = [
        { id: 2, name: 'Peanut' },
        { id: 8, name: 'Sassy' },
        { id: 11, name: 'Chestnut' }
      ]


function Profile() {
  const [squirrel, setSquirrel] = useState<Squirrel>(initialSquirrel)

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>{squirrel.name}</h1>
        <p className="catch-phrase">`{squirrel.catch_phrase}`</p>
      </div>

      <div className="profile-content">
        <div className="profile-image">
          <img 
            src={`/sqrrls/sqrrl${squirrel.id}.png`} 
            alt={squirrel.name} 
          />
        </div>

        <div className="profile-details">
          <h2>About {squirrel.name}</h2>
          <p className="bio">{squirrel.bio}</p>

          <div className="squirrel-class">
            <strong>Squirrel Class:</strong> {squirrel.class}
          </div>

          <div className="compatible-squirrels">
            <h3>Compatible Squirrel Companions</h3>
            <ul>
              {compatibleSquirrels.map((compatSqrl) => (
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