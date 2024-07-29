## Notes taken when reading CSS reference

- `vertical-align: middle | other` only works in `th | td`
- There are 5 types of position property in css:

  - **static** : it is default. It has no effect of top, bottom, left or right property.
  - **relative** : setting the top, bottom, ledt and right properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
  - **fixed**: an element with fixed positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled, The top, bottom, right, left properties are used to position the element.
  - **absolute**
  - **sticky**

- **`transform`**: We can transform the following things
  - `translate()`: though the element is translated from it's original position, but the space it occupied does not given to any other element. But the element is out of the origin document flow.
  - `rotate(angle)`: rotate the element by the given degree. Positive degree will move the element clockwise. Negative degree will move the element counter-clockwise.
  - `scale(W,H)`: scale increase the element by the given values of W and H. When scale up, the element is out of the document flow. But when the scale down, the element take the original size in the wrapper container.
  - `skew(x-angle, y-angle)` : skew the element by given degree in X and Y axis
  - `scaleX(W)`
  - `scaleY(H)`
  - `skewX(x-angle)`
  - `skewY(y-angle)`
  - `matrix(scaleX(), skewY(), skewX(), scaleY(),translateX()), translateY()`
- `tooltip`
  ```css
  position: absolute;
  left: 105%; // 105% means more than it's width
  top: -5px; // adjust the tooltip text with the container text
  ```
