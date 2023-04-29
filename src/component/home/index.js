import { useState } from "react";
import { Link } from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Input, Select, Pagination } from 'antd';
import { FaRegCopy } from "react-icons/fa";

import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const App = () => <Pagination defaultCurrent={1} total={50} />;



function HomePage(options) {
    const { Search } = Input;
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const [age, setAge] = useState('');

    const onSearch = (value) => console.log(value);
    const CustomInputComponent = ({ inputRef, ...rest }) => (<>
        <img src="/image/lgo-vcb.png" alt="logo" />
        <input ref={inputRef} {...rest} type="text" />
        <FaRegCopy />
    </>
    );
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    return <>
        {/* Banner slider */}
        <div className={cx("banner-slider")}>
            <div className={cx("description-baner")}>
                <p className={cx("desc-item")}>Mỗi người một chút</p>
                <h1 className={cx("desc-item")}>Ít thôi nhưng đều đặn</h1>

            </div>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 5000,
                }}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className={cx("iteam-img")}>
                        <Link to="/" >
                            <img src="/image/slide4.jpg" />

                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={cx("iteam-img")}>
                        <Link to="/" >

                            <img src="/image/slide5.jpg" />
                        </Link>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className={cx("iteam-img")}>
                        <Link to="/" >

                            <img src="/image/slide6.jpg" />
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={cx("iteam-img")}>
                        <Link to="/" >

                            <img src="/image/slide7.jpg" atl="Baner" />
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

        <section className={cx("content")}>
            <div className="container">
                <p className={cx("feature-intro")}>
                    "Nếu bạn đồng hành cùng Cơm Có Thịt, thì đó chỉ là do mệnh lệnh từ trái tim của bạn" - Trần Đăng Tuấn
                </p>
            </div>

            {/* transfer info */}
            <div className={cx("transparency-info")}>
                <div className={cx("tranfer-info")}>
                    <h2 className={cx("title-tranfer")}>THỐNG KÊ ỦNG HỘ QUỸ TRÒ NGHÈO VÙNG CAO</h2>
                    <div className={cx("desc-info", "fund-info")}>
                        Số TK:
                        <strong className={cx("")} >0611001917137</strong>
                        , Tên TK:
                        <strong>QUỸ TRÒ NGHÈO VÙNG CAO</strong>
                        , Swift Code:
                        <strong>BFTVVNVX061</strong>
                    </div>
                    <div className={cx("desc-info", "bank-info")}>
                        Ngân hàng Ngoại Thương Việt Nam - Vietcombank, chi nhánh Ba Đình, Hà Nội
                    </div>
                </div>
                <div className="container">

                    <div className={cx("row")}>
                        <div className={cx("total-bank col-12 col-md-6")}>
                            <div className={cx("info-fund-banck")}>
                                <p> Tài khoản Vietcombank</p>
                                <p className={cx("name-fund")}>QUY TRO NGHEO VUNG CAO</p>
                            </div>

                            <Box
                                component="form"
                                sx={{
                                    // '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField
                                    id="outlined-read-only-input"
                                    label="Số tài khoản"
                                    defaultValue="0611 0019 17137"
                                    className={cx("style-input")}
                                    InputProps={{
                                        inputComponent: CustomInputComponent,
                                        readOnly: true
                                    }}
                                    // variant="filled"
                                    focused
                                />
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Số tiền ủng hộ (VNĐ)"
                                    className={cx("style-input")}
                                // value="Số tiền ủng hộ (VNĐ)"
                                // multiline
                                // maxRows={4}
                                />
                                <TextField
                                    className={cx("style-input")}
                                    id="outlined-textarea"
                                    className={cx("style-input")}
                                    label="Nội dung chuyển khoản"
                                // placeholder="Placeholder"
                                // multiline
                                />

                            </Box>


                        </div>
                        <div className={cx("total-bank co-12 col-md-6")}>
                            <div className={cx("Pay-QR")}>

                                <div className={cx("title-QR")}>
                                    Chuyển khoản <span>Viet</span> <span>QR</span>
                                </div>

                                <div className={cx("img-Qr")}>
                                    <img src="" alt="image-QR" />
                                </div>
                                <div className={cx("sub-QR")}>
                                    <img src="./image/logo_napas247.png" alt="27/7" />
                                    <img src="./image/logo_vietcombank.png" alt="banck" />

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            <div className="container">
                <div className={cx("head-list-sup")}>
                    <p>Powered by <a href="https://chuyenkhoan.com/">Chuyenkhoan.com</a>.</p>


                </div>
                <div className={cx("list-suport-total")}>
                    <p className={cx("show-total")}>
                        SỐ TIỀN ĐÃ ỦNG HỘ / CHI NĂM 2023:
                        <strong className={cx("sms-total-in")}>5.043.109.936</strong>
                        /
                        <strong className={cx("sms-total-out")}>-4.307.011.006</strong>
                        VND.
                    </p>

                    <div className={cx("show-total-input-out")}>

                        <div className={cx("filter-list")}>

                            <div className={cx("filter-search")}>
                                <Select
                                    mode="multiple"
                                    placeholder="Inserted are removed"
                                    value={selectedItems}
                                    onChange={setSelectedItems}
                                    style={{
                                        width: '150px'

                                    }}
                                    options={filteredOptions.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />


                                <Search

                                    placeholder="input search text"
                                    allowClear
                                    onSearch={onSearch}
                                    className={cx("search-filter")}
                                    style={{ width: 150 }}
                                />
                            </div>
                        </div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tài khoản nhận</th>
                                    <th scope="col">Ngày chuyển</th>
                                    <th scope="col">Số tiền</th>
                                    <th scope="col">Nội dung</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">0611001917137</th>
                                    <td>1 phút trước
                                        2023-04-28 11:41:30</td>
                                    <td>+9.000</td>
                                    <td>837496.280423.120143.THACH TAN Chuyen tien</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>


                        <div className={cx("pagination")}>
                            <div >
                                <p>Powered by <a href="#">Chuyenkhoan.com
                                </a></p>
                            </div>

                            <App />
                        </div>
                    </div>
                </div>



                {/* tnvc_info */}
                <div className={cx("tcvc-info")}>

                    <div className={cx("tranfer-info")}>
                        <h2 className={cx("title-tranfer-nomal")}>Tài khoản ủng hộ Cơm có thịt Tây Nguyên</h2>
                        <div className={cx("desc-info", "fund-info")}>
                            Số TK:
                            <strong className={cx("")} >0611001976574</strong>
                            , Tên TK:
                            <strong>QUỸ TRÒ NGHÈO VÙNG CAO</strong>
                            , Swift Code:
                            <strong>BFTVVNVX061</strong>
                        </div>
                        <div className={cx("desc-info", "bank-info")}>
                            Ngân hàng Ngoại Thương Việt Nam - Vietcombank, chi nhánh Ba Đình, Hà Nội
                        </div>
                    </div>

                    <p className={cx("show-total")}>
                        SỐ TIỀN ĐÃ ỦNG HỘ / CHI NĂM 2023:
                        <strong className={cx("sms-total-in")}>5.043.109.936</strong>
                        /
                        <strong className={cx("sms-total-out")}>-4.307.011.006</strong>
                        VND.
                    </p>

                    <div className={cx("show-total-input-out")}>

                        <div className={cx("filter-list")}>

                            <div className={cx("filter-search")}>
                                <Select
                                    mode="multiple"
                                    placeholder="Inserted are removed"
                                    value={selectedItems}
                                    onChange={setSelectedItems}
                                    style={{
                                        width: '150px'

                                    }}
                                    options={filteredOptions.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />


                                <Search

                                    placeholder="input search text"
                                    allowClear
                                    onSearch={onSearch}
                                    className={cx("search-filter")}
                                    style={{ width: 150 }}
                                />
                            </div>
                        </div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tài khoản nhận</th>
                                    <th scope="col">Ngày chuyển</th>
                                    <th scope="col">Số tiền</th>
                                    <th scope="col">Nội dung</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">0611001917137</th>
                                    <td>1 phút trước
                                        2023-04-28 11:41:30</td>
                                    <td>+9.000</td>
                                    <td>837496.280423.120143.THACH TAN Chuyen tien</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>


                        <div className={cx("pagination")}>
                            <div >
                                <p>Powered by <a href="#">Chuyenkhoan.com
                                </a></p>
                            </div>

                            <App />
                        </div>
                    </div>
                </div>

                {/* mientrung_info */}
                <div className={cx("mientrung-info")}>

                    <div className={cx("tranfer-info")}>

                        <div className={cx("desc-info", "fund-info")}>
                            Số TK:
                            <strong className={cx("")} >0611001976574</strong>
                            , Tên TK:
                            <strong>QUỸ TRÒ NGHÈO VÙNG CAO</strong>
                            , Swift Code:
                            <strong>BFTVVNVX061</strong>
                        </div>
                        <div className={cx("desc-info", "bank-info")}>
                            Ngân hàng Ngoại Thương Việt Nam - Vietcombank, chi nhánh Ba Đình, Hà Nội
                        </div>
                    </div>

                    <p className={cx("show-total")}>
                        SỐ TIỀN ĐÃ ỦNG HỘ / CHI NĂM 2023:
                        <strong className={cx("sms-total-in")}>5.043.109.936</strong>
                        /
                        <strong className={cx("sms-total-out")}>-4.307.011.006</strong>
                        VND.
                    </p>

                    <div className={cx("show-total-input-out")}>

                        <div className={cx("filter-list")}>

                            <div className={cx("filter-search")}>
                                <Select
                                    mode="multiple"
                                    placeholder="Inserted are removed"
                                    value={selectedItems}
                                    onChange={setSelectedItems}
                                    style={{
                                        width: '150px'

                                    }}
                                    options={filteredOptions.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />


                                <Search

                                    placeholder="input search text"
                                    allowClear
                                    onSearch={onSearch}
                                    className={cx("search-filter")}
                                    style={{ width: 150 }}
                                />
                            </div>
                        </div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" className={cx("stk-info")} >Tài khoản nhận</th>
                                    <th scope="col">Ngày chuyển</th>
                                    <th scope="col">Số tiền</th>
                                    <th scope="col">Nội dung</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className={cx("stk-info")}>0611001917137</th>
                                    <td>1 phút trước
                                        2023-04-28 11:41:30</td>
                                    <td>+9.000</td>
                                    <td>837496.280423.120143.THACH TAN Chuyen tien</td>
                                </tr>
                                <tr>
                                    <th scope="row" className={cx("stk-info")}>2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>

                            </tbody>
                        </table>


                        <div className={cx("pagination")}>
                            <div >
                                <p>Powered by <a href="#">Chuyenkhoan.com
                                </a></p>
                            </div>

                            <App />
                        </div>
                    </div>
                </div>


                {/* image */}
            </div>

        </section>
        <div className={cx("detail-image")}>
            <img src="./image/detail-homePage.jpg" alt="detail" />

        </div>


        <div className="container">
            <div className={cx("sub-detail-page")}>

                <h3>"Yêu thương trao đi là yêu thương còn mãi"</h3>
                <p>Hãy cùng chúng tôi chọn người -
                    chọn nơi để thương, để yêu, để sẻ chia.
                    Và đó là những em nhỏ vùng cao ngoan hiền,
                    đang sống ở những nơi nghèo khó, giúp các em bớt chật vật hơn
                    khi tới trường. Hãy cùng cảm nhận niềm vui,
                    hạnh phúc với các em bằng những đóng góp nho nhỏ -
                    ít thôi nhưng đều đặn. Yêu thương bao giờ cũng có
                    đủ cho tất cả mọi người. Sự yêu thương mà chúng ta cho
                    đi là sự yêu thương mà chúng ta giữ mãi được cho mình.
                </p>
            </div>
        </div>

        <div className={cx("section-fearute", "container-fluid")}>
            <div className={cx("absulute-wrap")}>
                <img src="./image/com-thit.png" alt="absulute-wrap" />
            </div>
            <div className={cx("section-fearute-list", "row")}>
                <div className={cx("col-md-6 col-12", "item-frearute", "item-f")}>
                    <div className={cx("box-item")}>

                        <div className={cx('icon')}>
                            <img src="/image/icon-people.png" alt="icon" />
                        </div>

                        <div className={cx("item-fear")}>
                            <h3>Đối tượng</h3>
                            <p>Học sinh nghèo có hoàn cảnh khó khăn, chủ yếu là ở vùng cao. Các trường hợp học sinh gặp khó khăn đặc biệt khác. Học sinh, giáo viên, nhân dân vùng thiên tai, vùng gặp khó khăn đột xuất.</p>
                        </div>
                    </div>
                </div>
                <div className={cx("col-md-6 col-12", "item-frearute")}>
                    <div className={cx("box-item")}>

                        <div className={cx('icon')}>
                            <img src="/image/icon-people.png" alt="icon" />
                        </div>

                        <div className={cx("item-fear")}>
                            <h3>TỔ CHỨC</h3>
                            <p>
                                Trụ sở chính tại Hà Nội, mạng lưới tình nguyện trên cả nước và nhiều quốc gia. Các hình thức ủng hộ quỹ gồm: Cộng đồng ủng hộ; Quỹ từ thiện độc lập là đối tác thường xuyên; Các cá nhân ủng hộ...Chủ tịch Hội đồng quản lý: Nhà báo Trần Đăng Tuấn; Chủ tịch danh dự: GS. Ngô Bảo Châu; Phó chủ tịch kiêm Giám đốc Quỹ điều hành công việc hàng ngày: Nhà báo Nguyễn Anh Tú.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx("col-md-6 col-12", "item-frearute")}>
                    <div className={cx("box-item")}>

                        <div className={cx('icon')}>
                            <img src="/image/icon-people.png" alt="icon" />
                        </div>

                        <div className={cx("item-fear")}>
                            <h3>Đối tượng</h3>
                            <p>Trụ sở chính tại Hà Nội, mạng lưới tình nguyện trên cả nước và nhiều quốc gia. Các hình thức ủng hộ quỹ gồm: Cộng đồng ủng hộ; Quỹ từ thiện độc lập là đối tác thường xuyên; Các cá nhân ủng hộ...Chủ tịch Hội đồng quản lý: Nhà báo Trần Đăng Tuấn; Chủ tịch danh dự: GS. Ngô Bảo Châu; Phó chủ tịch kiêm Giám đốc Quỹ điều hành công việc hàng ngày: Nhà báo Nguyễn Anh Tú.</p>
                        </div>
                    </div>
                </div>
                <div className={cx("col-md-6 col-12", "item-frearute", "item-f")}>
                    <div className={cx("box-item")}>

                        <div className={cx('icon')}>
                            <img src="/image/icon-people.png" alt="icon" />
                        </div>

                        <div className={cx("item-fear")}>
                            <h3>Đối tượng</h3>
                            <p>Hỗ trợ tiền để bổ sung dinh dưỡng cho bữa ăn tại lớp tại các trường vùng cao, vùng đặc biệt khó khăn. Hỗ trợ xây dựng phòng học, ký túc xá, bếp ăn, đồ dùng, vật dụng học tập cần thiết cho học sinh, các phương tiện nâng cao đời sống tinh thần của học sinh, giáo viên vùng cao. Tổ chức các hoạt động quyên góp, các hoạt động gây quỹ dưới nhiều hình thức.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </>
}

export default HomePage