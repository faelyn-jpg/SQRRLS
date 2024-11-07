export interface Squirrel {
  id: number
  name: string
  class: string
  catch_phrase?: string | null
  bio?: string | null
}

//this was a bit of a copy-pasta from the fruit thing
//I don't know if the SquirrelData is actually necessary yets
export interface SquirrelData {
  name: string
  class: string
  catch_phrase?: string | null
  bio?: string | null
}