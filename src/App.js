import { useState } from "react";
import BookCard from "./components/BookCard";
import { toast } from "react-toastify";
import EditModal from "./components/EditModal";


function App() {
  const [bookName, setBookName] = useState("");
  const[books,setBooks] = useState([]);
  const [showConfirm,setShowConfirm] = useState(false);
  const [deleteId,setDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // EKLE BUTONUNA TINLANDIĞI ANDA ÇALIŞIR
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!bookName) {
      // Bildirim Verme
        toast.warn("Lütfen kitap ismi giriniz",{autoClose: 2000});
        // Fonksyonu durdurma
        return;
    }

    
    // kitap için gerekli bilgilere sahip obje oluşturma
    const newBook = {
      id: new Date().getTime(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead:false,
    };

    // Oluşturulan kitap objesini kitaplar dizisine aktar
    // spread operatör kullanacağız önceden eklenenleri muhavaza eder daha öncekileri tutar silmez
    setBooks([...books, newBook]);

    // ELEMAN EKLENİNCE İNPUT'U SIFIRLA
    setBookName('');
  };

  //modalı aç kapa
  const handleModal = (id) => {
    // id'yi state'e aktarma
    setDeleteId(id);
    // modalı açma
    setShowConfirm(true);
  }
  // sil butonu bastığında çalışır
  const handleDelete = (deletingId) => {
    // silinecek id ye eşit olmayan objeleri al ve bir diziye aktar
    const filtred = books.filter((item) => item.id !== deletingId);
// oluşan diziyi state'e aktar
    setBooks(filtred);

    // Bildirim vermek
    toast.error('Kitap Silindi');
  };

  // okundu butonuna basınca çalışır
  // 1- okundu değerini tersine çevir
  // 2- books dizisinin bir kopyasını oluştur
  // 3- düzenlenecek olan kitabın dizideki sırasını bul
  // 4- eski kitabı diziden çıkar yerine güncellenmiş versiyonu koy
  // 5- güncel olan kopya diziyi state'e aktar 
  const handleRead = (book) => {
    // Okundu değerini tersine çevir
    const updatedBook = {...book, isRead: !book.isRead};
    // dizinin kopyasını oluşturma
    const cloneBooks = [...books];

    const index = cloneBooks.findIndex((item)=> item.id === book.id);
   
   

    cloneBooks.splice(index, 1, updatedBook);


    setBooks(cloneBooks);

    
  };
 
//KİTABI GÜNCELLER
  const handleEditBook = () => {
    // değişecek elemanın dizideki sırasını bulur
    const index = books.findIndex((book)=> book.id === editItem.id)
    // kitaplar dizisinin kopyasını oluşturma
    const cloneBooks = [... books];
    // eski kitabı diziden çıkar yerine yenisi koy
    cloneBooks.splice(index,1,editItem);
    //state'i güncellemek lazım çünkü kopya diziyi state'e aktarmış olacağız
    setBooks(cloneBooks);
    // modalı kapat
    setShowEditModal(false);

  };

  return (
    <div>
      {/* HEADER */}
        <div className="bg-dark text-light px-5 py-2 fs-5 text-center">KİTAP KURDU</div>
    {/* CONTAINER */}
    <div className="container border">
      {/* FORM */}
      <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
        <input onChange={(e)=>setBookName(e.target.value)} 
        value={bookName}
        className="form-control shadow" type="text"/>
        <button className="btn btn-warning shadow">Ekle</button>
      </form>

      <div className="d-flex flex-column gap-3 py-5">
        {/* Eğer state içerisi boş ise ekrana bunu yaz */}
        {books.length === 0 && (
          <h4>Henüz herhangi bir kitap eklenmedi</h4>
        )}

        {/* Eğer state içerisinde eleman varsa onları listele */}
        {books.map((book) => (
          <BookCard key={book.id} 
          book={book} 
          handleModal={handleModal} 
          handleRead = {handleRead}
          setShowEditModal={setShowEditModal}
          setEditItem={setEditItem}
          />
        ))}
      </div>
    </div>
    {/*MODAL TANIMLAMA */}
    {showConfirm && (
    <div className="confirm-modal">
      <div className="modal-inner shadow">
      <h5>Silmek istiyor musunuz?</h5>
        <button className="btn btn-warning" onClick={() => setShowConfirm(false)}>Vazgeç</button>
        <button className="btn btn-danger" onClick={() => {handleDelete(deleteId)
          setShowConfirm(false)
        }}>Onayla</button>
      </div>
      </div>
      )};

      {/* Düzenleme Modal'ı */}
      {showEditModal && <EditModal setShowEditModal={setShowEditModal} setEditItem={setEditItem} editItem={editItem} handleEditBook={handleEditBook}/>}
    </div>
  );
}

export default App;
