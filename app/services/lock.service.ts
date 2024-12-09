import { Observable } from '@nativescript/core';
import { Lock } from '../models/lock.model';
import { LOCK_TYPES } from '../utils/constants';

class LockServiceClass extends Observable {
    private locks: Lock[] = [];

    addLock(type: string): void {
        const lock: Lock = {
            id: Date.now(),
            type,
            timestamp: new Date(),
            isLocked: true
        };
        this.locks.unshift(lock);
        this.notifyPropertyChange('locks', this.locks);
    }

    getLocks(): Lock[] {
        return [...this.locks];
    }

    getLockTypeInfo(type: string) {
        const lockType = Object.values(LOCK_TYPES).find(t => t.id === type);
        return lockType || { id: type, name: type, emoji: '🔒' };
    }
}

export const LockService = new LockServiceClass();