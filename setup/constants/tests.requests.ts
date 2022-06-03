import { generateFakeResponse } from "../../utils/tests/test-utils";

const Success =  generateFakeResponse({
  statusCode: 200,
  statusText: 'Success',
  message: 'Success',
  ok: true,
});
const Error = generateFakeResponse({
  statusCode: 400,
  statusText: 'Error',
  message: 'Fail',
  ok: false
});

export const TestResponse = {
  Success,
  Error
}