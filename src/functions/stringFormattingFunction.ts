export enum EStringFormatting {
  FIRST = "first",
  TITLE = "title",
  UPPER = "upper",
  LOWER = "lower",
}

export const stringFormatting = (
  value: string,
  type:
    | EStringFormatting.FIRST
    | EStringFormatting.LOWER
    | EStringFormatting.TITLE
    | EStringFormatting.UPPER
) => {
  switch (type) {
    case EStringFormatting.FIRST:
      return value.charAt(0).toUpperCase() + value.slice(1);
    case EStringFormatting.TITLE:
      return value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    case EStringFormatting.UPPER:
      return value.toUpperCase();
    case EStringFormatting.LOWER:
      return value.toLowerCase();
    default:
      return value;
  }
};
