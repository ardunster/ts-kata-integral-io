export class Post {
  constructor (username: string) {
    this.username = username
  }

  username: string
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
