import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseCartitems from '../../hooks/UseCartitems';
import Cart from '../Home/Cart';
import AllCarts from './AllCarts';

const CategoryCart = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseCartitems();
    console.log(menu)
    const Programming = menu.filter(item => item.category === 'Programming');
    const DataScience = menu.filter(item => item.category === 'DataScience');
    const GraphicDesign = menu.filter(item => item.category === 'GraphicDesign');
    const Photography = menu.filter(item => item.category === 'Photography');
    const DigitalMarketing = menu.filter(item => item.category === 'DigitalMarketing');

    return (
        <div className='grid grid-cols-1'>
            <Tabs className="">
                <TabList>
                    <Tab>Programming</Tab>
                    <Tab>Data Science</Tab>
                    <Tab>Graphic Design</Tab>
                    <Tab>Photography</Tab>
                    <Tab>Digital Marketing</Tab>
                </TabList>
                <TabPanel>
                    <AllCarts items={Programming}></AllCarts>
                </TabPanel>
                <TabPanel>
                    <AllCarts items={DataScience}></AllCarts>
                </TabPanel>
                <TabPanel>
                    <AllCarts items={GraphicDesign}></AllCarts>
                </TabPanel>
                <TabPanel>
                    <AllCarts items={Photography}></AllCarts>
                </TabPanel>
                <TabPanel>
                    <AllCarts items={DigitalMarketing}></AllCarts>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default CategoryCart;