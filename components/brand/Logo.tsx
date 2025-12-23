type LogoMarkProps = {
  className?: string;
  title?: string;
};

export const LogoMark = ({
  className,
  title = "Capital Catalyst",
}: LogoMarkProps) => {
  const classes = className ? `h-11 w-11 ${className}` : "h-11 w-11";

  return (
    <svg
      viewBox="0 0 128 128"
      className={classes}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M90 22 L114 40 L90 58 L54 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54 40 L38 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 70 L62 88 L38 106 L14 88 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
