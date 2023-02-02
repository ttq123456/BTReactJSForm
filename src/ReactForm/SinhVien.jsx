import React, { Component } from 'react'
import { connect } from 'react-redux';

class SinhVien extends Component {
    handleOnChange = (event) => {
        let {value, name} = event.target;
        let sv = {...this.props.svNhap.values};
        sv[name] = value;

        let typeform = event.target.getAttribute("typeform")
        let mesError = "";
        if (value.trim() === "") {
            mesError = `${name} không được để trống`;
        }
        let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (typeform === "email") {
            if (!regexp.test(value)) {
                mesError = "Email không đúng định dạng"
            }
        }

        let regexpSdt = /[0-9]{10}/g
        if (typeform==="sdt") {
            if (!regexpSdt.test(value)){
                mesError = "Số điện thoại không hợp lệ"
            }
        }
        let newError = {...this.props.svNhap.errors}
        newError[name] = mesError

        let action = {
            type: "THEM_SV",
            newValue: sv,
            newError: newError,
        }
        this.props.dispatch(action)

    }

    render() {
        let {errors} = this.props.svNhap
        return (
            <div className='nhapThongTin'>
                <h1 className='alert alert-primary'>Thông tin sinh viên</h1>
                <form>
                    <div className='row'>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Mã SV</label>
                                <input onChange={this.handleOnChange} className="form-control" name='maSV' />
                                <p className='text-danger'>{errors.maSV}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Họ tên</label>
                                <input onChange={this.handleOnChange} className="form-control" name='hoTen' />
                                <p className='text-danger'>{errors.hoTen}</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Số điện thoại</label>
                                <input onChange={this.handleOnChange} className="form-control" name="sdt" typeform="sdt"/>
                                <p className='text-danger'>{errors.sdt}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input onChange={this.handleOnChange} className="form-control" name="email" typeform="email" />
                                <p className='text-danger'>{errors.email}</p>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Thêm sinh viên</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        svNhap: rootReducer.thongTinSinhVienReducer.svNhap,
    }
}

export default connect(mapStateToProps)(SinhVien)