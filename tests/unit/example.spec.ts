import { mount, shallowMount, config, createLocalVue } from '@vue/test-utils';
import TestElementUISelect from '@/components/TestElementUISelect.vue';
import ElementUI from 'element-ui';

(config.stubs as any).transition = false;
const localVue = createLocalVue();

// this works https://github.com/ziyoung/vue-test-with-jest/blob/master/src/components/__tests__/hello-world.test.js
// see https://github.com/ElemeFE/element/issues/12158
// also https://github.com/vuejs/vue-test-utils/issues/829

describe('TestElementUISelect.vue', () => {
    it('shallowMount ok', () => {
        const wrapper = shallowMount(TestElementUISelect, {
            localVue,
        });
        expect(wrapper.text()).toMatch("element ui select");
    });
    it('mount not ok', () => {
        const wrapper = mount(TestElementUISelect, {
            localVue,
            sync: false,
            // attachToDocument: true,
        });
        expect(wrapper.text()).toMatch("element ui select");
    });
});
