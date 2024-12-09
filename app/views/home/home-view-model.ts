import { Observable } from '@nativescript/core';
import { LockService } from '../../services/lock.service';
import { formatDate } from '../../utils/date-formatter';
import { Lock } from '../../models/lock.model';

interface LockViewModel extends Lock {
    typeEmoji: string;
    typeName: string;
    formattedDate: string;
}

export class HomeViewModel extends Observable {
    private _selectedType: string = 'home';
    private _locks: LockViewModel[] = [];

    constructor() {
        super();
        this.updateLocks();
    }

    get selectedType(): string {
        return this._selectedType;
    }

    get locks(): LockViewModel[] {
        return this._locks;
    }

    onSelectType(args: any) {
        const button = args.object;
        this._selectedType = button.get('data-type');
        this.notifyPropertyChange('selectedType', this._selectedType);
    }

    onLock() {
        LockService.addLock(this._selectedType);
        this.updateLocks();
    }

    private updateLocks() {
        const locks = LockService.getLocks();
        this._locks = locks.map(lock => {
            const typeInfo = LockService.getLockTypeInfo(lock.type);
            return {
                ...lock,
                typeEmoji: typeInfo.emoji,
                typeName: typeInfo.name,
                formattedDate: formatDate(lock.timestamp)
            };
        });
        this.notifyPropertyChange('locks', this._locks);
    }
}