export interface EntityState<T> {
    data: T[];
    loading: boolean;
    error: string | null;
}
