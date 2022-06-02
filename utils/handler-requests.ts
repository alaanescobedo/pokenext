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

const handleResponse = async (response: any) => {
  const data = await response.json()
  if (response.error || !response.ok) {
    const error = data || response.statusText
    throw new Error(`${response.status}: ${error}`)
  }
  return data
}

const HandlerRequest = {
  get,
  post,
  patch
}

export default HandlerRequest
