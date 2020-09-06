
async function delay() {
  await new Promise(resolve => setTimeout(resolve(), 5000))
  console.log('哈哈哈')
}
async function delay2() {
  await new Promise(resolve => setTimeout(resolve(), 6000))
  console.log('hehe')
}

const p = new Promise(() => {})
const q = () => 4

console.log(p)
console.log(q())
console.log('asibpf'.includes('as'))

delay()
delay2()
