import * as React from 'react';
import Avatar from 'react-avatar';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.25rem;

  & > * {
    margin: 0 0.25rem;
  }
`;

export const UserProfileDisplay = ({ user }: { user: string }) => (
  <Container>
    <Avatar name={user} size="30" round={true} />
    <span>{user}</span>
  </Container>
);
