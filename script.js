const containerImage=document.querySelector(".container-image");
const image=document.querySelector("img");

containerImage.addEventListener("mousemove", imageZoom);

function imageZoom(e){
    const zoomInfo=containerImage.getBoundingClientRect();
    console.log(zoomInfo);

    const x=e.clientX - zoomInfo.left;
    const y=e.clientY - zoomInfo.top;

    const pourcentageX= (x / zoomInfo.width) *100;
    const pourcentageY= (y / zoomInfo.height) *100;
    image.style.transformOrigin=`${pourcentageX}% ${ pourcentageY}%`
    

}