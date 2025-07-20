export async function handle({ event, resolve }) {
	// console.log('Handling request for:', event.url.pathname);
	return resolve(event);
}
