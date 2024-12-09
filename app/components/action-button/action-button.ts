import { Observable } from '@nativescript/core';

export class ActionButtonViewModel extends Observable {
    constructor(
        private text: string,
        private className: string = 'main-button -primary',
        private onTap: () => void
    ) {
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