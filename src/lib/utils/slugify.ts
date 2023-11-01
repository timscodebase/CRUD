// export a function that takes in a string and returns a slugified version of it
export function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
}
