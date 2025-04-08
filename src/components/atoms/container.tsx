import React from "react";

type Props = {
    children: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className="mx-auto container">{children}</div>;
};

export default Container;
