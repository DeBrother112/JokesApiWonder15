let xhr = new XMLHttpRequest
xhr.open("localhost:")
xhr.onload = function () {
    console.log(xhr.response)
}
xhr.send()