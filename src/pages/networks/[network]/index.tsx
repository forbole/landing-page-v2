import Network from "@src/screens/network";

const NetworkPage = (props) => {
  return <Network {...props} />;
};

NetworkPage.getInitialProps = ({ query }) => {
  const { network } = query;
  return {
    networkKey: network,
  };
};

export default NetworkPage;
