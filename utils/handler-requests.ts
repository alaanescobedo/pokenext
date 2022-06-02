interface GetParams {
  endpoint: string
  headers?: HeadersInit
}
const get = async <T>({ endpoint, headers = {} }: GetParams): Promise<T> => {
  const requestOptions = {
    method: 'GET',
    headers
  }
  const res = await fetch(`${endpoint}`, requestOptions)
  return await handleResponse(res)
}

interface PostParams {
  endpoint: string
  body?: any
  headers?: HeadersInit
}
async function post<T>({ endpoint, body, headers = {} }: PostParams): Promise<T> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body)
  }
  const res = await fetch(`${endpoint}`, requestOptions)
  return await handleResponse(res)
}

interface PatchParams {
  endpoint: string
  body: any
  headers?: HeadersInit
}
const patch = async <T>({ endpoint, body, headers = {} }: PatchParams): Promise<T> => {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body)
  }
  const res = await fetch(`${endpoint}`, requestOptions)
  return await handleResponse(res)
}

const handleResponse = async (response: Response) => {
  const data = await response.json()
  if (response.ok === false) {
    const error = data
    throw new Error(`${error.data.message}`)
  }
  return data
}

const HandlerRequest = {
  get,
  post,
  patch
}

export default HandlerRequest
