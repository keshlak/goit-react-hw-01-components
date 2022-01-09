import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Image = styled.img`
  width: 40px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  color: #808080;
`;

export const Location = styled.p`
  composes: tag;
  margin-bottom: 30px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  margin: 0;
  background-color: #e3ffdc;
`;

export const StatsItem = styled.li`
  width: 33.33%;
  padding: 15px;
  border: 1px solid #808080;
`;

export const Label = styled.span`
  display: block;
  line-height: 1.5;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
