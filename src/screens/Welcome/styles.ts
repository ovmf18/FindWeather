import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${(props: any) => props.theme.colors.dark[500]};
  padding: 40px 24px;
  justify-content: space-between;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SubtitleWrapper = styled.View`
  margin-top: 16px;
  padding: 0 20px;
`;

export default { Container, Content, SubtitleWrapper };
