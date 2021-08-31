import vuexMixin from './mixin'

let Vue;

export class Store {
  constructor(option = {}) {
    Object.assign(this, option);
  }

  commit(_type, _payload, _options) {
    const fn = this.mutations[_type]
    
    if (typeof fn === 'function') {
      fn(this.state, _payload)
    }
  }
}

export function install(_Vue) {
  if (Vue && Vue === _Vue) {
    return;
  }

  Vue = _Vue;

  vuexMixin(Vue)
}
