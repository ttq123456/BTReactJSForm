import React, { Component } from 'react'
import { connect } from 'react-redux';

class SinhVien extends Component {
    handleOnChange = (event) => {
        let {value, name} = event.target;
    }

    render() {
        return (
            <div className='nhapThongTin'>
                <h1 className='alert alert-primary'>Thông tin sinh viên</h1>
                <form>
                    <div className='row'>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Mã SV</label>
                                <input className="form-control" name='maSV' />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Họ tên</label>
                                <input className="form-control" name='hoTen' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Số điện thoại</label>
                                <input className="form-control" name="sdt" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input className="form-control" name="email" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Thêm sinh viên</button>
                </form>

            </div>
        )
    }
}

export default connect()(SinhVien)