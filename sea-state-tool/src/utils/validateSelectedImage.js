export function validateSelectedImage(input) {

    // Validate file format (allowed types: .png and .jpeg)
    if (input.type ===  "image/png" || input.type === "image/jpeg") {
        return true
    } else {
        return false
    }
}



export default validateSelectedImage