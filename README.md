# Product-Card

This is a test package for deploy in NPM.

### Tomas Catena

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'tomcat-product-card'
```

```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 6,
        maxCount: 10,
    }}
>
    {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```