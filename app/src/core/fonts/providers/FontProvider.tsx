"use client";

import type { ReactNode } from "react";

import { monocraft } from "@/src/core/fonts/constants/fonts";

type FontProviderProps = {
  children: ReactNode;
};

export function FontProvider({ children }: FontProviderProps) {
  return <div className={`${monocraft.variable}`}>{children}</div>;
}
