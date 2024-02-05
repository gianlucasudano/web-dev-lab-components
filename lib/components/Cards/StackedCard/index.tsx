import { useCallback, useState } from "react";

import styles from "./styles.module.css";

type CardVariant = "outlined" | "elevated" | "filled";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: CardVariant;
}

export function StackedCard({ variant, ...restProps }: CardProps) {
  const { draggable } = restProps;
  const [dragged, setDragged] = useState(false);

  const handleDraggable = useCallback((event: React.SyntheticEvent) => {
    setDragged(event.type === "dragstart" ? true : false);
  }, []);

  const variantClassName = `${variant}Card`;
  const draggableClassName = draggable ? "draggable" : "";
  const draggedClassName = dragged ? "draggedCard" : "";
  const cssClasses = [
    styles[variantClassName],
    styles[draggableClassName],
    styles[draggedClassName],
  ]
    .filter((className) => className !== "" && className !== undefined)
    .toString()
    .replace(/,/g, " ")
    .trim();

  return (
    <div
      className={cssClasses}
      onDragStart={handleDraggable}
      onDragEnd={handleDraggable}
      {...restProps}
    />
  );
}
