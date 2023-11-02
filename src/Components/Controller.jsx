import {React,useState} from 'react'
import Textform from './Textform';
import Showdata from './Showdata';
import DataEdit from './DataEdit';
import FilterData from './FilterData';
export default function Controller() {
    const [formDataList, setFormDataList] = useState([]);
    const [editIndex, seteditIndex] = useState(-1)
    const [openModal, setopenModal] = useState(false)
    const [filteringData, setfilteringData] = useState([])
    const handleFormSubmit = (formData) => {
        setFormDataList([...formDataList, formData]);
    };
    const handleDelete = (index) => {
        const newData = [...formDataList]
        newData.splice(index, 1)
        setFormDataList(newData)
    }
    const handleEdit = (index) => {
        seteditIndex(index)
        setopenModal(true)
    }
    const handleSaveEdit = (editedData) => {
        const newDataList = [...formDataList];
        newDataList[editIndex] = editedData;
        setFormDataList(newDataList);
        handleModal()
      };
    const handleModal=()=>{
        setopenModal(false)
    }
   const handleSearch=(filteredData)=>{
    setfilteringData(filteredData)
   }
    return (
        <div>
            <div className="App">
                <h1>Name and Username DataList</h1>
                <Textform onSubmit={handleFormSubmit}/>
                <FilterData data={formDataList} recieveNewdata={handleSearch}/>
                <Showdata data={filteringData.length===0?formDataList:filteringData} onDelete={handleDelete} onEdit={handleEdit} />
                <DataEdit handleModal={handleModal} isModalopen={openModal} onSave={handleSaveEdit} initialData={editIndex!==null?formDataList[editIndex]:{}}/>
            </div>
        </div>
    )
}
