const videoCardContainer = document.querySelector('.video-container');



let api_key = "AIzaSyC_c__X8P9Wy0CzPItVw8ulgi3xGJkKp4I";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?"
// now we use fetch function to make the request
//now we use URLSearchParams so that we can add parameters after the link(matlab k jo kai search karvu  hoi toh search_query hoi ne)

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    // setting part to snippet so that we can get video related data
    chart: 'mostPopular',

    // chart so that we can fetch most popular videos

    maxResults: 50,
    // have jetla videos joita hoi etli value lakhi devani ahiya
    // this is set ot 1 so that we can understand the Data Structure easliy


    regionCode: 'IN'

    // data kaya region maathi fetch kariye che ena maate
}))

    .then(res => res.json())
    .then(data => {

        //So, calling res.json() on a response object will convert the JSON-formatted response body 
        // into a JavaScript object that can be manipulated in code.
        // console.log(data);
        //have data ni ander channel icon image nai hatu so aapde have a fetch karisu
        data.items.forEach(item => {
            getChannelIcon(item);

        })
    })
    .catch(err => console.log(err));
// error handle karva maate catch block


const getChannelIcon = (video_data) => {

    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))

        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // have fari check karisu toh aaapne madi jashe channel icon url

            //Now make a new key "Channel Thumbnail" and store chnnel icon there
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            console.log(video_data);

            //have aapde j video box banavela ene have link karvanu che

            makeVideoCard(video_data);

        })

}// have aa function etla maate banavyu k channel naa icon ne alag thi fetch kari sakie

// Have aapde page reload kariye toh data load thato hase incept maa jaine joje
//ane jetlo pan data aapane joiye che a console naa snippet part maa che



const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}