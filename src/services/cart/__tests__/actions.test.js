import * as actions from '../actions';
import * as types from '../actionTypes';

const productMock = {
  id: 0,
  sku: 0,
  title: 'Cat Tee Black',
  description: '4 MSL',
  availableSizes: ['S', 'XS'],
  style: 'Black with custom print',
  price: 10.9,
  installments: 9,
  currencyId: 'USD',
  currencyFormat: '$',
  isFreeShipping: true
};

describe('floatCart actions', () => {
  describe('addProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.ADD_PRODUCT,
        payload: productMock
      };

      expect(actions.addProduct(productMock)).toEqual(expectedAction);
    });
  });
});
