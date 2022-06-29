function renderImage(content) {
    document.getElementById('content').innerHTML = content
}

async function getGifUrl() {
    let tag = document.getElementById('tag').value
    let url =
        'https://api.giphy.com/v1/gifs/random?api_key=eBCj0HGkG20QUOWBrPpY99DXGDAUXVhw&tag=' +
        tag
    let result = await fetch(url)

    let jsonResult = await result.json()
    return jsonResult.data
}

document.getElementById('getGif').addEventListener('click', async () => {
    console.log(1213)
    renderImage('<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>')
    var imageData = await getGifUrl()
    console.log(imageData.images)
    renderImage(
        '<a href="' +
            imageData.url +
            '" target="_blank"><img class="image img-responsive img-rounded" src="' +
            imageData.images.fixed_height.url +
            '" /></a>'
    )
})
