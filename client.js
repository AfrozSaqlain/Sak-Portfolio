import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'n2x4qif3',
    dataset: 'production',// or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
    API_version: '2021-03-25'
})
