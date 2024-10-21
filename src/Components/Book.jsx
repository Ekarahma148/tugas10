import { InfoIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

function Book(){
    const [info,setInfo]=useState("");
    const books=[
        {
          id:1, 
          judul:"Bulan",
          image:"src/assets/bulan.jpeg",
          Pengarang:"Tere Liye",
          Penerbit:"PT Gramedia Pustaka Utama",
          Tahun_terbit:2015,
          Halaman:396
        },
          {
          id:2,
          judul:"Ayah",
          image:"src/assets/ayah.jpeg",
          Pengarang:"Andrea Hirata",
          Penerbit:"PT Bentang Pustaka",
          Tahun_terbit:2015,
          Halaman:412
        },
        {
            id:3,
            judul:"Hujan",
            image:"src/assets/hujan.jpeg",
            Pengarang:"Tere Liye",
            Penerbit:"PT Gramedia Pustaka Umum",
            Tahun_terbit:2016,
            Halaman:320
          },
          {
            id:4,
            judul:"Saat-saat Jauh",
            image:"src/assets/saat.jpeg",
            Pengarang:"Lia Seplia",
            Penerbit:"PT Gramedia Pustaka Umum",
            Tahun_terbit:2021,
            Halaman:280
          },
          {
            id:5,
            judul:"Pulang - Pergi",
            image:"src/assets/pp.jpeg",
            Pengarang:"Tere Liye",
            Penerbit:"Sabak Grip Nusantara",
            Tahun_terbit:2021,
            Halaman:417
          },
      
      ]
      function HandleInfo(){

      }
      return(
        <div>
          {books.map((bk) =>(
            <div key={bk.id}>
              <h2>{bk.judul}</h2> <HeartIcon />
              <img src={bk.image} alt="gada" />
              <p>Tahun Terbit : {bk.Tahun_terbit}</p>
              <button><InfoIcon/> informasi</button>
              
            </div>
          ))}
        </div>
      );
      
}

export default Book;