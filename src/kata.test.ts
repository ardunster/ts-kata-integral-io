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
