/** Formats a post with username and relative date as appropriate. */
export function formatPost (
  post: Post,
  addTime: boolean,
  addUser: boolean
): string {
  if (!addTime && !addUser) {
    return post.body
  } else if (addUser && !addTime) {
    return `${post.username} - ${post.body}`
  } else {
    return ''
  }
}

/** A single Post object that exists on a user's timeline. Contains a author's username,
 * a post body, and the datestamp of creation.
 */
export class Post {
  // Realistically, username should actually be a verified value and probably a
  // data type other than a string, but for the purposes of the kata a string works.
  constructor (public readonly username: string, public readonly body: string) {
    this.timestamp = new Date()
  }

  timestamp: Date
}

/** Contains owner's username set at creation, a collection of Posts, and methods
 * for publishing new posts and retrieving existing posts.
 */
export class Timeline {
  constructor (public readonly username: string) {}

  posts: Post[] = []

  /** Add a post to the user's timeline. */
  publish (input: string): void {
    this.posts.push(new Post(this.username, input))
  }

  /** Retrieve all posts from user's timeline. */
  retrieve (currentuser: string): string[] {
    return []
  }
}

/** Contains owner's username set at creation, owner's Timeline set at creation,
 * additional timelines as followed, and methods to follow additional users and
 * view all posts.
 */
export class Wall {
  //
}
