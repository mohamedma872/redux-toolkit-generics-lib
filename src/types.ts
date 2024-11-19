
// types.ts
export interface EntityState<T> {
    data: T[]; // Use T[] instead of Draft<T>[]
    loading: boolean;
    error: string | null;
  }
  