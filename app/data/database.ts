import { knownFolders } from '@nativescript/core';

export interface LockRecord {
    id?: number;
    type: string;
    timestamp: number;
    isLocked: boolean;
}

// Simulación de base de datos en memoria
let records: LockRecord[] = [];
let nextId = 1;

export async function initializeDatabase(): Promise<void> {
    records = [];
    return Promise.resolve();
}

export async function addLockRecord(record: LockRecord): Promise<void> {
    const newRecord = { ...record, id: nextId++ };
    records.unshift(newRecord);
    return Promise.resolve();
}

export async function getLastLockRecord(): Promise<LockRecord | null> {
    return Promise.resolve(records[0] || null);
}

export async function getAllRecords(): Promise<LockRecord[]> {
    return Promise.resolve([...records]);
}

export async function deleteRecord(id: number): Promise<void> {
    records = records.filter(record => record.id !== id);
    return Promise.resolve();
}