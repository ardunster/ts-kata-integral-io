import { Post, Timeline, Wall } from './kata'

describe('Post', () => {
  it('should be defined', () => {
    expect(Post).toBeDefined()
  })

  it('should contain a user name field as assigned in the constructor', () => {
    const post = new Post('testuser')
    expect(post.username).toBeDefined()

    const testPost1 = new Post('testuser1')
    expect(testPost1.username).toEqual('testuser1')

    const testPost2 = new Post('some other user')
    expect(testPost2.username).toEqual('some other user')
  })

  it('should contain a body field as assigned in the constructor', () => {
    const post = new Post('testuser', 'some contents')
    expect(post.body).toBeDefined()
  })
})

describe('Timeline', () => {
  it('should be defined', () => {
    expect(Timeline).toBeDefined()
  })

  describe('publish', () => {
    it('should be defined', () => {
      const timeline: Timeline = new Timeline()
      expect(timeline.publish).toBeDefined()
    })
  })

  describe('retrieve', () => {
    it('should be defined', () => {
      const timeline: Timeline = new Timeline()
      expect(timeline.retrieve).toBeDefined()
    })
  })
})

describe('Wall', () => {
  it('should be defined', () => {
    expect(Wall).toBeDefined()
  })
})
