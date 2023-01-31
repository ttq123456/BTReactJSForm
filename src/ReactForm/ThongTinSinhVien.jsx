import React, { Component } from 'react'
import DanhSachSinhVien from './DanhSachSinhVien'
import SinhVien from './SinhVien'

export default class ThongTinSinhVien extends Component {
    render() {
        return (
            <div className='container'>
                <SinhVien/>
                <DanhSachSinhVien/>
            </div>
        )
    }
}
