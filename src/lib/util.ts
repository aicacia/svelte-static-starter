import { hashOf } from '@aicacia/hash';
import { XorShiftRng } from '@aicacia/rand';

export function createInsecureID() {
	return Math.random().toString(36).substring(2);
}

export function waitMS(ms: number) {
	return new Promise<void>((resolve) => {
		setTimeout(() => resolve(), ms);
	});
}

const COLOR_OF_RNG = new XorShiftRng();

export function colorOf(value: unknown): string {
	COLOR_OF_RNG.setSeed(hashOf(value));
	return `rgb(${COLOR_OF_RNG.nextFloatInRange(64, 192)}, ${COLOR_OF_RNG.nextFloatInRange(
		64,
		255
	)}, ${COLOR_OF_RNG.nextFloatInRange(64, 192)})`;
}

export function clamp(x: number, min: number, max: number) {
	return Math.max(min, Math.min(max, x));
}
