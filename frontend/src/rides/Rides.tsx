import * as React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { config } from '../shared/Config';
import { RideMap } from '../components/RideMap';

const { Title } = Typography;

export const Container = styled.div`
  padding: 3rem 25px 0;
  height: calc(100vh - 57px);
  background-color: #f4f5f4;
`;

const fetchLastRide = (user: string) =>
  fetch(`${config.api}/rides/last/${user}`);

export class Rides extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { data: null };
  }

  componentDidMount(): void {
    fetchLastRide(this.props.user)
      .then((response) => response.json())
      .then((ride: any) => {
        this.setState({ data: ride ? ride.path : null });
      });
  }

  render() {
    return (
      <Container>
        <Title>Twoje zaplanowane przejazdy</Title>

        {this.state.data && (
          <RideMap width={1380} height={700} data={this.state.data} />
        )}
      </Container>
    );
  }
}
