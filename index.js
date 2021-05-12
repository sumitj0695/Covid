let shareButton=document.getElementById("simpleshare");
let result=document.getElementById("result");
// console.log(shareButton);
// shareButton.addEventListener("click",onShare)
// function onShare() {
//   // ...
//   if (navigator.share) {
//   //Your code here
//   result.innerHTML="supported !!";
//   } else {
//     alert(`Not supported !!`);
//     result.innerHTML="Not supported !!";
//   }
//  }



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
  fetch(
    "https://khatabook-assets.s3.amazonaws.com/static/images/index/logo.jpg"
  )
    .then(function (response) {
      return response.blob();
    })
    .then(function (blob) {
      var file = new File(
        [blob],
        "https://khatabook-assets.s3.amazonaws.com/static/images/index/logo.jpg",
        { type: "image/jpg" }
      );
      var filesArray = [file];
      var shareData = { files: filesArray };

      if (navigator.canShare && navigator.canShare(shareData)) {
        // Adding title afterwards as navigator.canShare just
        // takes files as input
        shareData.title = "Image";

        navigator
          .share(shareData)
          .then(() => console.log("Share was successful."))
          .catch((error) => console.log("Sharing failed", error));
      } else {
        console.log("Your system doesn't support sharing files.");
      }
    });
}
