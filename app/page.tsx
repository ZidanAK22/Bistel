import {Input, Textarea, Image, Button} from "@nextui-org/react";

export default function Home() {
  return (
    <div className=" flex flex-row justify-evenly p-20">
      <div className="bg-slate-900 p-20">  
        <div className="flex flex-row bg-slate-400">      
          <Input label="Query" placeholder="coffee" className="m-6 p-10  text-black"/>                    
          {/* <Textarea
            className="m-6"
            isDisabled
            label="Google Trend Results"
            labelPlacement="outside"          
            defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."          
          /> */}
          <Button className="m-6 p-10 bg-white text-black rounded-lg" variant="bordered"> Search </Button>
        </div>
          <Image src="trend.png" className="m-6"/>
        
      </div>                     
      <div className="bg-slate-900 p-20">
        <div className="bg-slate-800 p-10 m-6">
          <p> Growth </p>
          <Image src="graph.png"/>
        </div>
        <div className="bg-slate-800 p-10 m-6">
          <p> Profit</p>
          <Image src="graph2.png"/>
        </div>
      </div>
      
    </div>          
  );
}
