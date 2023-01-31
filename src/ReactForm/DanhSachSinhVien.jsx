import React, { Component } from 'react'

export default class DanhSachSinhVien extends Component {
  render() {
    return (
        <div className='mt-3'>
        <table className="table">
            <thead className='alert alert-secondary'>
                <tr>
                    <th scope="col">Mã SV</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>

    </div>
    )
  }
}
