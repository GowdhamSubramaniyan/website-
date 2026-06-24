export type Stat = {
  value: string;
  label: string;
};

/** A single proof metric — large value + label. */
export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
      <p className="text-4xl font-bold leading-none text-teal sm:text-5xl">
        {stat.value}
      </p>
      <p className="mt-3 text-sm font-medium text-ink/70">{stat.label}</p>
    </div>
  );
}
