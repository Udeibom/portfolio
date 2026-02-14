type SkillGroupProps = {
  title: string;
  description: string;
  skills: string[];
};

export default function SkillGroup({
  title,
  description,
  skills,
}: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl p-6 transition hover:border-indigo-500/40">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm text-neutral-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
