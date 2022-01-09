import styled from "@emotion/styled";

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  list-style: none;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;

  background-color: ${(props) => {
    switch (props.type) {
      case true:
        return "green";
      case false:
        return "red";
      default:
        return "black";
    }
  }};
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  display: inline-block;
`;
