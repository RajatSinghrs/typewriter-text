
# ✨ Typewriter Text Angular Directive

> 🧩 A lightweight Angular directive wrapper for [typewriter-text-effect](https://www.npmjs.com/package/typewriter-text-effect), providing a clean, reactive, and customizable typewriter animation for any DOM element.

📦 Published as: [typewriter-text-angular](https://www.npmjs.com/package/typewriter-text-angular)

# Typewriter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.


## Installation

Install both the **core library** and the **Angular wrapper** **:**

```bash
npm install typewriter-text-effect
npm install typewriter-text-angular

```
    
    
## 🚀 Getting Started

#### 1. Import the Module :
In your AppModule (or any feature module):

```typescript
import { TypewriterModule } from 'typewriter-text-angular';

@NgModule({
  imports: [TypewriterModule]
})
export class AppModule {}

```

#### 2. Use the Directive in HTML :

```html
<div
  [typewriter]="['Hello World!', 'From Angular 🅰️']"
  [speed]="100"
  [loop]="true"
  [pauseOnHover]="true"
  [textStyleClass]="'my-custom-text-style'"
></div>

```

## ⚙️ Input Options

| Input               | Type               | Default     | Description                                             |
|--------------------|--------------------|-------------|---------------------------------------------------------|
| `typewriter`        | `string \| string[]` | `''`        | Text or array of strings to animate                     |
| `speed`             | `number`           | `100`       | Typing speed in milliseconds                            |
| `deleteSpeed`       | `number`           | `50`        | Speed at which text is deleted                          |
| `delayBetween`      | `number`           | `1000`      | Delay after typing before deletion                      |
| `pauseBetweenLoops` | `number`           | `2000`      | Pause duration between loops                            |
| `loop`              | `boolean`          | `true`      | Whether to loop through text continuously               |
| `cursor`            | `boolean`          | `true`      | Show a blinking cursor                                  |
| `cursorChar`        | `string`           | `'`         | Character used as the cursor                            |
| `startDelay`        | `number`           | `0`         | Delay before typing starts                              |
| `pauseOnHover`      | `boolean`          | `false`     | Pause typing when mouse hovers over text               |
| `randomSpeed`       | `boolean`          | `false`     | Add variation to typing speed                           |
| `autoStart`         | `boolean`          | `true`      | Automatically start typing on init                      |
| `textStyleClass`    | `string`           | `''`        | Optional CSS class to style the typed text              |


## 🧨 Destroy and Clean Up
When the component is destroyed, the directive automatically stops and cleans up the typewriter instance to avoid memory leaks.


## Related

🔗 Related Projects **:**

📦[typewriter-text-angular (this package)](https://www.npmjs.com/package/typewriter-text-angular)

✨[  typewriter-text-effect (core library)
](https://www.npmjs.com/package/typewriter-text-effect)


## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [Rajat Singh](https://github.com/RajatSinghrs)


## Contributing

Contributions are always welcome!
Please adhere to this project's `code of conduct`.

---


- ![typescript](https://img.shields.io/badge/typed-TypeScript-blue)

