# ✨ typewrite-text-effect

A lightweight, zero-dependency TypeScript library for creating typewriter-style text animations in the browser. Supports pause/resume, hover controls, random speed typing, and more!

## Features

- 🔁 Looping and backspacing animation  
- 🎯 Custom typing/deleting speed  
- 🕹️ Pause on hover  
- 🔀 Random speed typing effect  
- 🔁 Manual control (pause/resume/reset)  
- ⏱️ Delays and start timers  
- 🎨 Custom CSS class for styled text  
- 🖱️ Cursor animation support  
- ✅ Fully typed (TypeScript)

## Installation

Install my-project with npm

```bash
  npm install typewrite-text-effect
```
    
    
## Usage/Examples with all Options

```typescript
import { Typewriter } from 'typewrite-text-effect';

const writer = new Typewriter(document.getElementById('demo')!, {
  text: ['Welcome 👋', 'Typewriter effect in TypeScript!'],
  speed: 100,
  deleteSpeed: 50,
  delayBetween: 1000,
  pauseBetweenLoops: 2000,
  loop: true,
  cursor: true,
  cursorChar: '|',
  startDelay: 500,
  pauseOnHover: true,
  randomSpeed: true,
  autoStart: true,
  textStyleClass: 'type-text',
  onComplete: () => console.log('Finished!')
});

```


## 🧩 API Reference

#### Constructor

```http
new Typewriter(el: HTMLElement, options: TypewriterOptions)
```

#### TypewriterOptions Interface


```typescript
interface TypewriterOptions {
  text: string[];               // Text array to type
  speed?: number;               // Typing speed (ms)
  deleteSpeed?: number;         // Deleting speed (ms)
  delayBetween?: number;        // Delay before deleting
  pauseBetweenLoops?: number;   // Delay before next text
  loop?: boolean;               // Loop through texts
  cursor?: boolean;             // Show cursor
  cursorChar?: string;          // Cursor character
  startDelay?: number;          // Delay before starting
  pauseOnHover?: boolean;       // Pause on hover
  randomSpeed?: boolean;        // Randomized speed
  autoStart?: boolean;          // Auto start typing
  textStyleClass?: string;      // Class for styled text
  onComplete?: () => void;      // Callback on finish (if loop: false)
}

```



## 🔧 Methods

| Method       | Description                              |
|--------------|------------------------------------------|
| `start()`    | Start the typewriter effect              |
| `pause()`    | Pause the typing                         |
| `resume()`   | Resume from paused state                 |
| `stop()`     | Stop completely and clear timeouts       |
| `reset()`    | Reset typing state to initial            |
| `updateText()` | Update text array dynamically         |
| `isRunning()` | Returns whether typing is currently active |
| `destroy()`  | Cleanup DOM, remove listeners, etc.      |


## 🖋️ Cursor Blink Animation (CSS)

To enable the blinking cursor effect, include the following CSS(Optional):

```css
.typewriter-cursor {
  display: inline-block;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
```

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [Rajat Singh](https://github.com/RajatSinghrs)


## Contributing

Contributions are always welcome!
Please adhere to this project's `code of conduct`.

---


- ![typescript](https://img.shields.io/badge/typed-TypeScript-blue)

