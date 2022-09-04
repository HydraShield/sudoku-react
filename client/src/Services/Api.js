export const REST  = {
    getBoard: () => {
        return fetch(`http://localhost:3030/puzzle`);
    },

    solveBoard: (grid) => {
        const data = {
            board: grid
        };
        return fetch(`http://localhost:3030/solve`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    },

    validateBoard: (grid) => {
        const data = {
            board: grid
        };
        return fetch(`http://localhost:3030/validate`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }
}