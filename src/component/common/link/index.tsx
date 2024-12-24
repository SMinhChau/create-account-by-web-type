import { ReactNode } from "react";

type Props = {
  target?: "self" | "_blank" | "_parent" | "_top";
  children?: ReactNode;
  href?: string;
};

const Link: React.FC<Props> = ({ target, children, href }: Props) => {
  return (
    <a target={target ?? "_blank"} href={href ?? "#"}>
      {children}
    </a>
  );
};

export default Link;
