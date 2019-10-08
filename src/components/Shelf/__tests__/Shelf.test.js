import Shelf from '..';
import Root from '../../../Root';
import ShelfHeader from '../ShelfHeader';
import ProductList from '../ProductList';
import Product from '../ProductList/Product';
import { fetchProducts } from '../../../services/shelf/actions';

const products = [
  {
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
  },

  {
    id: 1,
    sku: 1,
    title: 'Dark Thug Blue-Navy',
    description: '',
    availableSizes: ['M'],
    style: 'Front print and paisley print',
    price: 29.45,
    installments: 5,
    currencyId: 'USD',
    currencyFormat: '$',
    isFreeShipping: true
  }
];

jest.mock('../../../services/shelf/actions');
fetchProducts.mockImplementation(callback => {
  callback();
  return {
    type: 'FETCH_PRODUCTS',
    payload: products
  };
});

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Shelf />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows 2 products component', async () => {
  expect(wrapped.find(Product).length).toEqual(2);
});

it('shows a shelf header with 2 products', () => {
  expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);
});

it('shows a product list component', () => {
  expect(wrapped.find(ProductList).length).toEqual(1);
});
