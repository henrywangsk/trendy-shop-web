import CartProduct from '../';

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

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <CartProduct product={productMock} removeProduct={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('append class mouseover when mouse over an item', () => {
  expect(wrapped.find('.cart-item').hasClass('mouseover')).toEqual(false);
  wrapped.find('.cart-item').simulate('mouseover');
  expect(wrapped.find('.cart-item').hasClass('mouseover')).toEqual(true);
});
