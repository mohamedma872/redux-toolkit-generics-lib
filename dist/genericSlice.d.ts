import { EntityState } from './types';
export declare function createGenericSlice<T>(name: string, fetchFunction: () => Promise<T[]>): {
    reducer: import("redux").Reducer<EntityState<T>>;
    actions: {
        fetchEntities: import("@reduxjs/toolkit").AsyncThunk<T[], void, {
            state?: unknown;
            dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }>;
    };
};
