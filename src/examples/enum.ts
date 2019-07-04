enum Status {
    Uploading,
    Success,
    Failed,
}

console.log(Status.Uploading)

const test = 1
const getIndex = () => {
    return 3
}
enum Status1 {
    Uploading = test,
    Success = getIndex(),
    failed = 2,
}
