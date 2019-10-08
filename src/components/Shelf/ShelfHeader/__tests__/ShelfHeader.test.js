import Root from '../../../../Root';
import ShelfHeader from '..';

it('shows a sort component', () => {
  const productsLength = 10;
  const wrapped = mount(
    <Root>
      <ShelfHeader productsLength={productsLength} />
    </Root>
  );
  expect(wrapped.find('span')).toHaveText(
    `${productsLength} Product(s) found.`
  );
  wrapped.unmount();
});
