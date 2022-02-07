import { formatPost, IPost, sortPosts, Timeline, Wall } from './kata'

const mockDate: Date = new Date('2022-02-06 12:34:56')

describe('Timeline', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(mockDate)
  })
  afterAll(() => {
    jest.useRealTimers()
  })

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

      expect(timeline.posts.length).toEqual(1)
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

    xit('should return a formatted chronological array of previously published posts for display', () => {
      const timeline: Timeline = new Timeline('Alice')
      expect(timeline.retrieve('Alice')).toEqual([])

      jest.setSystemTime(new Date(mockDate.getTime() - 86400000))
      timeline.publish("It's too hot today :( ")

      jest.setSystemTime(new Date(mockDate.getTime() - 5000))
      timeline.publish('I love the weather today.')

      jest.setSystemTime(mockDate)

      expect(timeline.retrieve('Alice')).toEqual([
        'I love the weather today.',
        "It's too hot today :( "
      ])
    })
  })
})

describe('Wall', () => {
  it('should be defined', () => {
    expect(Wall).toBeDefined()
  })
})

describe('formatPost', () => {
  const testPost: IPost = {
    username: 'Alice',
    body: 'I love the weather today.',
    timestamp: mockDate
  }

  it('should be defined', () => {
    expect(formatPost).toBeDefined()
  })

  it('should return just the body of the Post if addTime and addUser are false', () => {
    expect(formatPost(testPost, false, false)).toEqual(
      'I love the weather today.'
    )
  })

  it("should include the Post's author if addUser is true", () => {
    expect(formatPost(testPost, false, true)).toEqual(
      'Alice - I love the weather today.'
    )
  })
})

describe('sortPosts', () => {
  const earlierPost: IPost = {
    username: 'Steve',
    body: 'Pistachios',
    timestamp: new Date('2022-02-06 12:34:56')
  }

  const laterPost: IPost = {
    username: 'George',
    body: 'Pine nuts',
    timestamp: new Date('2022-02-07 12:34:56')
  }

  const evenlaterPost: IPost = {
    username: 'George',
    body: 'Pine nuts',
    timestamp: new Date('2022-02-08 12:34:56')
  }

  it('should be defined', () => {
    expect(sortPosts).toBeDefined()
  })

  it('should return 1 if a is newer than b', () => {
    expect(sortPosts(earlierPost, laterPost)).toEqual(1)
  })

  it('should return -1 if b is newer than a', () => {
    expect(sortPosts(laterPost, earlierPost)).toEqual(-1)
  })

  it('should return 0 if both have the same date', () => {
    expect(sortPosts(earlierPost, earlierPost)).toEqual(0)
  })

  it('should properly sort an array of posts with different dates when used with array.sort', () => {
    const postArray = [laterPost, earlierPost, evenlaterPost]

    postArray.sort(sortPosts)

    expect(postArray).toEqual([evenlaterPost, laterPost, earlierPost])
  })
})
