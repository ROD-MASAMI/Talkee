import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
}
const Container = (props: Props) => {
  const { className, children } = props;
  return (
    <div
      className={classNames(
        " mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
