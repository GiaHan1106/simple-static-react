import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div>
            <div className="infor">
                <img src="img/hihi.jpeg" alt="" />
                <h1>Lương Gia Hân</h1>
                <p className="number">1106 bạn bè</p>
                <ul className="menu">
                    <li>Bài viết</li>
                    <li>Giới Thiệu</li>
                    <li>Bạn bè</li>
                    <li>Ảnh</li>
                    <li>Video</li>x<li>Check in</li>
                </ul>
                <div className="about">
                    <h2>Giới thiệu</h2>
                    <p>FontEnd Dev - UI Designer - Teacher</p>
                    <p>"Nhận thiết kế website"</p>
                    <a>Chỉnh sửa tiểu sử</a>
                    <ul>
                        <li>
                            <i className="fa-solid fa-house"></i> Trường đại học công nghệ thông tin - đhqg
                        </li>
                        <li>
                            <i className="fa-solid fa-wifi"></i> Trường THPT Trần Văn Thành
                        </li>
                        <li>
                            <i className="fa-solid fa-map-pin"></i> Sống ở Thành phố Hồ Chí Minh
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
