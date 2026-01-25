import Typography from "@/components/text/Typography";

const PageHeaderWrapper = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        {title && <Typography className="font-bold">{title}</Typography>}
        {children}
      </div>
    </div>
  );
};

export default PageHeaderWrapper;
