"use client";

export function LoadingTemplate() {
  return (
    <div
      className="
        flex min-h-screen items-center justify-center
        bg-background
      "
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex size-14 items-center justify-center">
          <div
            className="
              absolute inset-0
              animate-spin rounded-full
              border-4 border-primary/15
              border-t-primary
            "
          />

          <div
            className="
              size-3 rounded-full
              bg-primary
              shadow-lg shadow-primary/30
            "
          />
        </div>

        <span
          className="
            text-sm font-medium
            text-foreground-muted
          "
        >
          Carregando...
        </span>
      </div>
    </div>
  );
}
