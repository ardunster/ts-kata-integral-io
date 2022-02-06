import { Post, Timeline } from './kata'

describe('Post', () => {
  let post: Post
  beforeAll(() => {
    post = new Post('testuser')
  })

  it('should be defined', () => {
    expect(post).toBeDefined()
  })

  it('should contain a user name field', () => {
    expect(post.username).toBeDefined()
  })

  it('should contain the username assigned in the constructor', () => {
    const testPost1 = new Post('testuser1')
    expect(testPost1.username).toEqual('testuser1')

    const testPost2 = new Post('some other user')
    expect(testPost2.username).toEqual('some other user')
  })
})

describe('Timeline', () => {
  let timeline: Timeline

  beforeAll(() => {
    timeline = new Timeline()
  })

  describe('publish', () => {
    it('should be defined', () => {
      expect(timeline.publish).toBeDefined()
    })
  })

  describe('retrieve', () => {
    it('should be defined', () => {
      expect(timeline.retrieve).toBeDefined()
    })
  })
})
