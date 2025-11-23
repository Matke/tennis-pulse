export type VariantType =
  | "title" // h1
  | "subtitle" // h2
  | "paragraph" // h4
  | "paragraph-medium" // h3
  | "paragraph-small" // p
  | "label" // div
  | "label-small"; // span

export type TypographyProps = {
  variant?: VariantType;
  as?: React.ElementType; // special prop for renaming html tags
  color?: string;
  className?: string;
  children?: React.ReactNode;
};

const Typography = ({
  variant = "paragraph",
  color,
  className,
  as: Component = "div",
  children,
}: TypographyProps) => {
  const typographyVariant = (variant: VariantType) => {
    switch (variant) {
      case "title":
        return ` text-3xl ${color || "text-tp-typography"}`;
      case "subtitle":
        return ` text-2xl ${color || "text-tp-typography"}`;
      case "paragraph":
        return ` text-base ${color || "text-tp-typography"}`;
      case "paragraph-medium":
        return ` text-xl ${color || "text-tp-typography"}`;
      case "paragraph-small":
        return ` text-lg ${color || "text-tp-typography"}`;
      case "label":
        return ` text-sm ${color || "text-tp-typography"}`;
      case "label-small":
        return ` text-xs ${color || "text-tp-typography"}`;
      default:
        return "";
    }
  };

  return (
    // component will become what you passed as "as" prop, for example h1,h2 and etc
    <Component className={`${typographyVariant(variant)} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
