export interface LockType {
    id: string;
    name: string;
    iconClass: string;
}

export const LOCK_TYPES: Record<string, LockType> = {
    HOME: {
        id: 'home',
        name: 'Casa',
        iconClass: 'fas fa-home'
    },
    CAR: {
        id: 'car',
        name: 'Coche',
        iconClass: 'fas fa-car'
    },
    OFFICE: {
        id: 'office',
        name: 'Oficina',
        iconClass: 'fas fa-building'
    }
};