import { SiGithub } from "react-icons/si";

type ProjectCardProps = {
  title: string;
  problem: string;
  description: string;
  tech: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  problem,
  description,
  tech,
  href,
}: ProjectCardProps) {
  return (
    <div className="relative group rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">

      {/* GitHub Icon (hover reveal) */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-400 hover:text-white"
          aria-label="View source code"
        >
          <SiGithub size={18} />
        </a>
      )}

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm text-neutral-400">{problem}</p>

      <p className="mt-4 text-neutral-300">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* View Code Button */}
      {href && (
        <div className="mt-6">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 transition-colors duration-200 hover:bg-indigo-500/20 hover:text-white"
          >
            <SiGithub size={16} />
            View Code
          </a>
        </div>
      )}
    </div>
  );
}
