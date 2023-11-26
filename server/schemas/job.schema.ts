import { object, string, TypeOf, z } from 'zod';

export const postJobInputSchema = object({
    body: object({
        title: string({
            required_error: 'Title is required',
        }),
        description: string({
            required_error: 'Description is required',
        }),
        location: string({
            required_error: 'Location is required',
        }),
        position: string({
            required_error: 'Position is required',
        }),
        contract: string({
            required_error: 'Contract information is required'
        })

    }),
    
})


export type createJobPostInput = TypeOf<typeof postJobInputSchema>["body"];