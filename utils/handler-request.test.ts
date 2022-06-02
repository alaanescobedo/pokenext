import HandlerRequest from './handler-requests'

interface TestResponse {
  status: number
  data: any
}

const mockResSuccessData = {
  status: 200,
  statusText: 'Success',
  data: {
    message: 'Ok'
  },
  ok: true
}

const mockResErrorData = {
  status: 404,
  statusText: 'Error',
  data: {
    message: 'Fail'
  },
  ok: false
}

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve(mockResSuccessData),
  status: 200,
  ok: true,
}))

describe('@utils - HandlerRequest', () => {


  describe('Success Operations', () => {
    beforeAll(() => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockResSuccessData),
        ok: true,
      }))
    })

    it('.get - should return a success response', async () => {
      const { data, status } = await HandlerRequest.get<TestResponse>({ endpoint: '/test' })

      expect(status).toBe(mockResSuccessData.status)
      expect(data).toEqual(mockResSuccessData.data)
    })
    it('.post - should return a success response', async () => {
      const { data, status } = await HandlerRequest.post<TestResponse>({ endpoint: '/test' })

      expect(status).toBe(mockResSuccessData.status)
      expect(data).toEqual(mockResSuccessData.data)
    })
    it('.patch - should return a success response', async () => {
      const { data, status } = await HandlerRequest.patch<TestResponse>({ endpoint: '/test', body: {} })

      expect(status).toBe(mockResSuccessData.status)
      expect(data).toEqual(mockResSuccessData.data)
    })
  })

  describe('Error Operations', () => {
    beforeAll(() => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockResErrorData),
        status: 404,
        ok: false,
      }))
    })

    it('HandleResponse - should return a error response', async () => {
      try {
        await HandlerRequest.get<TestResponse>({ endpoint: '/test' })
      } catch (error) {
        if (error instanceof Error) {
          expect(error.message).toBe(mockResErrorData.data.message)
          expect(error.name).toBe('Error')
          expect(global.fetch).toHaveBeenCalledTimes(1)
        }
      }
    })
  })
})