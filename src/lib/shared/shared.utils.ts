export const MonthMaps = new Map<number, string>([
	[0, 'January'],
	[1, 'February'],
	[2, 'March'],
	[3, 'April'],
	[4, 'May'],
	[5, 'June'],
	[6, 'July'],
	[7, 'August'],
	[8, 'September'],
	[9, 'October'],
	[10, 'November'],
	[11, 'December']
]);

export function formatDate(date: Date): string {
	const dayOfMonth = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	return `${dayOfMonth} ${MonthMaps.get(monthIndex)} ${year}`;
}

export function formatIndex(index: number, prefix: string, zeroPad: number): string {
	return prefix + index.toString().padStart(zeroPad, '0');
}

export const strFormat = (str: string, ...args: any[]) =>
	args.reduce((s, v) => s.replace('%s', v), str);
