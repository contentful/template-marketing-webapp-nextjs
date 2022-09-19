import * as SpotifyTransformer from './spotify';
import * as TypeformTransformer from './typeform';
import * as YouTubeTransformer from './youtube';

interface Transformer {
  id: string;
  shouldTransform: (url: string) => boolean;
  effect?: (ref: React.RefObject<HTMLDivElement>, url: string) => void;
  getHTML: (url: string) => string;
}

export default [
  YouTubeTransformer,
  SpotifyTransformer,
  TypeformTransformer,
] as Transformer[];
