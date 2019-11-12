import { mount } from '@vue/test-utils';
import Cat from '../../src/components/Cat';

const wrapper = mount(Cat, {
    propsData: {
        title: 'mon chat 1',
        urlImage: 'http://chat.jpg',
        like:0
    }
  })
  describe('cats.vue', () => {
    it('check props coponenet Cat', () => {
        expect(wrapper.props('title')).toBe('mon chat 1');
        expect(wrapper.props('urlImage')).toBe('http://chat.jpg');
        expect(wrapper.props('like')).toBe(0);
    })
});
  