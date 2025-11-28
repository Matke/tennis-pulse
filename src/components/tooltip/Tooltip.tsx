import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

export type Tooltip = {
  id: string;
  content: string;
  delay?: number;
  place?: "top" | "right" | "bottom" | "left";
  variant?: "dark" | "light" | "success" | "warning" | "error" | "info";
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
};

const Tooltip = ({
  delay = 500,
  children,
  content,
  variant,
  place = "top",
  id,
}: Tooltip) => {
  // cloneElement must be replaced use not common
  // render prop or pass data-tooltip-id to components
  // data-tooltip-id to component is better solution
  // must be cloned because parent div from tooltip will mess up design for all the component that incorporate Tooltip inside
  // const wrappedChild = React.cloneElement(children, {
  //   "data-tooltip-id": id,
  // });

  return (
    <>
      {children}
      <ReactTooltip
        id={id}
        style={{
          // color: "#222", controlled with variant
          // backgroundColor: "var(--color-crimson-carrot-400)", controlled with variant
          padding: "6px",
          maxWidth: "250px", // to wrap long text
          whiteSpace: "normal",
          wordWrap: "break-word",
          textAlign: "justify",
        }}
        variant={variant || "dark"}
        content={content}
        delayShow={delay}
        place={place || "top"}
      />
    </>
  );
};

export default Tooltip;
