import { Observable } from '@nativescript/core';

export class LockButtonViewModel extends Observable {
    constructor(private text: string, private className: string, private onTap: () => void) {
        super();
    }

    get buttonText(): string {
        return this.text;
    }

    get buttonClass(): string {
        return this.className;
    }

    handleTap(): void {
        this.onTap();
    }
}