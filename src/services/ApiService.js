export const ApiService = {
    getData: async function(url){
        return await fetch(url).then(async (data) => {
            if (data.ok) {
                return {status: data.status, data: await data.json()}
            }else {
                return {status: data.status, data: null};
            }
        }).catch(e => {
            return {status: e, data: null};
        })
    }
}

