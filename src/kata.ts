export class Post {
  constructor (username: string, body: string) {
    // Realistically, this should actually be a verified value and probably a
    // data type other than a string, but for the purposes of the kata a string works.
    this.username = username
    this.body = body
    this.timestamp = new Date()
  }

  username: string
  body: string
  timestamp: Date
}

export class Timeline {
  /** Add a post to the user's timeline. */
  publish (): void {}

  /** Retrieve all posts from user's timeline. */
  retrieve (): void {}
}

export class Wall {
  //
}
