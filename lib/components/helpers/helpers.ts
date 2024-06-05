type CssClass = string | undefined;
type CssClasses = CssClass[];

type CleanUpClasses = (classes: CssClasses) => string;

export const getCleanUpClasses: CleanUpClasses = (classes) =>
  classes
    .filter(
      (cssClass) => cssClass?.trim() !== '' && cssClass?.trim() !== undefined
    )
    .toString()
    .replace(/,/g, ' ')
    .trim();
