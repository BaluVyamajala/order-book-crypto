import {FINANCE_API_URL} from '../util/constants';

export async function getSymbols(): Promise<string[]> {
  const exchangeInfo = `${FINANCE_API_URL}/exchangeInfo`;
  return fetch(`${exchangeInfo}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result);
}
