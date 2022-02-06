import { Timeline } from './kata'

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
