import React from "react";

function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div>
      Layout
      {children}
    </div>
  );
}

export default Layout;
