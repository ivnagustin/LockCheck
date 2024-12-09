import { Observable } from '@nativescript/core';
import { LOCK_TYPES, LockType } from '../../models/lock-type.model';

export class LockTypeSelectorViewModel extends Observable {
    private _selectedType: LockType = LOCK_TYPES.HOME;

    constructor() {
        super();
    }

    get lockTypes(): LockType[] {
        return Object.values(LOCK_TYPES);
    }

    get selectedType(): LockType {
        return this._selectedType;
    }

    set selectedType(value: LockType) {
        if (this._selectedType !== value) {
            this._selectedType = value;
            this.notifyPropertyChange('selectedType', value);
        }
    }

    onSelectType(type: LockType): void {
        this.selectedType = type;
    }
}