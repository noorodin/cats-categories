export interface ICategories {
  id: string;
  breeds: any;
  categories: ICategory[];
  height: number;
  url: string;
  width: number;
}

export interface ICategory {
  id: number;
  name: string;
}
