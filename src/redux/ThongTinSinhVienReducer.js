const initialState = {
  DanhSachSinhVien: [

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
    case "THEM_SV":
      state.svNhap.values = action.newValue
      state.svNhap.errors = action.newError
      state.svNhap = {... state.svNhap}
      return {...state}

    default:
      return state
  }
}
