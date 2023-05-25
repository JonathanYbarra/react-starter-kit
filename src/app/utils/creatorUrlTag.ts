
export const createGetItemQuery = (url: string, params: { id: string | number }, method: string = 'GET') => {
    const { id, ...rest } = params;
    return {
        url: `${url}/${id}`, method, params: rest
    }
}

export const createProvidesTags = <R>(result?: R, tag?: string) =>
    Array.isArray(result)
        ? [
            ...result.map((item) => ({
                type: tag,
                id: item.id,
            })),

            { type: tag, id: 'LIST' },
        ]
        : [{ type: tag, id: 'LIST' }]

