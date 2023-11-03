//홈화면
//화면이동을 위한 훅 useNavigate
import { useNavigate } from "react-router-dom";

import { ButtonContainer, TransBtn } from "../component/ButtonContaitner";
import imgBottom from "../images/nedbank_s.png";

const Home = () => {
  const navigate = useNavigate();
  const onClickBtn = (num) => {
    switch (num) {
      case 1:
        navigate("/memberlist");
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        navigate("/setting");
        break;
      default:
    }
  };

  return (
    <>
      <div>
        <ButtonContainer>
          <TransBtn onClick={() => onClickBtn(1)}>회원리스트</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>뉴스보기</TransBtn>
          <TransBtn onClick={() => onClickBtn(3)}>사진 업로드</TransBtn>
          <TransBtn onClick={() => onClickBtn(4)}>테마 변경</TransBtn>
        </ButtonContainer>
        <div className="bdlogo">
          <img src={imgBottom} alt="buttonimg" />
        </div>
      </div>
    </>
  );
};

export default Home;
