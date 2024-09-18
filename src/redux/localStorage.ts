export const saveState = (state: {}) => {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem("state", serializedState)
    } catch (err){
        console.log("Failed to save state")
    }
}
