import expect from 'expect';
import { createComponents } from './componentEngine.service';

import { appObj } from '../mocks/componentObject'

describe('SERVICE: ', () => {

  describe('componentEngine.service.js', () => {
      it('should return empty array if the app object is empty', () => {
        expect(
          createComponents([], {})
        ).toEqual(
          []
        )
      })

      it('should return not found when component is unknown component', () => {
        let comp = createComponents([{type: "UNKNOWN"}], {validator: {}});
        expect(comp[0].props.children)
        .toEqual("Component not found!")
      })
  })
})
