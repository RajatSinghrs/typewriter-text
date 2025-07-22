export interface TypewriterOptions {
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
