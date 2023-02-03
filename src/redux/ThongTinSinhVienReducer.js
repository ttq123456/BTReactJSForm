const initialState = {
  DanhSachSinhVien: [
    {
      maSV: "SV001",
      hoTen: "Trần Văn A",
      sdt: "0912345678",
      email: "test@gmail.com"
    },
    {
      maSV: "SV002",
      hoTen: "Trần Văn B",
      sdt: "0912345789",
      email: "test123@gmail.com"
    }

  ],
  svNhap: {
    values: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: ""
    },
    errors: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
  }
}

export const thongTinSinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LUU_SV":
      state.svNhap.values = action.newValue
      state.svNhap.errors = action.newError
      state.svNhap = {...state.svNhap}
      return {...state}

    case "THEM_SV":
      state.DanhSachSinhVien = [...state.DanhSachSinhVien,action.svThem]
      return {...state}

    case "XOA_SV":
      state.DanhSachSinhVien = [...state.DanhSachSinhVien].filter((sv) => {
        return sv.maSV !== action.svXoa
      })
      return {...state}

    case "XEM_CHI_TIET":
      state.svNhap.values = action.sv
      state.svNhap = {...state.svNhap}
    return {...state}

    case "CAP_NHAT":
      let viTri = state.DanhSachSinhVien.findIndex((sv) => {
        return sv.maSV === state.svNhap.values.maSV
      })
      state.DanhSachSinhVien[viTri] = state.svNhap.values
      state.DanhSachSinhVien = [...state.DanhSachSinhVien]
      return {...state}
    default:
      return state
  }
}
