export const LOCK_TYPES = {
    HOME: {
        id: 'home',
        name: 'Casa',
        emoji: '🏠'
    },
    CAR: {
        id: 'car',
        name: 'Coche',
        emoji: '🚗'
    },
    OFFICE: {
        id: 'office',
        name: 'Oficina',
        emoji: '🏢'
    }
} as const;

export const DEFAULT_LOCK = {
    emoji: '🔒'
};