let token = 'b94ba27e0dfa8790bac3c78922a4bf401584ecb8a56d65d5'

export const server_calls = {
    get: async () => {
       const response = await fetch(`https://fantastic-diamond-risk.glitch.me/api/cars`,
            {
                method: 'GET',
                // mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                    // 'Access-Control-Allow-Origin': 'https://fantastic-diamond-risk.glitch.me',
                },
            });
    
            if (!response.ok){
                throw new Error('Failed to fetch data from the server')
            }
    
            return await response.json()
        },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://fantastic-diamond-risk.glitch.me/api/cars`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                    'Access-Control-Allow-Origin': 'https://fantastic-diamond-risk.glitch.me',
                    // 'Access-Control-Allow-Methods': GET, POST, DELETE,
                },
                body: JSON.stringify(data)
            })
    
            if (!response.ok) {
                throw new Error('Failed to create new data on the server')
            }
    
            return await response.json()
        },
    
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://fantastic-diamond-risk.glitch.me/api/cars/${id}`,
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
            const response = await fetch(`https://fantastic-diamond-risk.glitch.me/api/cars/${id}`,
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