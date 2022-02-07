import { Post, Timeline, Wall } from './kata'

const mockDate: Date = new Date('2022-02-06 12:34:56')

describe('Post', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(mockDate)
  })
  afterAll(() => {
    jest.useRealTimers()
  })

  it('should be defined', () => {
    expect(Post).toBeDefined()
  })

  it('should contain a user name field as assigned in the constructor', () => {
    const post = new Post('testuser', 'some contents')
    expect(post.username).toBeDefined()
    expect(post.username).toEqual('testuser')
  })

  it('should contain a body field as assigned in the constructor', () => {
    const post = new Post('testuser', 'some contents')
    expect(post.body).toBeDefined()
    expect(post.body).toEqual('some contents')
  })

  it('should contain a timestamp field from when it is created', () => {
    const post = new Post('testuser', 'some contents')
    expect(post.timestamp).toBeDefined()
    expect(post.timestamp).toEqual(mockDate)
  })
})

describe('Timeline', () => {
  it('should be defined', () => {
    expect(Timeline).toBeDefined()
  })

  it('should contain a username as assigned on construction', () => {
    const timeline = new Timeline('Alice')
    expect(timeline.username).toBeDefined()
    expect(timeline.username).toEqual('Alice')
  })

  it('should contain an array of Posts', () => {
    const timeline = new Timeline('Alice')
    expect(timeline.posts).toBeDefined()
    expect(timeline.posts).toEqual([])
  })

  describe('publish', () => {
    it('should be defined', () => {
      const timeline: Timeline = new Timeline('Alice')
      expect(timeline.publish).toBeDefined()
    })

    it("should add a post to the user's Timeline with current time, username, and body", () => {
      const timeline: Timeline = new Timeline('Alice')
      timeline.publish('I love the weather today.')

      expect(timeline.posts.length).toEqual([1])
      expect(timeline.posts[0].username).toEqual('Alice')
      expect(timeline.posts[0].body).toEqual('I love the weather today.')
      expect(timeline.posts[0].timestamp).toEqual(mockDate)
    })
  })

  describe('retrieve', () => {
    it('should be defined', () => {
      const timeline: Timeline = new Timeline('Alice')
      expect(timeline.retrieve).toBeDefined()
    })
  })
})

describe('Wall', () => {
  it('should be defined', () => {
    expect(Wall).toBeDefined()
  })
})
