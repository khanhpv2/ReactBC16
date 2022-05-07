import { http } from "../../../util/config";

// closure action
export const getPhimApiAction =(maNhom = 'GP01') => {
    return async (dispatch)=> {
        // gọi api 1
        // gọi api 2
        // xử lý
        try {
    
          //goi api bang axios
          let result = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
      
          // DUA DU LIEU TU API VE REDUX
          const action = {
            type:'LAY_DANH_SACH_PHIM',
            arrPhim: result.data.content
          };
         
      
          console.log('DATA',result.data)
          dispatch(action)
        } catch (err) {
          console.log(err)
        }
      };
}






