import { Observable } from '@nativescript/core';
import { LockRecord } from '../../models/lock-record.model';
import { formatDate } from '../../utils/date-formatter';

export class RecordItemViewModel extends Observable {
    constructor(private record: LockRecord) {
        super();
    }

    get formattedDate(): string {
        return formatDate(this.record.timestamp);
    }

    get statusClass(): string {
        return this.record.isLocked ? 'status-badge-green' : 'status-badge-red';
    }

    get statusText(): string {
        return this.record.isLocked ? 'Cerrado' : 'Abierto';
    }
}