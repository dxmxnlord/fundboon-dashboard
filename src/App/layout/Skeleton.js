import React, { useState } from 'react';
import classNames from 'classnames';

// import Header from './Header';
// import SideNav from './SideNav';
// import Footer from './Footer';
// import CallBack from './CallBack';

const Skeleton = ({
  id,
  style,
  children,
  noContainer,
  noHeader,
  noFooter,
  noCallback,
  fullHeight
}) => {
  const [isSideNavOpen, setSideNavStatus] = useState(false);

  // return (
  //   <div {...{ id, style }}>
  //     <SideNav
  //       pageWrapId="page-wrap"
  //       outerContainerId={id}
  //       onStateChange={({ isOpen }) => setSideNavStatus(isOpen)}
  //       isOpen={isSideNavOpen}
  //     />
  //     <div id="page-wrap">
  //       {!noHeader && (
  //         <Header onBurgerClick={() => setSideNavStatus(!isSideNavOpen)} />
  //       )}
  //       <div
  //         className={classNames({
  //           container: !noContainer,
  //           'h-100': fullHeight
  //         })}
  //       >
  //         {children}
  //       </div>
  //       {!noCallback && <CallBack/>}
  //       {!noFooter && <Footer />}
  //     </div>
  //   </div>
  // );
  return (
    <div {...{ id, style }}>
      {children}
    </div>
  );
};

export default Skeleton;
