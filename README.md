<h1>CRUD APP</h1>
<p>Craete Read Update Delete</p>
<p>Oluştur, oku, düzenle, sil</p>

<ul>
    <li>
        1-KURULUMLAR
        * Projeye bootstrap'i dahil et.
        * index.html'e bootstrap cdn'nini ekle
    </li>
    <li>
        1- Yeni eklenecek elemanı almak için bir form oluştur:
        2- Form içerisinden gelen verileri al ve state aktar
        3- Ekle butonuna basıldığı anda form'a gidilen bilgilerle yeni obje oluştur
        4- Oluşturulan objenin değerleri: Tarih değeri, Kitap ismi, id, Okundu mu?, Okunmadı mı? oluşan objede bu değerler yer alacak.
        5- Obje oluşturulduktan sonra input'u sıfırla
        6- Oluşan objeyi kitaplar isminde bir diziye aktar.
    </li>
    <li>
        7- books state'in de tutulan kitapları al ve map methodu ile listele
        8- Eğer state boşsa ekrana henüz kitap eklenmedi yaz
        9- BookCard bileşenine kitap bilgilerini prop olarak gönder
        10- BookCard bileşeninde kitapla ilgili tüm özellikleri göster
    </li>
    <li>
        11- Kitap silme: Herhangi bir kitabın sil butonuna basıldığında çalışan fonksyona silinecek olan todo'nun id'si gitsin.
        12- Gelen id'yi fonksyon içerisinde al ve o id'ye eşit olmayanları state'e aktar
        13- Silinecek id ye eşit olmayan objeleri al ve bir diziye aktar
        14- Oluşan diziyi state'e aktar.
    </li>
    <li>
        15- Kitabı okundu olarak işaretle
        16- Okundu butonuna basılınca çalışan fonksyona kitabı gönder
        17- Kitabın isRead değerini tersine çevir
        18- Dizi içerisinde değişecek olan elmanı bul
        19- O elemanı çıkar ve yerine yenisi ekle
    </li>

    <li>
        20- Düzenleme işlemini yap
        21- Düzenli butonuna tıklandığında ekrana bir modal çıksın.
        22- Kitap ismini değiştirmek için bir input
        23- Vazgeç butonu modalı kapatır
        24- Kaydet butonu input içeriğini alır ve state'i günceller
        25- Kitabı güncellerken 19. görevdeki adımı tekrarla
    </li>
</ul># bookadd-delete
