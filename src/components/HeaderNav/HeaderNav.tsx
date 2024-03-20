import * as S from "./HeaderNav.styles";
import { HeaderProps } from "./HeaderNav.types";
import PeopleIcon from "@assets/icons/ion_person.svg?react";
import PrevIcon from "@assets/icons/ion_chevron-back.svg?react";
import LogoIcon from "@assets/icons/기억해봄.svg?react";
import { useNavigate } from "react-router-dom";

const Header = ({ type, text }: HeaderProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/myPage");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      {type === "withLogo" && (
        <>
          <S.HeaderWithLogo>
            <S.TitleText>
              <LogoIcon />
            </S.TitleText>
            <button onClick={handleClick}>
              <PeopleIcon />
            </button>
          </S.HeaderWithLogo>
        </>
      )}
      {type === "withPrevButton" && (
        <>
          <S.HeaderWithMiddleText>
            <button onClick={goBack}>
              <PrevIcon />
            </button>
            <span>{text}</span>
          </S.HeaderWithMiddleText>
        </>
      )}
      {type === "textOnly" && (
        <>
          <S.HeaderWithMiddleText>
            <span>{text}</span>
          </S.HeaderWithMiddleText>
        </>
      )}
    </>
  );
};

export default Header;
