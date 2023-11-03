//회원리스트
import { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;

const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  min-width: 240px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const MemberList = () => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState("");
  // 로그인 되지 않은상태로 진입하면 강제 홈으로 전환
  const isLogin = window.localStorage.getItem("isLogin");
  if (isLogin != "TRUE") navigate("/");

  useEffect(() => {
    // 비동기 함수 만들기
    const memberList = async () => {
      try {
        //백엔드 응답이 없으면 오류가 나옴 -> try catch 구문을 이용하여 코드가 죽지 않도혹 해야함. 서버가 없으면 빈 화면이라도 나오도록 해야한다.
        const resp = await AxiosApi.memberList("ALL"); //ALL은 id 전체조회라고 약속만 하면 된다.
        if (resp.status === 200) setMemberList(resp.data);
        console.log(resp.data);
      } catch (e) {
        console.log("네트워크 에러 : " + e);
      }
    };
    memberList();
  }, []);

  const onClickMember = (id) => {
    console.log("onClick memberID : " + id);
  };

  return (
    <>
      <Container>
        {/* 화면출력 구간. 값이 있으며 출력하는 조건문 */}
        {memberList &&
          memberList.map((member) => (
            <MemberInfoWrapper
              key={member.id}
              onClick={() => onClickMember(member.id)}
            >
              <MemberId>ID : {member.id}</MemberId>
              <MemberName>이름 : {member.name}</MemberName>
              <MemberEmail>이메일 : {member.email}</MemberEmail>
              <MemberJoinDate>가입일 : {member.join}</MemberJoinDate>
            </MemberInfoWrapper>
          ))}
      </Container>
    </>
  );
};

export default MemberList;
