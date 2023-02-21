export function Calculate({nums}) {
    return (
        nums === undefined ? 'no' : <h1>{nums.reduce((prev, next) => {
            return prev + next        })}</h1>
    )
}