export interface TypewriterOptions {
    text: string[];
    speed?: number;
    deleteSpeed?: number;
    delayBetween?: number;
    loop?: boolean;
    cursor?: boolean;
    cursorChar?: string;
}
export declare class Typewriter {
    private el;
    private options;
    private index;
    private charIndex;
    private isDeleting;
    private loopTimeout;
    constructor(el: HTMLElement, options: TypewriterOptions);
    start(): void;
    private type;
    stop(): void;
}
