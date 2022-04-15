export interface IMainInfo {
  type: string | null;
  title: string;
  description?: string;
  subject?: ISimpleType[];
}

export interface ISimpleType {
  value: string | number | null | undefined;
  label: string;
}
