import { TypewriterOptions } from './typewriter.types';
export declare class Typewriter {
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
