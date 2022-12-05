
function diem (){
    let toan = +document.getElementById('toan').value
    let ly = +document.getElementById('ly').value
    let hoa = +document.getElementById('hoa').value
    let diemtrungbinh = (toan + ly + hoa)/3
    let tong = toan + ly + hoa
    document.getElementById('dtb').innerText = diemtrungbinh
    document.getElementById('tong').innerText = tong

}
