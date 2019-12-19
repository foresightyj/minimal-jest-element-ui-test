# Error description

```
npm run test:unit

> hi@0.1.0 test:unit C:\Users\Administrator\Desktop\hi
> vue-cli-service test:unit

 FAIL  tests/unit/example.spec.ts
  TestElementUISelect.vue
    √ shallowMount ok (28ms)
    × mount not ok (51ms)

  ● TestElementUISelect.vue › mount not ok

    TypeError: Cannot set property 'documentHandler' of undefined

      10 |     });
      11 |     it('mount not ok', () => {
    > 12 |         const wrapper = mount(TestElementUISelect, {
         |                         ^
      13 |             attachToDocument: true
      14 |         });
      15 |         expect(wrapper.text()).toMatch("element ui select");

      at update (node_modules/element-ui/lib/utils/clickoutside.js:64:29)
      at callHook$1 (node_modules/vue/dist/vue.runtime.common.dev.js:6658:7)
      at _update (node_modules/vue/dist/vue.runtime.common.dev.js:6587:7)
      at Array.updateDirectives (node_modules/vue/dist/vue.runtime.common.dev.js:6560:5)
      at patchVnode (node_modules/vue/dist/vue.runtime.common.dev.js:6294:62)
      at VueComponent.patch [as __patch__] (node_modules/vue/dist/vue.runtime.common.dev.js:6460:9)
      at VueComponent.Vue._update (node_modules/vue/dist/vue.runtime.common.dev.js:3936:19)
      at VueComponent.updateComponent (node_modules/vue/dist/vue.runtime.common.dev.js:4054:10)

```