import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'n2x4qif3',
    dataset: 'production',
    useCdn: true
})

export default client