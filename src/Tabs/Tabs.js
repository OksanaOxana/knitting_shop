import { TabItem } from "./TabItem"

const Tabs = ({setActiveTab}) => {
    return (
        <div>
            {
                ['Origins of knitting', 'Knitting was invented', 'Knitting in Europe'].map((tab, index) => (
                    <TabItem 
                    key={index}
                    tab={tab}
                    index={index}
                    setActiveTab={setActiveTab}/>
                ))
            }
        </div>
    )
}
export default Tabs;