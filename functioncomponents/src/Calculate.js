export function Calculate({nums=0}) {
    return (
        <h1>{nums.reduce((prev, next) => {
            return prev + next
        })}</h1>
    )
}