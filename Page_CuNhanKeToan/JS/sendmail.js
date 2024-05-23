let form = document.getElementById("send_mail_form");
let btnSubmit = form.querySelector("[type=submit]");
const nganhKeToan = 5;
form.addEventListener("submit",  (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    sendData(formData.get("name"),formData.get("email"),formData.get("sdt"));
}
);

const sendData = async (name,email,sdt) => {
const formdata = new FormData();
formdata.append("name", name);
formdata.append("email", email);
formdata.append("sdt", sdt);
formdata.append("major", nganhKeToan);

const requestOptions = {
    method: "POST",
    body: formdata,
};
btnSubmit.innerHTML = "Đang gửi...";
btnSubmit.disabled = true;
fetch("https://xettuyen.fft.vn/api/landing_page/send-mail", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        alert("Gửi thành công");
        console.log(result);
        btnSubmit.innerHTML = "Gửi ngay";
        btnSubmit.disabled = false;
        form.reset();
    })
    .catch((error) => {
        alert("Lỗi, thử lại sau");
          btnSubmit.innerHTML = "Gửi ngay";
          btnSubmit.disabled = false;
        console.log(error);
    });
}