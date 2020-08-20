import React from 'react';
import {
  CodeEditor,
  TopNavigation,
  Toolbar,
  MoreVisibilityModal,
} from '../components';
import Resume from '../components/Resume';

const Home = () => (
  <div>
    <TopNavigation />
    <Resume />
    <Toolbar />
    <CodeEditor />
    <MoreVisibilityModal />
  </div>
);

Home.defaultProps = {
};

Home.propTypes = {
};

export default Home;
