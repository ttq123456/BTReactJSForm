import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachSinhVien extends Component {

    renderDSSV = () => {
        
        return this.props.dssv.map((sv) => {
            return <tr key={sv.maSV}>
                <th scope="row">{sv.maSV}</th>
                <td>{sv.hoTen}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
                <td>
                    <button onClick={() => {
                        let action = {
                            type: "XOA_SV",
                            svXoa: sv.maSV,
                        }
                        this.props.dispatch(action)
                    }} className='btn btn-danger mr-2'>Xoá</button>
                    <button onClick={() => {
                        let action = {
                            type: "XEM_CHI_TIET",
                            sv: sv,
                        }
                        this.props.dispatch(action)
                    }} className='btn btn-info'>Xem</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className='mt-3'>
                <div>
                    <div className="form-group">
                        <label htmlFor />
                        <input type="text" className="form-control" placeholder="Nhập họ tên SV tìm kiếm" />
                        <button className='btn btn-primary mt-2'>Tìm kiếm</button>
                    </div>

                </div>
                <table className="table">
                    <thead className='alert alert-secondary'>
                        <tr>
                            <th scope="col">Mã SV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDSSV()}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        dssv: rootReducer.thongTinSinhVienReducer.DanhSachSinhVien
    }
}

export default connect(mapStateToProps)(DanhSachSinhVien);