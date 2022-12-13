/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const id = url.searchParams.get('id');

	if (id) {
		// console.log(id);
		const res = await fetch(`https://diskuploader.entertainvideo.com/v1/file/cdnurl?param=${id}`);
		// const item = await res.text();
		const item = await res.json();

		// const obj = JSON.stringify(item);

		const obj = item;

		return { obj };
	} 
    else {
        const obj = {status: "erroe"};

		return { obj };
	}
}
