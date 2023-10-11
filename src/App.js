import "./App.css";

function App() {
    return (
        <div>
            <div className="infor">
                <img src="img/hihi.jpeg" alt="" />
                <h1>Lương Gia Hân</h1>
                <p className="number">1106 bạn bè</p>
                <ul className="menu">
                    <li>
                        Bài viết
                        <ul className="submenu">
                            <li>1 năm trước</li>
                            <li>2 năm trước</li>
                            <li>3 năm trước</li>
                            <li>4 năm trước</li>
                        </ul>
                    </li>
                    <li>Giới Thiệu</li>
                    <li>Bạn bè</li>
                    <li>Ảnh</li>
                    <li>Video </li>
                    <li>Check in</li>
                </ul>
                <div className="about">
                    <h2>Giới thiệu</h2>
                    <p>FontEnd Dev - UI Designer - Teacher</p>
                    <p>"Nhận thiết kế website"</p>
                    <button>Chỉnh sửa tiểu sử</button>
                    <ul className="menusecond">
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
                <audio controls>
                    <source src="audio/GioThiAiCuoi-HIEUTHUHAIKewtiie-11870235.mp3" type="audio/mpeg" />
                </audio>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/36oHB1VHIhs?si=pAZOLEtjOPVuhnBn"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default App;
