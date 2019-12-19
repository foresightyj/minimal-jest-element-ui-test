import { mount, shallowMount } from '@vue/test-utils';
import TestElementUISelect from '@/components/TestElementUISelect.vue';

describe('TestElementUISelect.vue', () => {
    it('shallowMount ok', () => {
        const wrapper = shallowMount(TestElementUISelect, {
        });
        expect(wrapper.text()).toMatch("element ui select");
    });
    it('mount not ok', () => {
        const wrapper = mount(TestElementUISelect, {
            attachToDocument: true
        });
        expect(wrapper.text()).toMatch("element ui select");
    });
});
