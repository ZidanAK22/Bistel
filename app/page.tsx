'use client';
import {Input, Textarea, Image, Button} from "@nextui-org/react";
import { useState } from "react";

export default function Home() {

  const [city, setCity] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleCityChange = (event:any) => {
    setCity(event.target.value);
  };

  const handleCheck = async () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }
  
    try {
      const response = await fetch('https://a8fd-118-96-224-27.ngrok-free.app/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
      });
  
      // Debugging: Log the response to see if there's any error
      console.log(response);
  
      const data = await response.json();
      // Debugging: Log the data received from the server
      console.log(data);
  
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-bold text-5xl p-6 mt-5">Apakah membuat UMKM &quot;Worth it&quot; Di Kota Anda?</h1>
      <div className=" flex flex-row justify-evenly p-20">            
        <div className="bg-slate-900 p-20 align-middle">                 
          <p className="text-lg font-medium">Masukkan Nama Kota anda Disini!</p> 
          <div className="flex flex-row bg-slate-400">                          
            <Input placeholder="Kota Cimahi" className="m-6 p-10 text-black" value={city} onChange={handleCityChange}/>                                
            <Button className="m-6 p-10 bg-white text-black rounded-lg" variant="bordered" onClick={handleCheck}> Check! </Button>
          </div>
            {/* <Image src="trend.png" className="m-6"/> */}          
            {prediction && (
            <p className="mt-5 text-lg text-white">{prediction}</p>
          )}
          <p className="italic mt-5 text-sm">n.b Data hanya tersedia untuk kota-kota tertentu pada Provinsi Jawa Barat</p>  
        </div>                     
        {/* Pretty side boxes */}
        <div className="bg-slate-900">
          <div className="bg-slate-800 p-10 m-6">
            <p className="font-bold"> Growth </p>
            <br/>
            <p>
            Pertumbuhan UMKM di Jawa Barat menunjukkan perkembangan pesat berkat dukungan pemerintah melalui pelatihan, akses permodalan, dan peningkatan infrastruktur. Adaptasi teknologi digital oleh pelaku UMKM turut meningkatkan daya saing dan ekspansi pasar. Dengan dukungan berkelanjutan, UMKM di Jawa Barat diharapkan terus berkembang dan berkontribusi lebih besar pada perekonomian nasional.
            </p>
          </div>
          {/* <div className="bg-slate-800 p-10 m-6">
            <p> Profit</p>
            <Image src="graph2.png"/>
          </div> */}
        </div>      
      </div>              
      <h1 className="font-bold text-5xl p-6 mt-5">Cek Datanya Langsung!</h1>
      <iframe width="1200" height="600" src="https://lookerstudio.google.com/embed/reporting/9a6b5a41-f982-40d1-bf5d-6e6718cc07bc/page/xBTrD" frameBorder="0" style={{border:0}} allowFullScreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
      <p className="text-sm font-light mt-5 mb-5">Made by 齐丹27 & Dapa</p> 
    </div>
  );
}
