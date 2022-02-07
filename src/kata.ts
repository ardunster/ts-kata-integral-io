export class Post {
  // Realistically, username should actually be a verified value and probably a
  // data type other than a string, but for the purposes of the kata a string works.
  constructor (public readonly username: string, public readonly body: string) {
    this.timestamp = new Date()
  }

  timestamp: Date
}

export class Timeline {
  constructor (public readonly username: string) {}

  /** Add a post to the user's timeline. */
  publish (): void {}

  /** Retrieve all posts from user's timeline. */
  retrieve (): void {}
}

export class Wall {
  //
}
