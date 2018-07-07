import { shallow } from 'vue-test-utils'
import computedProperty from '../../src/components/cookbook/computedProperties/computedProperty.vue'
import expect from 'expect'

describe('computedProperty.vue', () => {
  it('Testando nome do Componente', () => {
    const wrapper = shallow(computedProperty)
    expect(wrapper.name()).toEqual('computedProperty');
  })
})
