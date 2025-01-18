import "../App.css";

let fullName = "Sophia Shantharupan";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="headerName"> {fullName} </h1>
    </header>
  );
};

export default Header;
