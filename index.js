let shareButton=document.getElementById("simpleshare");
let result=document.getElementById("result");

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
      return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
    return "unknown";
  }
function Aarogya() {
    let os = getMobileOperatingSystem();
    if (os == "Android") {
      window.location.href = "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN&gl=US";
    } else if (os == "iOS") {
      window.location.href = "https://apps.apple.com/in/app/aarogyasetu/id1505825357";
    } else if (os == "Windows Phone") {
      window.location.href = "https://www.mygov.in/aarogya-setu-app/";
    } else {
      window.open("https://www.mygov.in/aarogya-setu-app/", "_blank");
    }
}
function Umang() {
    let os = getMobileOperatingSystem();
    if (os == "Android") {
      window.location.href = "https://play.google.com/store/apps/details?id=in.gov.umang.negd.g2c";
    } else if (os == "iOS") {
      window.location.href = "https://apps.apple.com/in/app/umang/id1236448857";
    } else if (os == "Windows Phone") {
      window.location.href = "https://web.umang.gov.in/landing/";
    } else {
      window.open("https://web.umang.gov.in/landing/","_blank");
    }
}
function Cowin() {
    let os = getMobileOperatingSystem();
    if (os == "Android") {
      window.location.href = "https://play.google.com/store/apps/details?id=com.cowinapp.app&hl=en_IN&gl=US";
    } else if (os == "iOS") {
      window.location.href = "https://apps.apple.com/in/app/aarogyasetu/id1505825357";
    } else if (os == "Windows Phone") {
      window.location.href = "https://www.cowin.gov.in/home";
    } else {
      window.open("https://www.cowin.gov.in/home", "_blank");
    }
}

function whatsappShare(image) {

}

function mobileShare() {
  if ( navigator.share ) {

    // share button click handler
    document.getElementById('simpleshare').addEventListener('click', () => {
  
      // share page information
      navigator.share({
        url: 'https://khatabook-assets.s3.amazonaws.com/static/images/index/logo.jpg',
        title: 'Title',
        text: 'Text.'
      });
  
    });
  
  }
}

function mobileShare2() {
    
//     const share = async function(shareimg, shareurl, sharetitle, sharetext) {
//     try {
//       const response = await fetch(shareimg);
//       const blob = await response.blob();
//       const file = new File([blob], 'rick.jpg', {type: blob.type});

//       await navigator.share({
//         url: shareurl,
//         title: sharetitle,
//         text: sharetext,
//         files: [file]
//       });
//     } catch (err) {
//       console.log(err.name, err.message);
//     }
//   };
    fetch("https://khatabook-assets.s3.amazonaws.com/static/images/index/logo.jpg")
  .then(function(response) {
    return response.blob()
  })
  .then(function(blob) {

    var file = new File([blob], "https://khatabook-assets.s3.amazonaws.com/static/images/index/logo.jpg", {type: 'blob.type'});
    var filesArray = [file];

    if(navigator.canShare && navigator.canShare({ files: filesArray })) {
      navigator.share({
        text: 'Hey',
        files: filesArray,
        title: 'No Title',
        url: 'https://sumitj0695.github.io/Covid/'
      });
          .then(() => console.log("Share was successful."))
          .catch((error) => console.log("Sharing failed", error));
    }
       else {
        console.log("Your system doesn't support sharing files.");
      }
  }
}
        
const shareNow = async () => {
  let imageResponse = await window.fetch('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
  let imageBuffer = await imageResponse.arrayBuffer();
  let fileArray = [new File([imageBuffer], "File Name", {
    type: "image/png",
    lastModified: Date.now()
  })];
  if(window.navigator && window.navigator.canShare && window.navigator.canShare({files: fileArray})){
    navigator.share({
      files: fileArray,
      title: 'Title',
      text: 'Text to show'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  }
}
