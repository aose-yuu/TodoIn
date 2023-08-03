import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const ViewPortLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="min-h-screen w-screen">{children}</div>;
};
