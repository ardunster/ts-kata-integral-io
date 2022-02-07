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

  describe('publish', () => {
    it('should be defined', () => {
      const timeline: Timeline = new Timeline('Alice')
      expect(timeline.publish).toBeDefined()
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
