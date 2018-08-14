例如一个 `border-1px` 的 `mixin`：

```css {11}
.border-1px(@color: #ccc, @radius: 2px, @style: solid, @border: border) {
  position: relative;

  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    @{border}: 1px @style @color;
    border-radius: @radius;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    @media (min-resolution: 2dppx) {
      width: 200%;
      height: 200%;
      border-radius: @radius * 2;
      transform: scale(0.5) translateZ(0);
    }

    @media (min-resolution: 3dppx) {
      width: 300%;
      height: 300%;
      border-radius: @radius * 3;
      transform: scale(0.333) translateZ(0);
    }
  }
}
```
