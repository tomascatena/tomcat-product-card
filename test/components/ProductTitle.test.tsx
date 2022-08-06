import React from 'react';
import { ProductTitle } from '../../src/components/ProductTitle';
import renderer from 'react-test-renderer';
import { PRODUCT_ONE } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';

describe('ProductTitle', () => {
  it('should render the component with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render the component with the name if the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={PRODUCT_ONE}>
        {
          () => (
            <>
              <ProductTitle />
            </>
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});