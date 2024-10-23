import { InfoIcon } from "lucide-react";
import { Search } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

function Book(){
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
      const [liked,setLiked]=useState({});
      const [info,setInfo]=useState("");
      const [search,setSearch]=useState("");

      const handleLike = (id) => {
        setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
      };
    
      function HandleInfo(bk){
        setInfo(bk);
      }
      const [sortOrder, setSortOrder]=useState("asc");


      const filterData = books.filter((b) =>
        b.judul.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>{
          if(sortOrder === "asc"){
            return a.judul.localeCompare(b.judul);
          }else if (sortOrder==="desc"){
            return b.judul.localeCompare(a.judul);
          }
          else if (sortOrder==="id-asc"){
            return a.id-b.id
          }else if (sortOrder==="pengarang-asc"){
            return b.Pengarang-a.Pengarang
          } 
        }
      );   

      return(
        <div>
          <div className='search'>
        <input
          type="text"
          placeholder="cari disini"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
        <Search />
        <select  className="sort-select" value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
          <option value="id-asc">urutkan id</option>
          <option value="asc">urutkan Judul</option>
          <option value="Pengarang-asc">urutkan pengarang</option>

        </select>
        <select  className="sort-select" value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
          <option value="asc">Diurutkan dari A-z</option>
          <option value="desc">Diurutkan dari Z-A</option>
        </select>
      </div>
      <div className="book-list">

          {filterData.map((bk) =>(
            <div key={bk.id} className="book">
              <h2>{bk.judul} <HeartIcon onClick={() => handleLike(bk.id)} className="heart-icon" style={{ fill: liked[bk.id] ? 'red' : 'white' ,alignItems:"right"}}/> </h2> 
              <img src={bk.image} alt="gada" />
              <p>Tahun Terbit : {bk.Tahun_terbit}</p>
              <button  className="info-button" onClick={() => HandleInfo (bk)}><InfoIcon/> informasi</button>
              
            </div>
          ))}
          {info && (
            <div className="popup">
            <h3>{info.judul}</h3>
            <img src={info.image} alt={info.name} />
            <p>Pengarang: {info.Pengarang}</p>
            <p>Penerbit: {info.Penerbit}</p>
            <p>Tahun Terbit: {info.Tahun_terbit}</p>
            <p>Halaman: {info.Halaman}</p>
            <button  onClick={() => setInfo(null)}>Close</button>
          </div>
        )}
        </div>
        </div>
      );
      
}

export default Book;