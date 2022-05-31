import styled, { useTheme } from 'styled-components'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'
import useFetch from '../../hooks/useFetch'

const Chart = ({ userName }) => {
  const theme = useTheme()
  const { userData, fetchUser } = useFetch()
  fetchUser(userName)

  const info = [
    {
      x: 'Following',
      y: userData.following ? userData.following : 0,
      label: userData.following,
    },
    {
      x: 'Followers',
      y: userData.followers ? userData.followers : 0,
      label: userData.followers,
    },
  ]

  return (
    <ChartWrapper bgColor={theme.colors.light}>
      <VictoryChart
        domainPadding={90}
        style={{ parent: { height: 180, width: 300 } }}
      >
        <VictoryAxis domain={[1, 2]} style={{ tickLabels: { fontSize: 22 } }} />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: {
              fontSize: 22,
              display:
                userData.followers === 0 && userData.following === 0
                  ? 'none'
                  : 'block',
            },
            axis: {
              display:
                userData.followers === 0 && userData.following === 0
                  ? 'none'
                  : 'block',
            },
          }}
          tickCount={3}
          tickFormat={(t) => Math.round(t)}
        />
        <VictoryBar
          data={info}
          x="x"
          y="y"
          style={{
            data: { fill: theme.colors.dark },
            labels: { fontSize: 22 },
          }}
        />
      </VictoryChart>
    </ChartWrapper>
  )
}

export default Chart

const ChartWrapper = styled.div`
  padding: 0.8rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 1rem;
  box-shadow: 0px 4px 25px gray;
`
