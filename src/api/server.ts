let token = 'a72358eee559938b6c5d601fa23a17ad4f20523ffa0f2241'

export const server_calls = {
    get: async () => {
       const response = await fetch(`https://lime-different-pan.glitch.me/profile`,
            {
                method: 'GET',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
            });
    
            if (!response.ok){
                throw new Error('Failed to fetch data from the server')
            }
    
            return await response.json()
        },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://lime-different-pan.glitch.me/profile`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer ${token}',
                },
                body: JSON.stringify(data)
            })
    
            if (!response.ok) {
                throw new Error('Failed to create new data on the server')
            }
    
            return await response.json()
        },
    
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://lime-different-pan.glitch.me/${id}`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer ${token}',
                },
                body: JSON.stringify(data)
            })
    
            if (!response.ok){
                throw new Error('Failed to update data on server')
            }
    
            return await response.json()
        },
    
    delete: async (id:string) => {
            const response = await fetch(`https://lime-different-pan.glitch.me/${id}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
    
            if (!response.ok){
                throw new Error('Failed to delete data on server')
            }
    
            return;
        },
    }