const angleInRadians = (angle: number) => (angle / 360.0) * (2 * Math.PI);

export const sin = (angle: number) => Math.sin(angleInRadians(angle));
export const cos = (angle: number) => Math.cos(angleInRadians(angle));
