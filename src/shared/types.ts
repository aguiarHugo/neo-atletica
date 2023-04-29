export enum SelectedPage {
  Home = 'home',
  Benefícios = 'benefícios',
  Aulas = 'aulas',
  Contato = 'contato'
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}