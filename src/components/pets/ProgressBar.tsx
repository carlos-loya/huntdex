import { cn } from "@/lib/utils";

interface ProgressBarProps {
  collected: number;
  total: number;
  className?: string;
}

export function ProgressBar({ collected, total, className }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((collected / total) * 100) : 0;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex-1">
        <div className="h-3 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <span className="text-sm font-semibold text-foreground">
        {collected}/{total}
      </span>
      <span className="text-sm text-muted-foreground">({percentage}%)</span>
    </div>
  );
}
