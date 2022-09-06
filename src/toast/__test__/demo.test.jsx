/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import { mount } from '@vue/test-utils';
import iconVue from '@/toast/demos/icon.vue';
import iconTextVue from '@/toast/demos/iconText.vue';
import maskVue from '@/toast/demos/mask.vue';
import mobileVue from '@/toast/demos/mobile.vue';
import positionVue from '@/toast/demos/position.vue';
import textVue from '@/toast/demos/text.vue';

const mapper = {
  iconVue,
  iconTextVue,
  maskVue,
  mobileVue,
  positionVue,
  textVue,
};

describe('Toast', () => {
  Object.keys(mapper).forEach((demoName) => {
    it(`Toast ${demoName} demo works fine`, () => {
      const wrapper = mount(mapper[demoName]);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});