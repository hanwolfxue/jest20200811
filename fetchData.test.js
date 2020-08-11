import { fetchData } from './fetchData.js'

// test('fetchData 返回结果为{ success: true }', () => {
//   return fetchData().then(response => {
//     expect(response.data).toEqual({
//       success: true
//     })
//   })
// })

// test('fetchData 返回结果为404', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => {
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// test('fetchData 返回结果为 { success: true }', () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchData 返回结果为 404', () => {
//   return expect(fetchData()).rejects.toThrow();
// })

// test('fetchData 返回结果为 404', async () => {
//   const response = await fetchData();
//     expect(response.data).toMatchObject({
//       success: true
//     })
// })

test('fetchData 返回结果为 404', async () => {
  expect.assertions(1)
  try {
    await fetchData();
  } catch (error) {
    expect(error.toString()).toMatch(/Error/)
  }
})