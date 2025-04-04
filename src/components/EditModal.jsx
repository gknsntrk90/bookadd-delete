import { useState } from "react";

const EditModal = ({setShowEditModal,setEditItem, editItem, handleEditBook}) => {
    const [newBookName,setNewBookName] = useState("");
    const handleSave = () => {
       
       
        // Modal'ı kapatır
        setShowEditModal(false);
    };

    return(<div className="confirm-modal">
                <div className="modal-inner">

        <h5>Kitap İsmini Düzenle</h5>

        <input value={editItem.title} type="text" className="form-control shadow" onChange={setEditItem({...editItem,title:editItem.target.value, date: new Date().toLocaleString(),})}/>

<div className="d-flex justify-content-between mt-4">
    <button className="btn btn-warning" onClick={() => setShowEditModal(false)}>Vazgeç</button>
    <button className="btn btn-success" onClick={()=> {
         handleSave();
         handleEditBook();
        }}>Kaydet</button>
</div>

                </div>
        </div>
    )
}

export default EditModal;