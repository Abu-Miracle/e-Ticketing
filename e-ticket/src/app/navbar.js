import { ConnectButton } from "@rainbow-me/rainbowkit";
//import downArrow from "../../public/downArroww.jpg"

export default function NavBar() {
    return(
        <div className="flex flex-row justify-between px-5 py-1 items-center my-5">
            <div className="text-lg font-bold ml-20">Web3Events</div>

            <div className="flex flex-row gap-10 mr-20 items-center">
                <div className="text-xs flex items-center justify-center">
                    <button>FIND EVENT</button>
                    <img src="/downArrow.svg" alt="down arrow" className="ml-1 translate-y-[0.10rem]"/>
                </div>
                <div className="text-xs  flex items-center justify-center">
                    <button>CREATE EVENT</button>
                    <img src="/downArrow.svg" alt="down arrow" className="ml-1 translate-y-[0.10rem]"/>
                </div>
                <div className="text-xs  flex items-center justify-center">
                    <button>EXPLORE</button>
                    <img src="/downArrow.svg" alt="down arrow" className="ml-1 translate-y-[0.10rem]"/>
                </div>
                <div>
                    <ConnectButton />
                </div>
            </div>
        </div>
    )
}