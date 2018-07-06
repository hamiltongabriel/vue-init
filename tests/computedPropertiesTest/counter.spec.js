import { shallow } from 'vue-test-utils'
import Counter from '../../src/components/cookbook/counter/Counter'
import expect from 'expect'


describe('testando contador', () => {
  let counter = shallow(Counter)
  it('valor inicial do contador', () => {
    expect(counter.vm.count).toBe(0)
    // expect(counter).toBe(1)
  })
})
