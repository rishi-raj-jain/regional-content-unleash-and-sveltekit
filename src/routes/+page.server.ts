import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ request }) => {
    const region: string = request.headers.get('x-vercel-ip-country') || "US"
    return { region }
}