import "./header.scss";
import { Button } from "antd";
import { formatVND } from "../../utils";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate(); //chuyển hướng đến một đường dẫn

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="row">
          <span className="header-hotline">
            <i className="fa-solid fa-phone-volume"></i>Hotline:
            <Link to="#" className="link">
              {" "}
              +84 85 7849874 (Miễn phí)
            </Link>
          </span>
          <div className="header-login">
            <span>
              <i class="fa-solid fa-truck"></i>
              Miễn phí giao hàng từ hóa đơn {formatVND(500000)}
            </span>
            {!isLoggedIn && (
              <Button
                type="link"
                className="button-login"
                onClick={handleLoginClick}
              >
                Đăng nhập
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
