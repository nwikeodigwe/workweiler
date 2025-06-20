export interface JobFormInputs {
  position: string;
  company: string;
  description: string;
  employment: string;
  industry: string;
  tags: string[];
  locations: string[];
  minSalary: string;
  maxSalary: string;
  benefits: string[];
  how: string;
  url: string;
  email: string;
  logo: FileList | null;
}
