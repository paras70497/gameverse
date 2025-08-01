export enum GameCategory {
  Arcade = 'Arcade',
  Puzzle = 'Puzzle',
  Platformer = 'Platformer',
  Survival = 'Survival',
}

export interface Game {
  id: number;
  title: string;
  description: string;
  category: GameCategory;
  rating: number;
  imageUrl: string;
  path?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isMultiplayer?: boolean;
}
