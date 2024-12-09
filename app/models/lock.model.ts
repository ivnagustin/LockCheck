export interface Lock {
    id: number;
    type: string;
    timestamp: Date;
    isLocked: boolean;
}