let inputVatLi;
let inputSinhHoc;
let inputHoaHoc;
inputVatLi   = prompt(" Diem Vat Li");
inputSinhHoc = prompt("Diem Sinh Hoc");
inputHoaHoc = prompt("Diem Hoa Hoc");

let VatLi = parseInt(inputVatLi);
let SinhHoc = parseInt(inputSinhHoc);
let HoaHoc = parseInt(inputHoaHoc);



let DTB = (VatLi+SinhHoc+HoaHoc)/3;
document.write("DTB: "  +DTB );