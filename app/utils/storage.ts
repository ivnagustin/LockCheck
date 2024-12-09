import { ApplicationSettings } from '@nativescript/core';

export class Storage {
    static set(key: string, value: any): void {
        ApplicationSettings.setString(key, JSON.stringify(value));
    }

    static get<T>(key: string, defaultValue: T): T {
        const value = ApplicationSettings.getString(key);
        return value ? JSON.parse(value) : defaultValue;
    }

    static remove(key: string): void {
        ApplicationSettings.remove(key);
    }
}