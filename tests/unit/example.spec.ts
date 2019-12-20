import Vue from "vue";
import { mount, shallowMount, config, createLocalVue } from '@vue/test-utils';
import TestElementUISelect from '@/components/TestElementUISelect.vue';
import TestElementUIInputNumber from '@/components/TestElementUIInputNumber.vue';
import TestElementUISwitch from '@/components/TestElementUISwitch.vue';
import ElementUI from 'element-ui';
import { triggerMouseEvent } from './utils';

(config.stubs as any).transition = false;
const localVue = createLocalVue();

// this works https://github.com/ziyoung/vue-test-with-jest/blob/master/src/components/__tests__/hello-world.test.js
// see https://github.com/ElemeFE/element/issues/12158
// also https://github.com/vuejs/vue-test-utils/issues/829

describe('TestElementUISelect.vue', () => {
    it('shallowMount TestElementUISelect ok', () => {
        const wrapper = shallowMount(TestElementUISelect, {
            localVue,
        });
        expect(wrapper.text()).toMatch("element ui select");
    });
    it('mount TestElementUISwitch ok', async () => {
        const wrapper = mount(TestElementUISwitch, {
            localVue,
        });
        const el = wrapper.find(".el-switch__core");
        expect(wrapper.html()).toContain("val: true");
        el.trigger("click");
        await localVue.nextTick();
        expect(wrapper.html()).toContain("val: false");
    });
    it('mount TestElementUIInputNumber ok', async () => {
        const wrapper = mount(TestElementUIInputNumber, {
            localVue,
            // attachToDocument: true,
        });
        expect(wrapper.text()).toMatch("element ui input number");
        const numEl = wrapper.find(".num");
        const incEl = wrapper.find(".btn");
        incEl.trigger("click");
        await localVue.nextTick();
        expect(numEl.text()).toContain(12346);
        const incEl2 = wrapper.find(".el-input-number__increase");
        //see https://github.com/ElemeFE/element/blob/1fe6849a63e6bd91332027eed8cc716725d7aa27/test/unit/specs/input-number.spec.js
        //see https://github.com/ElemeFE/element/blob/af0dc358bcf9e80cf15e11ecc494bfbd52e5adf6/packages/input-number/src/input-number.vue
        // triggerEvent(btnDecrease, 'mousedown');
        // triggerClick(document, 'mouseup');
        //see https://github.com/ElemeFE/element/blob/dev/src/directives/repeat-click.js for v-repeat-click
        incEl2.trigger("mousedown");
        triggerMouseEvent(document, "mouseup");
        await localVue.nextTick();
        expect(numEl.text()).toContain(12347);
        wrapper.destroy();
    });
    it('mount TestElementUISelect not ok', () => {
        const wrapper = mount(TestElementUISelect, {
            localVue,
            // sync: false,
            // attachToDocument: true,
        });
        expect(wrapper.text()).toMatch("element ui select");
    });
});
