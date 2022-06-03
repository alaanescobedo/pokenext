import { TestResponse } from '../setup/constants/tests.requests'
import HandlerRequest from './handler-requests'

type SuccessResponse = typeof TestResponse.Success

const generateMockResponse = ({ resolve, ok }: { resolve: any, ok: boolean }) => jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve(resolve),
  ok,
}))

describe('@utils - HandlerRequest', () => {

  describe('Success Operations', () => {
    beforeAll(() => {
      global.fetch = generateMockResponse({ resolve: TestResponse.Success, ok: true })
    })

    it('.get - should return a success response', async () => {
      const { status, data } = await HandlerRequest.get<SuccessResponse>({ endpoint: '/test' })
      expect(status).toBe(TestResponse.Success.status)
      expect(data).toEqual(TestResponse.Success.data)
    })
    it('.post - should return a success response', async () => {
      const { data, status } = await HandlerRequest.post<SuccessResponse>({ endpoint: '/test' })

      expect(status).toBe(TestResponse.Success.status)
      expect(data).toEqual(TestResponse.Success.data)
    })
    it('.patch - should return a success response', async () => {
      const { data, status } = await HandlerRequest.patch<SuccessResponse>({ endpoint: '/test', body: {} })

      expect(status).toBe(TestResponse.Success.status)
      expect(data).toEqual(TestResponse.Success.data)
    })
  })

  describe('Error Operations', () => {
    beforeAll(() => {
      global.fetch = generateMockResponse({ resolve: TestResponse.Error, ok: false })
    })

    it('HandleResponse - should return a error response', async () => {
      try {
        await HandlerRequest.get({ endpoint: '/test' })
      } catch (error) {
        if (error instanceof Error) {
          expect(error.message).toBe(TestResponse.Error.data.message)
          expect(error.name).toBe('Error')
          expect(global.fetch).toHaveBeenCalledTimes(1)
        }
      }
    })
  })
})