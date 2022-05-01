

const stateDefault = {
    banChon: false, //true Tài
    soBanThang:12,
    tongSoBanChoi:5,
    mangXucXac: [
        {diem:1,src:'./img/gameXucXac/6.png'},
        {diem:1,src:'./img/gameXucXac/6.png'},
        {diem:1,src:'./img/gameXucXac/6.png'},
    ]
}

export const XucXacReducer = (state=stateDefault,action) => {
        switch(action.type) {
            case 'DAT_CUOC': {
                state.banChon = action.banChon;
                return {...state};
            }
            case 'PLAY_GAME': {
                // console.log(123)
                // bước 1: xử lý tạo mảng xúc xác random
                let mangXucXacNgauNhien = [];
                for (let i=1; i<=3; i++) {
                    // mỗi lần chạy tạo ra 1 con số ngẫu nhiên
                    let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                    // từ số ngẫu nhiên tạo ra object xúc xác
                    let xxnn = {diem: soNgauNhien, src:`./img/gameXucXac/${soNgauNhien}.png`}
                    // thêm object ngẫu nhiên vào mảng ngau nhiên
                    mangXucXacNgauNhien.push(xxnn);
                }
                // cập nhật lại state (setState)
                state.mangXucXac = mangXucXacNgauNhien;
                // bước 2: tính điểm thắng thua
                let tongDiem = mangXucXacNgauNhien.reduce ((diem,xucXac) => {
                    return diem + xucXac.diem
                },0)
                // bước 3: tăng bàn chơi lên 1
                if ((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <=11)) {
                    state.soBanThang +=1;
                }
                state.tongSoBanChoi +=1;
                return {...state};
            }
            default: return state; //default là trường hợp chưa gọi gì đến hàm reducer này
        }
}

// return state trong hàm reducer  sẽ phụ thuộc vào giá trị default  của state 
// vd stateDefault  là object  => reducer phải return về object , stateDefault  là arr thì return về arr