import './style.css';

export const TabItem = ({tab, index, setActiveTab}) => {
 
    
    return (
        <button className="btn_tab" value={index} onClick={() => setActiveTab(index)}>
            {tab}
        </button>
    )
}