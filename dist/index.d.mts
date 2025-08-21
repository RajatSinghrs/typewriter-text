interface TypewriterOptions {
    text: string[];
    speed?: number;
    deleteSpeed?: number;
    delayBetween?: number;
    pauseBetweenLoops?: number;
    loop?: boolean;
    cursor?: boolean;
    cursorChar?: string;
    startDelay?: number;
    pauseOnHover?: boolean;
    randomSpeed?: boolean;
    autoStart?: boolean;
    textStyleClass?: string;
    onComplete?: () => void;
}

declare class Typewriter {
    private el;
    private options;
    private index;
    private charIndex;
    private isDeleting;
    private loopTimeout;
    private isPaused;
    private isStopped;
    private status;
    constructor(el: HTMLElement, options: TypewriterOptions);
    start(): void;
    private type;
    private getRandomSpeed;
    pause: () => void;
    resume: () => void;
    stop(): void;
    reset(): void;
    updateText(newText: string[]): void;
    isRunning(): boolean;
    destroy(): void;
}

export { Typewriter, type TypewriterOptions, Typewriter as default };
