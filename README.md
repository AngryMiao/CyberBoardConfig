## [Live Demo](https://angrymiao.github.io/CyberBoardConfig/)

## Usage

### Direct `<script>` Include

```javascript
<script src="marquee.js"></script>
```

### Get frame with `getMarquee`

```javascript
const frame = getMarquee({
  frameRGB,
  speed: 1,
  background: "#000000",
  count: 48,
});
console.log(JSON.stringify(frame));
```

## Props

#### `frameRGB?: array`

The `frameRGB` property is the pattern you want to convert, it is an array of colors.

#### `speed?: number`

The `speed` property is index of speedArray, range 0 to 15. This array is the time interval of each frame, the unit is `ms`.

#### `background?: string`

The `background` property is the color to fill the blank.

#### `count?: number`

The `count` property is total number of frames.
