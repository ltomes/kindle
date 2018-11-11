import * as uuid from 'uuid/v4';
import { getTokens, setToken } from './../src/kindle';
it('getTokens method: returns {}', () => {
    const result = getTokens();
    expect(result).toEqual({});
});

it('getTokens: method: returns set key/value', () => {
  const testKey = uuid();
  const testValue = uuid();
  localStorage.setItem(uuid(), uuid()); // Random data
  localStorage.setItem(testKey, testValue);
  const result = getTokens(testKey);
  expect(result).toEqual({[testKey]: testValue});
});

it('getTokens: method: should function with localstorage ref, returns set key/value', () => {
  const testKey = uuid();
  const testValue = uuid();
  localStorage.setItem(uuid(), uuid()); // Random data
  localStorage.setItem(testKey, testValue);
  const result = getTokens(testKey, localStorage);
  expect(result).toEqual({[testKey]: testValue});
});


it('setToken: method: sets string key/value as expected', () => {
  const testKey = uuid();
  const testValue = uuid();
  setToken(testKey, testValue);
  const result = localStorage.getItem(testKey);
  expect(result).toEqual(testValue);
});
it('setToken: method: should function with localstorage ref, sets string key/value as expected', () => {
  const testKey = uuid();
  const testValue = uuid();
  setToken(testKey, testValue, localStorage);
  const result = localStorage.getItem(testKey);
  expect(result).toEqual(testValue);
});

it('setToken: method: sets float key/value as a string as expected', () => {
  const testKey = uuid();
  const testValue = 123e-5;
  setToken(testKey, testValue);
  const result = localStorage.getItem(testKey);
  expect(result).toEqual(testValue.toString());
});

it('setToken: method: sets json key/value as a string as expected', () => {
  const testKey = uuid();
  const testValue = {
    i:'am a object'
  };
  setToken(testKey, testValue);
  const result = localStorage.getItem(testKey);
  expect(result).toEqual(JSON.stringify(testValue));
});
