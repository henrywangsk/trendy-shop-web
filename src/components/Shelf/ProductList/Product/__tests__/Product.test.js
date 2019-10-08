import Product from '..';
import Root from '../../../../../Root';

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

it('mount without crashing', () => {
  const wrapped = mount(
    <Root>
      <Product product={productMock} addProduct={() => {}} />
    </Root>
  );
  wrapped.unmount();
});
