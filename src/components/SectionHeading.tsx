import Reveal from './Reveal';

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-10">
        <p className="eyebrow mb-3">
          {index} <span className="text-faint">{'//'}</span> {eyebrow}
        </p>
        <h2 className="section-title">{title}</h2>
      </div>
    </Reveal>
  );
}
