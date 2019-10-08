import Root from '../../../Root';
import App from '../';

import Shelf from '../../Shelf';
import ShoppingCart from '../../ShoppingCart';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a shelf', () => {
  expect(wrapped.find(Shelf).length).toEqual(1);
});

it('shows a ShoppingCart', () => {
  expect(wrapped.find(ShoppingCart).length).toEqual(1);
});
