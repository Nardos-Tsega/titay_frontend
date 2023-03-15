import { FcMusic } from "react-icons/fc";
import Ticker from "react-ticker";

export default function VideoFooter() {
  return (
    <div className="relative text-white bottom-[120px] ml-4 flex">
      <div className="flex-1">
        <h1 className="pb-[12px] ">@Nardos_Tsegae</h1>
        <p className="pb-[20px] text-[10px]">Showing of development setup</p>
        {/* videoFooter_ticker */}
        <div className="h-fit ml-8 w-[60%]">
          {/* videoFooter_icon */}
          <FcMusic className="absolute left-0" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>a windows mac</p>
              </>
            )}
          </Ticker>
        </div>
        {/* videoFooter_record */}
        <img
          className="animate-[spin_4s_linear_infinite] h-[50px] invert absolute bottom-0 right-[20px]"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="video footer"
        />
      </div>
    </div>
  );
}
