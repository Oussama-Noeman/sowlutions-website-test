export async function fetching(endpoint:string){
    try {
        const response = fetch(endpoint);
        if(!(await response).ok){
            throw new Error(`HTTP error! status: ${(await response).status}`)
        }
        return (await response).json();
    } catch (error) {
        console.error("Error fetching :", error);
        return null;
    }
}