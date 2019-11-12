import Vuex from 'vuex'
import Home from '../../src/views/Home';
import { mount,createLocalVue  } from '@vue/test-utils'
import store from '../../src/store/store'

const localVue = createLocalVue()
localVue.use(Vuex)



  describe('Home', () => {

    it("a le hook 'created'", () => {
        expect(typeof Home.created).toBe('function')
    });
    it('contient les données par défaut', () => {
        expect(typeof Home.data).toBe('function')
        const defaultData = Home.data()
        expect(defaultData.nameCate).toBe('')
    });
    it('Ul tag is rendered', () => {
        const wrapper = mount(Home, {
            store,
            localVue
        })
        expect(wrapper.contains('ul')).toBe(true);

    })
})


  