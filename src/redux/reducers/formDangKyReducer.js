const stateDefault = {
    mangNguoiDung : [
        {taiKhoan:'nguyenvana',hoTen:'Nguyễn Văn A',email:'nguyenvana@gmail.com',matKhau:'12123',
        soDienThoai:'09054546',loaiNguoiDung:'QuanTri'},
        {taiKhoan:'nguyenvanb',hoTen:'Nguyễn Văn B',email:'nguyenvanb@gmail.com',matKhau:'541212',
        soDienThoai:'545415151',loaiNguoiDung:'QuanTri'},
        {taiKhoan:'levanc',hoTen:'Lê Văn A',email:'levanc@gmail.com',matKhau:'515454',
        soDienThoai:'09959595959',loaiNguoiDung:'QuanTri'}
    ],
    nguoiDungSua : {taiKhoan:'nguyenvana',hoTen:'Nguyễn Văn A',email:'nguyenvana@gmail.com',matKhau:'12123',
    soDienThoai:'09054546',loaiNguoiDung:'QuanTri'}
}

export const formDangKyReducer = (state=stateDefault,action) => {
    switch(action.type) {


        case 'DANG_KY': {
            state.mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung];
            return {...state};
        }
        case 'XOA_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung];
            state.mangNguoiDung = state.mangNguoiDung.filter(nd => nd.taiKhoan !== action.taiKhoan);
            return {...state}
        }
        case 'SUA_NGUOI_DUNG': {
            state.nguoiDungSua = action.nguoiDung;
            return {...state};
        }
        case 'CAP_NHAT_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung];
            // tìm ra object chinh sửa dựa vào tài khoản
            let nguoiDungCapNhat = state.mangNguoiDung.find (nd => nd.taiKhoan === action.nguoiDung.taiKhoan);
            if (nguoiDungCapNhat) {
                // nguoiDungCapNhat.email = action.nguoiDung.email
                for (let key in nguoiDungCapNhat) {
                    nguoiDungCapNhat[key] = action.nguoiDung[key];
                }
            }
            return {...state}
        }   


        default : return state;
    }
}