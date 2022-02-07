/** Uses current time and input time to create a string representing the time
 * difference.
 */
export function formatTimeDiff (input: Date): string {
  const now: Date = new Date()
  const difference: number = now.getTime() - input.getTime()
  if (difference <= 60000) {
    const seconds = Math.floor(difference / 1000)
    return `${seconds} seconds ago`
  }
  return ''
}

/** Formats a post with username and relative date as appropriate. */
export function formatPost (
  post: IPost,
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

/** Sort post objects according to date stamps, most recent first. */
export function sortPosts (a: IPost, b: IPost): number {
  if (a.timestamp > b.timestamp) {
    return -1
  } else if (a.timestamp < b.timestamp) {
    return 1
  } else {
    return 0
  }
}

/** A single Post object that exists on a user's timeline. Contains a author's username,
 * a post body, and the datestamp of creation.
 */
export interface IPost {
  // Realistically, username should actually be a verified value and probably a
  // data type other than a string, but for the purposes of the kata a string works.
  username: string
  body: string
  timestamp: Date
}

/** Contains owner's username set at creation, a collection of Posts, and methods
 * for publishing new posts and retrieving existing posts.
 */
export class Timeline {
  constructor (public readonly username: string) {}

  posts: IPost[] = []

  /** Add a post to the user's timeline. */
  publish (input: string): void {
    this.posts.push({
      username: this.username,
      body: input,
      timestamp: new Date()
    })
  }

  /** Retrieve all posts from user's timeline. */
  retrieve (currentuser: string): string[] {
    const result: string[] = []

    this.posts.sort(sortPosts)

    for (const post of this.posts) {
      result.push(formatPost(post, false, false))
    }
    return result
  }
}

/** Contains owner's username set at creation, owner's Timeline set at creation,
 * additional timelines as followed, and methods to follow additional users and
 * view all posts.
 */
export class Wall {
  //
}
