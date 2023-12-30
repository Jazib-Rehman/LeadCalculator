import { FaCalculator } from "react-icons/fa";
import './ResultsCalculator.css';
import { Input, Switch } from "antd";

const ResultsCalculator = () => {
    return <div className="outer-container text-white">
        <div className="flex items-center p-10">
            <FaCalculator color="white" size={24} />
            <h1 className="text-3xl ml-2 font-bold">Result Calculator</h1>
        </div>
        <div className="flex flex-wrap items-center mt-10 p-10">
            <div className="w-1/3 px-5 scroll-container" >
                <p className="py-2 font-bold">Daily sends</p>
                <p className="py-2">100</p>
                <p className="py-2 font-bold">Simulate more emails</p>
                <Input type="range" />
                <div className="flex items-center">
                    <Switch defaultChecked />
                    <p className="ml-2">With sixty seconds</p>
                </div>
                <div className="w-full h-64"></div>
            </div>
            <div className="w-1/3 px-5 scroll-container" >
                <p className="py-2 font-bold">Campain Stats</p>
                <p className="py-2">55% Open Rate</p>
                <p className="py-2">55% Bounce Rate</p>
                <p className="py-2">30% Click Through Rate</p>
                <p className="py-2">2% Reply Rate</p>
                <p className="py-2">0.6% Interested Rate</p>
                <div className="w-full h-64"></div>
            </div>
            <div className="w-1/3 px-5 scroll-container" >
                <p className="py-2 font-bold">Sales Stats</p>
                <p className="py-2">100% Lead To Opportunity</p>
                <p className="py-2">10.5% Opportunity to Deal</p>
                <p className="py-2">£2500 Average</p>
                <p className="py-2">Client Pay Monthly</p>
                <div className="w-full h-64"></div>
            </div>
            <div className="w-full mt-12 flex flex-wrap">
                <div className="w-full flex flex-wrap justify-end">
                    <div className="w-1/4 text-center"><p className="text-xl font-bold">Weekly</p></div>
                    <div className="w-1/4 text-center"><p className="text-xl font-bold">Monthly</p></div>
                    <div className="w-1/4 text-center"><p className="text-xl font-bold">Annual</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end mt-4 py-2 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Bounce Rate</span>(3%)</p>
                    </div>
                    <div className="w-1/4 text-center"><p className="">45</p></div>
                    <div className="w-1/4 text-center"><p className="">180</p></div>
                    <div className="w-1/4 text-center"><p className="">2160</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end py-2 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Opens</span></p>
                    </div>
                    <div className="w-1/4 text-center"><p className="">800</p></div>
                    <div className="w-1/4 text-center"><p className="">3,201</p></div>
                    <div className="w-1/4 text-center"><p className="">38,412</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end py-2 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Clicks</span>(30%)</p>
                    </div>
                    <div className="w-1/4 text-center"><p className="">240</p></div>
                    <div className="w-1/4 text-center"><p className="">960</p></div>
                    <div className="w-1/4 text-center"><p className="">11,524</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end py-2 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Replies</span>(2%)</p>
                    </div>
                    <div className="w-1/4 text-center"><p className="">16</p></div>
                    <div className="w-1/4 text-center"><p className="">64</p></div>
                    <div className="w-1/4 text-center"><p className="">768</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end py-2 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Leads</span>(0.6%)</p>
                    </div>
                    <div className="w-1/4 text-center"><p className="">5</p></div>
                    <div className="w-1/4 text-center"><p className="">19</p></div>
                    <div className="w-1/4 text-center"><p className="">230</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end py-2 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Opportunity</span>(100%)</p>
                    </div>
                    <div className="w-1/4 text-center"><p className="">5</p></div>
                    <div className="w-1/4 text-center"><p className="">19</p></div>
                    <div className="w-1/4 text-center"><p className="">230</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end py-2 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Deal</span>(10.5%)</p>
                    </div>
                    <div className="w-1/4 text-center"><p className="">0</p></div>
                    <div className="w-1/4 text-center"><p className="">2</p></div>
                    <div className="w-1/4 text-center"><p className="">24</p></div>
                </div>
                <div className="w-full flex flex-wrap justify-end py-4 border-gray-300">
                    <div className="w-1/4 pr-4">
                        <div className="border border-dashed" />
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="border border-dashed" />
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="border border-dashed" />
                    </div>
                    <div className="w-1/4 pl-4">
                        <div className="border border-dashed" />
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-end items-center py-1 border-l-4 border-gray-300 pl-6">
                    <div className="w-1/4">
                        <p><span className="font-bold">Value</span>( AOV @ £2,500)</p>
                    </div>
                    <div className="w-1/4 text-center"><p className="font-bold text-xl">£0</p></div>
                    <div className="w-1/4 text-center"><p className="font-bold text-xl">£5,042</p></div>
                    <div className="w-1/4 text-center"><p className="font-bold text-xl">£443,659</p></div>
                </div>
            </div>
        </div>
    </div>
}

export default ResultsCalculator;