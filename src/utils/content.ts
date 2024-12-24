export type ExperiencesType = {
  start_date: string;
  end_date: string;
  company_name: string;
  description: string;
};

export const MyExperiences = [
  {
    start_date: new Date('2023/09/01'),
    end_date: new Date(),
    company_name: 'Name 01',
    description:
      'The primary job involves software development. Utilizing technologies such as HTML, CSS, JavaScript (along with frameworks and libraries like React, Material UI, Styled Components, React Hook Form, etc.) to build website interfaces, alongside proposing optimizations for user experience.',
  },
  {
    start_date: new Date('2023/09/01'),
    end_date: new Date('2023/06/23'),
    company_name: 'Name 02',
    description:
      'The primary job involves software development. Utilizing technologies such as HTML, CSS, JavaScript (along with frameworks and libraries like React, Material UI, Styled Components, React Hook Form, etc.) to build website interfaces, alongside proposing optimizations for user experience.',
  },
];

export interface PropsTypeNotify {
  type: string;
  message?: string;
  duration?: number;
}
