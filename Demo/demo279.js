// cai moi viet hom nay 25-7
let sliderEl = document.querySelector("#slider");
console.log(sliderEl);
function ChangeImage() {
    let sliderEl = document.querySelector("#slider");
    sliderEl.src = "images/slider-2.jpg";
}
setTimeout(ChangeImage, 5000);
// end 
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
document.querySelector('#serviceRow').innerHTML = serviceElement;
//demo1-8
function loadMore() {
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
}