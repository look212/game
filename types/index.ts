export interface IMainInfo {
  type: string | null;
  title: string;
  description?: string;
  subject?: ISubjectTypes[];
}

export interface IDelayTime {
  delay: number;
  display_delay: string;
}

export interface ISubjectTypes {
  value: string;
  label: string;
}

export interface IQuestionNumberTypes {
  value: number;
  label: string;
}
