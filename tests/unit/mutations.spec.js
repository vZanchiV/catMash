
import { mutations } from '../../src/store/modules/cats';
// assignement de `mutations` par déstructuration
const { GET_CATS, GET_TWO_CATS } = mutations
const MockData =
{
    "images": [
        {
            "url": "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
            "id": "MTgwODA3MA"
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
            "id": "tt"
        }
    ]
}


describe('mutations', () => {
    it('GET CATS', () => {
      // état simulé
      const state = {cats : []}
      // appliquer la mutation
      GET_CATS(state,MockData)
      // tester le résultat
      expect(state.cats.images.length).toBeGreaterThan(1);
    })
    it('GET_TWO_CATS', () => {
        // état simulé
        const state = {catForVote : []}
        // appliquer la mutation
        GET_TWO_CATS(state,MockData)
        // tester le résultat
        expect(state.catForVote.images.length).toBe(2);
      })
  })
