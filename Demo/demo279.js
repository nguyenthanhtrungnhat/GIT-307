// cai moi viet hom nay 25-7
let sliderEl = document.querySelector("#slider");
console.log(sliderEl);
function ChangeImage() {
    let sliderEl = document.querySelector("#slider");
    sliderEl.src = "images/slider-2.jpg";
}
setTimeout(ChangeImage, 5000);
// end 

//demo1-8
function loadMore1() {
    const serviceArr = ['Thiết kế', 'Xây dựng', 'Vận hành', 'Chăm sóc bảo dưỡng', 'Huấn luyện', 'Chăm sóc cỏ'];
    let serviceElement = '';
    for (const s of serviceArr) {
        serviceElement += `<div class="col-lg-4 col-sm-12 item-sv">
                            <article class="servicePicture">
                                <img src="images/service-design.jpg" loading="lazy">
                                <div class="text-sv">
                                    <h2>${s}</h2>
                                    <p>Đội ngũ thiết kế sân golf hơn 10 năm kinh nghiệm, thi công đạt tiêu chuẩn quốc
                                        tế.
                                    </p>
                                </div>
                            </article>
                        </div>`;
    }
    let oldData = document.querySelector('#serviceRow').innerHTML;
    document.querySelector('#serviceRow').innerHTML = oldData + serviceElement;
    // 1/8

}
// 5/8 demo 
const serviceRowEl = document.getElementById("serviceRow");
serviceRowEl.addEventListener("load", loadMore());
function loadMore() {

    fetch("http://139.180.213.49/getdata.php?type=golf")
        .then((Response) => {
            if (!Response.ok) {
                throw new new Error("Error");
            }
            return Response.json();
        })
        .then((data) => {
            let serviceElement = '';
            for (const s of data) {
                serviceElement += `<div class="col-lg-4 col-sm-12 item-sv">
              <article class="servicePicture">
                  <img src="${s.imageURL}" loading="lazy">
                  <div class="text-sv">
                     <h2><strong>${s.Title}</strong></h2>
                        <p>${s.Content}</p>
                  </div>
              </article>
          </div>`;
            }
            //jquery
            $('#serviceRow').append(serviceElement);
        });
}
// 5/8 end



