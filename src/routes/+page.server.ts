import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ request }) => {
    // get the vercel IP country header containing 2 letter string for that country
    const region: string = request.headers.get('x-vercel-ip-country') || "US"
    return { region }
}
