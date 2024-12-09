import * as Vibrate from 'nativescript-vibrate';

export class VibrationService {
    private static instance: VibrationService;
    private vibrator: Vibrate.Vibrate;

    private constructor() {
        this.vibrator = new Vibrate.Vibrate();
    }

    public static getInstance(): VibrationService {
        if (!VibrationService.instance) {
            VibrationService.instance = new VibrationService();
        }
        return VibrationService.instance;
    }

    public vibrate(duration: number = 100): void {
        this.vibrator.vibrate(duration);
    }
}