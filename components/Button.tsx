import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] text-white animate-gradient rounded-lg px-6 py-3 font-medium transition hover:scale-[1.02]",
    secondary:
      "border border-neutral-700 text-neutral-200 hover:bg-neutral-800",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
