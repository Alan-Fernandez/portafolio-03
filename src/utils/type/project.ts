export interface ImageObj {
  id: number;
  img: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: ImageObj[];
  link: string;
  category: string;
  github?: string;
}
