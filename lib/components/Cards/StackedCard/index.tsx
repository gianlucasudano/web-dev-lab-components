import styles from "./styles.module.css";
import { getCleanUpClasses } from '../../helpers/helpers';

type CardVariant = "outlined" | "elevated" | "filled";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: CardVariant;
}

export function StackedCard({ variant, className, ...restProps }: CardProps) {
  const variantClassName = `${variant}Card`;

  const cssClasses = getCleanUpClasses([styles[variantClassName], className]);

  return <div className={cssClasses} {...restProps} />;
}
