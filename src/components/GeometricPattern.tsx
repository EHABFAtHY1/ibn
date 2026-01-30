export function GeometricPattern({ position = 'top-right' }: { position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }) {
  const positionClasses = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0 scale-x-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-y-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-x-[-1] scale-y-[-1]'
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-64 h-64 opacity-10 pointer-events-none`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* الأنماط الهندسية المثلثة */}
        {Array.from({ length: 5 }).map((_, row) => (
          Array.from({ length: 5 }).map((_, col) => (
            <polygon
              key={`${row}-${col}`}
              points={`${col * 40},${row * 40} ${col * 40 + 40},${row * 40} ${col * 40 + 20},${row * 40 + 40}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-60 text-primary"
            />
          ))
        ))}
      </svg>
    </div>
  );
}

export function DiamondDivider() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary" />
      <div className="mx-4">
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary">
          <polygon points="8,0 16,8 8,16 0,8" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary" />
    </div>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative inline-block">
      {/* الشريط الجانبي الذهبي */}
      <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-[#d4b87c] to-primary" />
      <div className="pr-8">
        <h2 className="text-4xl lg:text-5xl text-primary">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-2 text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}