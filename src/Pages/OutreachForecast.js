import { Button, Dropdown, Input, Space, Switch, message } from "antd";
import { DownOutlined } from '@ant-design/icons';

const OutreachForecast = () => {

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const items = [
        {
            label: 'Weekly Forecast',
            key: '1',
            // icon: <UserOutlined />,
        },
        {
            label: 'Monthly Forecast',
            key: '2',
            // icon: <UserOutlined />,
        },
        {
            label: 'Annual Forecast',
            key: '3',
            // icon: <UserOutlined />,
        }
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return <div className="outer-container text-white">
        <div className="flex flex-wrap">
            <div className="w-full sm:w-3/5 md:w-3/5 lg:w-2/5 pt-4 pb-0 md:pb-4 pl-4 pr-4 md:pr-2">
                <div className="block sm:block md:block lg:hidden w-full mb-4">
                    <div style={{ backgroundColor: '#2e2e2e' }} className="min-h-48 rounded-lg border border-gray-600">
                        <div className="border-b text-center py-2 font-bold border-gray-600">
                            <p>Plan</p>
                        </div>
                        <div className="flex flex-wrap w-full">
                            <div className="w-full flex flex-col items-center p-6">
                                <p>With Sixty Seconds</p>
                                <div className="mt-4 mb-2">
                                    <Switch checked />
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center p-6">
                                <p>More Emails</p>
                                <div className="mt-4">
                                    <Input type="range" />
                                </div>
                                <p className="mb-2 text-xs">200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#2e2e2e' }} className="w-full rounded-lg border border-gray-600 px-10 pb-6">
                    <div className="text-center mt-12">
                        <h1 className="text-2xl">Outreach Forecast</h1>
                        <div className="py-8">
                            <Dropdown menu={menuProps}>
                                <Button className="text-white px-6 bg-gray-500 font-bold">
                                    <Space>
                                        Annual Forecast
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2">
                        <p>Emails Sent (100 per day)</p>
                        <p>24,000</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2 text-red-500">
                        <p>Bounced (7%)</p>
                        <p>1680</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2">
                        <p>Opened (30%)</p>
                        <p>6696</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2">
                        <p>Clicks (4.92%)</p>
                        <p>329</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2">
                        <p>Replies (1%)</p>
                        <p>67</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2">
                        <p>Leads (0.1%)</p>
                        <p>7</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-400 py-2">
                        <p>Opportunities (100%)</p>
                        <p>7</p>
                    </div>
                    <div className="flex justify-between py-2">
                        <p>Deals (10.5%)</p>
                        <p>1</p>
                    </div>
                    <div className="mt-8 flex justify-between items-center border-t-2 border-dashed border-gray-400 py-4">
                        <p>Value (AOV £2,500)</p>
                        <p className="font-bold text-xl">£2,500</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-2/5 md:w-2/5 lg:w-3/5 py-4">
                <div className="w-full flex flex-wrap">
                    <div className="hidden sm:hidden md:hidden lg:block w-1/2 px-2">
                        <div style={{ backgroundColor: '#2e2e2e' }} className="min-h-48 rounded-lg border border-gray-600">
                            <div className="border-b text-center py-2 font-bold border-gray-600">
                                <p>Plan</p>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <div className="w-1/2 flex flex-col items-center p-6">
                                    <p>With Sixty Seconds</p>
                                    <div className="mt-4 mb-2">
                                        <Switch checked />
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col items-center p-6">
                                    <p>More Emails</p>
                                    <div className="mt-4">
                                        <Input type="range" />
                                    </div>
                                    <p className="mb-2 text-xs">200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block sm:block md:hidden lg:block w-full md:w-1/2 pr-4 pl-4 md:pl-2">
                        <div style={{ backgroundColor: '#2e2e2e' }} className="min-h-48 rounded-lg border border-gray-600">
                            <div className="border-b text-center py-2 font-bold border-gray-600">
                                <p>KPIs</p>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full md:w-1/2 flex flex-col items-center p-6">
                                    <p>Leads Estimated</p>
                                    <p className="text-4xl font-semibold">7</p>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col items-center p-6">
                                    <p>Deals Estimated</p>
                                    <p className="text-4xl font-semibold">1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#2e2e2e' }} className="block sm:block md:hidden lg:block py-10 md:py-4 ml-4 md:ml-2 mr-4 mt-4 rounded-lg border border-gray-600">
                    <div className=" flex flex-col md:flex-row items-center justify-around ">
                        <div className="text-center py-4 md:py-0">
                            <p className="text-lg">Health Score</p>
                            <p className="text-orange-500 text-4xl font-semibold mt-2">66%</p>
                        </div>
                        <div className="text-center py-4 md:py-0">
                            <p className="text-lg">Weakest Conversion Point</p>
                            <p className="text-4xl font-semibold mt-2">Interested</p>
                        </div>
                        <div className="text-center py-4 md:py-0">
                            <p className="text-lg">Chat With Conversion Bot</p>
                            <Button type="primary" className="bg-blue-600 font-semibold text-white mt-3" size="large">Start Chat</Button>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#2e2e2e' }} className="flex flex-wrap px-5 py-2 ml-4 md:ml-2 mr-4 mt-4 sm:mt-4 md:mt-0 lg:mt-4 rounded-lg border border-gray-600">
                    <div className="w-full"><p className="font-semibold">Outreach Sales Funnel</p></div>
                    <div className="w-full bg-blue-700 mt-5 h-64 sm:h-64 md:h-92 lg:h-64 flex justify-center items-center">
                        <h1>Graph</h1>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#2e2e2e' }} className="w-full hidden sm:hidden md:block lg:hidden py-10 md:py-4 ml-4 md:ml-2 mr-4 mt-4 rounded-lg border border-gray-600">
                <div className=" flex flex-col md:flex-row items-center justify-around ">
                    <div className="text-center py-4 md:py-0">
                        <p className="text-lg">Health Score</p>
                        <p className="text-orange-500 text-4xl font-semibold mt-2">66%</p>
                    </div>
                    <div className="text-center py-4 md:py-0">
                        <p className="text-lg">Weakest Conversion Point</p>
                        <p className="text-4xl font-semibold mt-2">Interested</p>
                    </div>
                    <div className="text-center py-4 md:py-0">
                        <p className="text-lg">Chat With Conversion Bot</p>
                        <Button type="primary" className="bg-blue-600 font-semibold text-white mt-3" size="large">Start Chat</Button>
                    </div>
                </div>
            </div>
            <div className="hidden sm:hidden md:block lg:hidden w-full pr-4 pl-4 md:pl-2 mt-4">
                <div style={{ backgroundColor: '#2e2e2e' }} className="rounded-lg border border-gray-600">
                    <div className="border-b text-center py-2 font-bold border-gray-600">
                        <p>KPIs</p>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className="w-full md:w-1/2 flex flex-col items-center p-6">
                            <p>Leads Estimated</p>
                            <p className="text-4xl font-semibold">7</p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center p-6">
                            <p>Deals Estimated</p>
                            <p className="text-4xl font-semibold">1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default OutreachForecast;