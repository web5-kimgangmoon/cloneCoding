import clsx from "clsx";

export const CenterContainer = ({
  children,
  className,
  className_wrapper,
}: {
  children: React.ReactNode;
  className?: string;
  className_wrapper?: string;
}) => {
  return (
    <div className={clsx("flex justify-center w-full", className)}>
      <div
        className={clsx(
          "flex flex-col justify-center w-[90%] xl:w-[1200px]",
          className_wrapper
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const CenterContainer_article = ({
  children,
  className,
  className_wrapper,
}: {
  children: React.ReactNode;
  className?: string;
  className_wrapper?: string;
}) => {
  return (
    <article className={clsx("flex justify-center w-full", className)}>
      <div
        className={clsx(
          "flex flex-col justify-center w-[90%] xl:w-[1200px]",
          className_wrapper
        )}
      >
        {children}
      </div>
    </article>
  );
};
