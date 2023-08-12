import { TheHeader } from '@/features/header/components';
import { TheSidebar } from '@/features/sidebar/components';

type Props = React.PropsWithChildren;
export const HeaderSidebarLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="h-[8vh]">
        <TheHeader />
      </div>
      <div className="h-[92vh]">
        <div className="grid h-full grid-cols-12">
          <div className="col-span-2">
            <TheSidebar />
          </div>
          <div className="col-span-10 px-20 py-12">{children}</div>
        </div>
      </div>
    </>
  );
};
