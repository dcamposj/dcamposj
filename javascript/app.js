/*
    dump img url to textfile: // Select all preview images on your CodePen profile page

        const previewImages = document.querySelectorAll('img[src*="shots.codepen.io"]');
        const imageUrls = Array.from(previewImages).map(img => img.src);
        console.log(imageUrls);
        const blob = new Blob([imageUrls.join('\n')], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'image-urls.txt';  // Name of the text file to be downloaded
        a.click();
        URL.revokeObjectURL(a.href);

*/

/* 
https://codepen.io/diego_caji/pen/bGPREzy ->    https://shots.codepen.io/username/pen/bGPREzy-1280.webp?version=1731735687
https://codepen.io/diego_caji/pen/MWRLyVa ->    https://shots.codepen.io/username/pen/MWRLyVa-512.webp?version=1731735567
                                                https://shots.codepen.io/username/pen/bGPREzy-1280.jpg?version=1731735687
                                                https://shots.codepen.io/username/pen/MWRLyVa-512.jpg?version=1731735567
                                                https://shots.codepen.io/username/pen/mdvgBVX-512.jpg?version=1702682849
                                                https://shots.codepen.io/username/pen/OJGjXMj-512.jpg?version=1713920595
                                                https://shots.codepen.io/username/pen/BabBRPd-512.jpg?version=1707196225
                                                https://shots.codepen.io/username/pen/yLrBPbg-512.jpg?version=1711837096
                                                https://shots.codepen.io/username/pen/vYbVJyQ-512.jpg?version=1724215999
*/