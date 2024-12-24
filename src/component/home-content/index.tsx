import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  id: string;
};

const HomeContent: React.FC<Props> = ({ children, id }: Props) => {
  return (
    <div id={id} className="container m-auto min-h-dvh w-full flex flex-col gap-6 pt-[50px]">
      {children}
    </div>
  );
};

export default HomeContent;
