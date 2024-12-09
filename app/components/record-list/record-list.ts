import { Observable } from '@nativescript/core';
import { LockRecord } from '../../models/lock-record.model';
import { formatDate } from '../../utils/date-formatter';
import { ICONS } from '../../utils/constants';

export class RecordListViewModel extends Observable {
    private _records: any[] = [];

    constructor(records: LockRecord[]) {
        super();
        this.updateRecords(records);
    }

    updateRecords(records: LockRecord[]): void {
        this._records = records.map(record => ({
            ...record,
            formattedDate: formatDate(record.timestamp),
            iconSrc: ICONS[record.type] || ICONS.DEFAULT,
            estado: record.isLocked ? 'Cerrado' : 'Abierto'
        }));
        this.notifyPropertyChange('records', this._records);
    }

    get records(): any[] {
        return this._records;
    }
}