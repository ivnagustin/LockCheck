import { Observable } from '@nativescript/core';
import { getAllRecords, deleteRecord } from '../../data/database';
import { formatDate } from '../../utils/date-formatter';

export class HistoryViewModel extends Observable {
    private _records: any[] = [];

    constructor() {
        super();
        this.loadRecords();
    }

    getIconPathForType(type: string): string {
        switch (type) {
            case 'Casa': return '~/images/home.png';
            case 'Coche': return '~/images/car.png';
            case 'Oficina': return '~/images/office.png';
            default: return '~/images/lock.png';
        }
    }

    async loadRecords() {
        const records = await getAllRecords();
        this.records = records.map(record => ({
            ...record,
            formattedDate: formatDate(record.timestamp),
            iconPath: this.getIconPathForType(record.type),
            estado: record.isLocked ? 'Cerrado' : 'Abierto'
        }));
    }

    get records(): any[] {
        return this._records;
    }

    set records(value: any[]) {
        if (this._records !== value) {
            this._records = value;
            this.notifyPropertyChange('records', value);
        }
    }

    async onDeleteRecord(args: any) {
        const record = args.object.bindingContext;
        if (record.id) {
            await deleteRecord(record.id);
            await this.loadRecords();
        }
    }
}